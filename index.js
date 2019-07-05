const debug = require("debug")("evolvus-pdf-email:createPdf");
const phantomPath = require('witch')('phantomjs-prebuilt', 'phantomjs');
var base64Img = require('image-to-base64');
var fs = require('fs'),
    pdf = require('html-pdf'),
    ejs = require('ejs');
var pdfStoragePath = process.env.PDF_STORAGE_PATH || "/home/kavyak/CHARGES/pdf/";
var staticFilesPath = process.env.STATIC_FILES_PATH || "/home/kavyak/CHARGES/static/";
var renderFilePath = `${staticFilesPath}pdf.ejs`;
var logoPath = process.env.LOGO_PATH || '/home/kavyak/Pictures/logo.jpg';
debug("File path to render pdf.ejs file", renderFilePath);

module.exports.generatePdf = (billObject, corporateLinkageDetails, GSTRate) => {
    return new Promise(async (resolve, reject) => {
        debug("File path to render pdf.ejs file", renderFilePath);
        let imageToBase64 = await base64Img(logoPath);
        ejs.renderFile(renderFilePath, {
            billingObject: billObject,
            corporate: corporateLinkageDetails,
            transactions: billObject.details,
            GSTRate: GSTRate,
            logoAsBase64String: imageToBase64
        }, (err, result) => {
            // render on success
            if (result) {
                var options = {
                    filename: `${billObject.utilityCode}_${billObject.billPeriod}_${billObject.billNumber}_GeneratedBillNotification.pdf`,
                    format: 'A2',
                    phantomPath: `${phantomPath}`,
                    orientation: 'portrait',
                    type: "pdf",
                    timeout: '100000'
                };
                var filename = `${billObject.utilityCode}_${billObject.billPeriod}_${billObject.billNumber}_GeneratedBillNotification.pdf`;
                pdf.create(result, options).toFile(`${pdfStoragePath}${filename}`, function (err, res) {
                    if (err) {
                        console.log(err);

                        debug("failed to generate PDF", err);
                        reject("failed to generate PDF");
                    } else {
                        debug(`pdf ${billObject.utilityCode}_${billObject.billPeriod}_${billObject.billNumber}_GeneratedNotification.pdf generated successfully. `);
                        resolve(res);
                    }
                });
            }
            // render or error
            else {
                debug("failed to render ejs file.", err);
                reject(err);
            }
        });
    });

}
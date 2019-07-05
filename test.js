var index = require("./index");

var _ = require("lodash")

var billingObject = {
    "billFrequency": "Monthly",
    "billStatus": "Awaiting Confirmation",
    "finalChargesAmount": 1025.00,
    "actualChargesAmount": 1025.00,
    "billNumber": "4344744508",
    "corporateName": "Airtel",
    "utilityCode": "INDB00477000028001",
    "updatedBy": "SYSTEM",
    "createdBy": "SYSTEM",
    "billDate": "2018-10-31T10:07:48.255Z",
    "billPeriod": "Sep2018",
    "finalGSTAmount": 184.5,
    "actualGSTAmount": 184.5,
    "finalTotalAmount": 1209.5,
    "actualTotalAmount": 1209.5,
    "__v": 0,
    "email": "kavyavshaiva@gmail.com",
    "chargePlan": "ACH premium",
    "details": [{
        name: 'Single Paper Mandate Creation',
        rate: 10,
        number: '20',
        sum: 200
    }, {
        name: 'Single Paper Mandate Amendment',
        rate: 20,
        number: '40',
        sum: 800
    }, {
        name: 'Single Paper Mandate Cancel',
        rate: 5,
        number: '5',
        sum: 25
    }]

};

var corporate = {
    enabledFlag: 'true',
    deletedFlag: 'false',
    _id: "5bd815941ba9b03eb744f53c",
    corporateName: 'Airtel',
    utilityCode: 'INDB00477000028001',
    chargePlan:
    {
        chargeCodes: [[Object], [Object], [Object]],
        enabledFlag: 'true',
        deletedFlag: 'false',
        _id: "s",
        name: 'CHARGEPLANONE',
        createdBy: 'kavyak',
        createdDateAndTime: "2018-10-30T08:14:43.295Z",
        updatedBy: 'kavyak',
        updatedDateAndTime: "2018-10-30T08:14:43.295Z",
        __v: 0
    },
    corporateAccount: '2756765237532632GF',
    billingAddress: 'Evolvus solutions pvt ltd',
    emailId: 'kavya@gmail.com',
    GSTINnumber: 'KA12345678VBNML',
    createdBy: 'kavyak',
    createdDateAndTime: "2018-10-30T08:25:56.155Z",
    updatedBy: 'kavyak',
    updatedDateAndTime: "2018-10-30T08:25:56.155Z",
    tenantId: 'T001',
    __v: 0
}


var transactions = [{
    name: 'Single Paper Mandate Creation',
    rate: 10,
    number: '20',
    sum: 200
}, {
    name: 'Single Paper Mandate Amendment',
    rate: 20,
    number: '40',
    sum: 800
}, {
    name: 'Single Paper Mandate Cancel',
    rate: 5,
    number: '5',
    sum: 25
}];

var GSTRate = 18;

index.generatePdf(billingObject, corporate, transactions, GSTRate).then((res) => {
    console.log(res);

}).catch(e => {
    console.log(e);

})
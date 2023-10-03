"use strict";
var _a;
let sales = 123456789;
let course = 'typescript';
let user = [1, 'Mosh'];
;
var Des;
(function (Des) {
    Des[Des["Size"] = 0] = "Size";
    Des[Des["Medium"] = 1] = "Medium";
    Des[Des["Large"] = 2] = "Large";
})(Des || (Des = {}));
;
let mySize = 1;
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
kgToLbs(10);
kgToLbs('10kg');
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity = 50;
let metric = 'cm';
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
console.log();
//# sourceMappingURL=index.js.map
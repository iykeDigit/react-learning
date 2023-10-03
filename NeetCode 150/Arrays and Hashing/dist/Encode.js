"use strict";
function encode(strs) {
    let str = [];
    let delimeter = String.fromCharCode(257);
    for (let item of strs) {
        str.push(item);
        str.push(delimeter);
        ;
    }
    let m = str.join("").toString().slice(0, str.length - 1);
    return m;
}
;
function decode(s) {
    let str = s.split(String.fromCharCode(257));
    return str;
}
;
let dummy_input = ["Hello", "World"];
let x = decode(encode(dummy_input));
console.log(x);
//# sourceMappingURL=Encode.js.map
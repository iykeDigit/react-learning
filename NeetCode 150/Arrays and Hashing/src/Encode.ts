function encode(strs: string[]): string {
    let str:string[] = [];
    let delimeter: string = String.fromCharCode(257);
    for(let item of strs){
        str.push(item);
        str.push(delimeter);;
    }
    let m = str.join("").toString().slice(0, str.length-1);
    return m//.slice(0, m.length-1);
};

/**
 * Decodes a single string to a list of strings.
 */
function decode(s: string): string[] {
    let str = s.split(String.fromCharCode(257));
    return str;
};

let dummy_input = ["Hello","World"];
let x = decode(encode(dummy_input));
console.log(x);
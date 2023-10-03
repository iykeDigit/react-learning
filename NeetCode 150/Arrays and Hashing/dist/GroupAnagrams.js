"use strict";
function groupAnagrams(strs) {
    let map = new Map();
    for (let s of strs) {
        let arr = Array.from({ length: 26 }, () => 0);
        for (let i = 0; i < s.length; i++) {
            arr[s.charCodeAt(i) - 97]++;
        }
        let key = arr.toString();
        if (!map.get(key))
            map.set(key, []);
        map.get(key).push(s);
    }
    return Array.from(map.values());
}
;
//# sourceMappingURL=GroupAnagrams.js.map
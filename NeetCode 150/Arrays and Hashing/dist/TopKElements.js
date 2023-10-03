"use strict";
function topKFrequent(nums, k) {
    let max = 0;
    let map = new Map();
    for (let num of nums) {
        if (!map.has(num)) {
            map.set(num, 1);
        }
        else {
            let val = map.get(num);
            map.set(num, val + 1);
        }
        max = Math.max(max, map.get(num));
    }
    let bucket = new Map();
    map.forEach((value, key) => {
        if (!bucket.has(value))
            bucket.set(value, []);
        bucket.get(value).push(key);
    });
    let result = [];
    let count = 0;
    for (let i = max; i > 0; i--) {
        if (bucket.has(i)) {
            for (let item of bucket.get(i)) {
                if (count < k) {
                    result.push(item);
                    count++;
                }
                else {
                    return result;
                }
            }
        }
    }
    return result;
}
topKFrequent([3, 0, 1, 0], 1);
//# sourceMappingURL=TopKElements.js.map
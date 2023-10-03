"use strict";
function longestConsecutive(nums) {
    let set = new Set();
    let max = 0;
    for (let item of nums) {
        if (set.has(item - 1))
            continue;
        else {
            let count = 1;
            while (set.has(item + count)) {
                count++;
            }
            max = Math.max(max, count);
        }
    }
    return max;
}
;
longestConsecutive([100, 4, 200, 1, 3, 2]);
//# sourceMappingURL=LongestConsecutiveSequence.js.map
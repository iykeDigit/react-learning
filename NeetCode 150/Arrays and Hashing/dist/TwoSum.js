"use strict";
function twoSum(nums, target) {
    let map = new Map();
    let result;
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        else {
            map.set(nums[i], i);
        }
    }
    return [];
}
;
//# sourceMappingURL=TwoSum.js.map
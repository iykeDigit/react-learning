function longestConsecutive(nums: number[]): number {
    let set = new Set(nums);
    let max = 0;
    for(let item of nums){
        if(set.has(item-1)) continue;
        else{
            let count = 1;
            while(set.has(item + count)){
                count++;
            }
            max = Math.max(max, count);
        }
    }
    return max;
};

longestConsecutive([100,4,200,1,3,2]);
//O(n) => space
//O(n) => time
function containsDuplicate(nums: number[]): boolean{
    const set = new Set(nums); 
    return set.size == nums.length;
}
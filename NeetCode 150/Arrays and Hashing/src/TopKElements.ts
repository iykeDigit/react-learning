function topKFrequent(nums: number[], k: number) : number[]{
    let max: number = 0;
    let map = new Map<number, number>();
    for(let num of nums){
        if(!map.has(num)){
            map.set(num, 1);
        }
        else{
            let val = map.get(num)!;
            map.set(num, val+1);
        }
        max = Math.max(max, map.get(num)!);
    }

    //switch key and values
    let bucket = new Map<number, number[]>();
    map.forEach((value, key) => {
        if(!bucket.has(value)) bucket.set(value, []);
        bucket.get(value)!.push(key);
        
    })

    let result = [];
    let count:number = 0;
    for(let i = max; i > 0; i--){
        if(bucket.has(i)){
            for(let item of bucket.get(i)!){
                if(count < k){
                    result.push(item);
                    count++;
                }
                else{
                    return result;
                }
            }
        }
    }
    return result;
}

topKFrequent([3,0,1,0], 1);



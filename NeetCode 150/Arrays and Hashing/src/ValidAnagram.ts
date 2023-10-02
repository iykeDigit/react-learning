function isAnagram(s:string, t: string): boolean{
    if(s.length != t.length) return false;

    const characterCount = new Map<string, number>();
    for(const character of s){
        characterCount.set(character, (characterCount.get(character) || 0) + 1);
    }

    const otherCount = new Map<string, number>();
    for(const character of t){
        otherCount.set(character, (otherCount.get(character) || 0) + 1);
    }

    for(const[char, count] of characterCount){
        if(otherCount.get(char) !== count){
            return false;
        } 
    }
    return true;
}

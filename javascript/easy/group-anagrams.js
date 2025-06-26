var groupAnagrams = function(strs) {
    let anagram = {};

        for(let str of strs){
            let count = new Array(26).fill(0);
            for(let char of str){
                count[char.charCodeAt(0) - "a".charCodeAt(0)] += 1;
            }
            let key = count.join(",");
            if(!anagram[key]){
                anagram[key] = [];
            }
            anagram[key].push(str);
        }

        return Object.values(anagram)
};

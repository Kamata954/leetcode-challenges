class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = "";
        for(let word of strs){
            res += word.length + "#" + word;
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let l = 0;
        let res = [];

        for(let i = 0; i < str.length; i++){
            if(str[i] == "#" && i > l){
                let len = +str.slice(l,i);
                res.push(str.slice(i+1,i + len + 1));
                l = i + len + 1;
            }
        }

        return res;
    }
}

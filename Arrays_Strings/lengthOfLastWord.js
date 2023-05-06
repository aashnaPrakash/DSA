/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    let l = s.length-1;
    let len=0;
    while(l>=0){
        if(s[l]!=' '){
            len++;
        }
        else {
            if(len){
                break;
            }
        }
        l--;
    }
    return len;
};
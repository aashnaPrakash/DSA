/*print location of each permutation of a smaller string in bigger string*/
const findPerms = (small,big) => {
   //factorial will give perm of smaller string that will be very heavy operation
    let wsize = small.length;
    let locations = [];
    for (let i=0;i<big.length;i++){
        if(check_Perm(big.substr(i,wsize),small)){
            locations.push(i);
        }
    }
    return locations;
}

const check_Perm = (str1, str2) => {
    let char_count = new Array(128).fill(0);
    for(let i=0;i<str1.length;i++){
        let ascii_char = str1.charCodeAt(i);
        char_count[ascii_char]++;
    }
    for(let j=0;j<str2.length;j++){
        let ascii_char = str2.charCodeAt(j);
        char_count[ascii_char]--;
        if(char_count[ascii_char]<0)
            return false;
    }
    return true;
}
console.log(findPerms('abbc','cbabadcbbabbcbabaabccbabc'));
//O(small.length*big.legth)
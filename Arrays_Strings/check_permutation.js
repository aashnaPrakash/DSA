/*Check if one string is permutation of another*/
const check_Perm = (str1,str2) => {
    //check if length is not same
    if(str1.length != str2.length){
        return false;
    }
    //check if the sorted strings are equal
    //assumes uppercase letter and lowercase is diff
    //return str1.split('').sort().join('') === str2.split('').sort().join('');
    let char_count= new Array(128).fill(0);
    for(let i=0;i<str1.length;i++){
        let ascii_char = str1.charCodeAt(i);
        char_count[ascii_char]++;
    }
    for (let i=0;i<str2.length;i++){
        let ascii_char = str2.charCodeAt(i);
        char_count[ascii_char]--;
        if(char_count[ascii_char]<0){
            return false;
        }
    }
    return true;
}


console.log(check_Perm('abbc','babc'));
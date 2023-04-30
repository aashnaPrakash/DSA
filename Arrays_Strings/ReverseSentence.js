const reverseSentence = (str) =>{
    let i = 0, j = str.length-1;
    let newstr = '';
    let final_str = '';
    for(j;j>=0;j--){
        if(str[j] != ' '){
            newstr = `${str[j]}${newstr}`;
        }
        else {
            final_str = final_str + ' ' + newstr;
            newstr = '';
        }
    }
    if(newstr){
        final_str = final_str + ' ' + newstr;
    }
    return final_str;
}

console.log(reverseSentence("     the big brown fox"));
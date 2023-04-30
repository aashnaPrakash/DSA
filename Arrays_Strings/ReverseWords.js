const ReverseWords = (str) => {
    let j = str.length;
    let i=0;
    let newstr = '';
    let final_str = '';
    for(i;i<j;i++){
        if(str[i] != ' '){
            newstr = str[i] +newstr;
        }
        else {
            final_str = final_str+ ' ' +newstr;
            newstr ='';
        }
    }
    if(newstr){
        final_str = final_str+ ' ' +newstr;
    }
    return final_str;
}

console.log(ReverseWords('the big brown fox'));
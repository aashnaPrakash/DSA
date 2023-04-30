/*replaces all spaces in string with %20, string has space to hold additional chars in the end*/
//common method is to start scanning from end of string
//uses 2 scan approach
const countSpaces =(str, len) => {
    let spaces = 0;
    for(let i=0;i<len;i++){
        if(isSpace(str[i]))
            spaces++;
    }
    return spaces;
}

const isSpace = (char) => {
    return char === ' ';
}

const Urlify = (str, len) => {
    //remove extra spaces if not counted in truelength
    if(str.length>len){
        str = str.substring(0,len);
    }
    //count spaces
    let spaces = countSpaces(str,len);
    var index = len + (spaces *2);
    //replace with %20
    let strnew = new Array();
    for(let j=len-1;j>=0;j--){
        if(isSpace(str[j])){
            strnew[index-1] = '0';
            strnew[index-2] = '2';
            strnew[index-3] = '%';
            index = index-3;
        }
        else {
            strnew[index-1] = str[j];
            index--;
        }
    }
    return strnew.join('');
}



console.log(Urlify("Mr John Smith     ",13));
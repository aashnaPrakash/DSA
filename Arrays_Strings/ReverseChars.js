/* reverse characters of string*/
const reverseChars = (str) => {
    let i=0;j=str.length-1;
    let newstr = '';
  for(j;j>=i;j--){
      newstr+=str[j];
  }
    return newstr;
}


console.log(reverseChars('aashna'));
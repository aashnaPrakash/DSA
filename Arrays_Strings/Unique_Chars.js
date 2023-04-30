/*Find if a string has all unique chars
*/
const String_Has_Unique_Chars = (str) => {
    if(str.length>128){
        //ASCIIchars are 128 in number.
        return false;
    }
    else {
        var ascii_arr = new Array(128).fill(false);
        for(var i=0;i<str.length;i++){
            let ascii_val = str.charCodeAt(i);
            if(ascii_arr[ascii_val]){
                return false;
            }
            else {
                ascii_arr[ascii_val] = true;
            }
        }
        return true;
    }
    
}

console.log(String_Has_Unique_Chars("aef%dk@0*#2e"));
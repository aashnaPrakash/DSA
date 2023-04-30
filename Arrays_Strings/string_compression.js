/*compress a string ,, if length is not smaller than original , return original*/
const compress_string = (str) => {
    let len_original = str.length;
    let final_string_arr = [];
    let count = 1;
    if(len_original === 1){
        return str;
    }
    else {
        for(var i=1;i<len_original;i++){
            if(str[i] === str[i-1]){
                count++;
            }
            else {
                let new_str = `${str[i-1]}${count}`;
                count = 1;
                final_string_arr.push(new_str);
            }
        }
        if(i === len_original){
            let new_str = `${str[i-1]}${count}`;
            final_string_arr.push(new_str);
        }
        if(final_string_arr.join('').length === len_original){
            return str;
        }
        else return final_string_arr.join('');
    }
}

console.log(compress_string('aabcccccaaa'));
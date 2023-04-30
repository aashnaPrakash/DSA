const validAnagram = (s,t) => {
    if(s.length != t.length) {
        return false;
    }
    let char_arr = new Array(26).fill(0);
    for(let i=0;i<s.length;i++){
        char_arr[s.charCodeAt(i)-'a'.charAt(0)]++;
        char_arr[t.charCodeAt(i)-'a'.charAt(0)]--;
    }
    for (var i = 0; i < char_arr.length; i++) {
        if (char_arr[i] !== 0) {
            return false;
        }
    }
    return true;
}

//one way is to calculate frequencies of each letter and store it in diff maps and then compare them
//another way is to sort strings and compare them
console.log(validAnagram('anagram', 'nagaram'));
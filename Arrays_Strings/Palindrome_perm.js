/*given a string, ifnd if its a permutation of a palindrome*/
const check_pal_perm = (str) => {
    let freq_map = {};
    for(let i=0;i<str.length;i++){
        let char = str[i].toLowerCase();
        if(freq_map[char]){
            freq_map[char]--;
        }
        else {
            freq_map[char] = 1;
        }
    }
    console.log(freq_map);
    let sum = 0;
   for(i in freq_map){
       if(freq_map[i] === 1 && i!=' '){
          sum++;
       }
   }
   if(sum === 1) return true;
   else return false;
}
console.log(check_pal_perm("Tact Coatt"));
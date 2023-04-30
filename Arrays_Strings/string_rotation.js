/* check if s1, is roation of s2*/
const isSubstring = (s1,s2) => {
    if(s1.length === s2.length && s1.length>0){
        s1 = `${s1}${s1}`; //xyxy will always have yx which is s2
        return s1.indexOf(s2)?true:false;
    }
}

console.log(isSubstring('waterbottle', 'erbottlewat'));
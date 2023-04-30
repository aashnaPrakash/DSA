/* 3 edits - replace/remove/insert , find if a string is one edit away from given string*/
const one_edit_away = (str1,str2) => {
    if(Math.abs(str1.length - str2.length)>1){
        return false;
    }
    if(str1.length === str2.length){
        return checkReplace(str1,str2);
    }
    else if(str1.length+1 === str2.length){
        return checkInsert(str1, str2);
    }
    else return checkInsert(str2, str1);

}
checkReplace = (s1, s2) => {
    let i=0,j=0, p=0;
    while(i<s1.length && j <s1.length){
        if(s2[j]!=s1[i]){
            p++;
            if(p>1) return false;
        }
        i++;
        j++;
    }
    return true;
}

checkInsert = (s1, s2) => {
    let i=0,j=0;
    while(i<s1.length || j <s2.length){
        if(s2[j]!=s1[i]){
            if(i!=j) return false;
            j++;
        }
        else{
            i++;
            j++;
        }
       
    }
    return true;
}

console.log(one_edit_away("pales", "pafe"));
console.log(one_edit_away("pale", "spale"));
console.log(one_edit_away("pale", "pabe"));
console.log(one_edit_away("pale", "spaled"));
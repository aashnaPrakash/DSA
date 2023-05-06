/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let i = s.length-1;
    let j = t.length-1;
    while(i >= 0 || j >=0){
        if(s[i] == '#' || t[j] == '#'){
            if(s[i] == '#'){
                let backcount=2;
                while(backcount>0){
                    backcount--;
                    i--;
                    if(s[i]=='#'){
                        backcount+=2;
                    }
                }
            }
            if(t[j] == '#'){
                let backcount=2;
                while(backcount>0){
                    backcount--;
                    j--;
                    if(t[j]=='#'){
                        backcount+=2;
                    }
                }
            }
        }
        else if(s[i] != t[j]) return false;
        else {
            i--;
            j--;
        }
    }
    return true;
};

console.log(backspaceCompare('ab#c', 'ad#c'));
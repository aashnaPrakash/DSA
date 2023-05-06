/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let arr = [];
    for(let i=0;i<s.length;i++){
        if(s[i] == '#'){
            arr.pop();
            
        }
        else arr.push(s[i]);
    }
    s = arr.join('');
    arr = [];
    for(let i=0;i<t.length;i++){
        if(t[i] == '#'){
            arr.pop();
        }
        else arr.push(t[i]);
    }
    t = arr.join('');
    return s === t;
};

console.log(backspaceCompare('ab#c', 'ad#c'));
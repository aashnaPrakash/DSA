function memoize(fn) {
    var memo = new Map();
    return function(...args) {
        let ss = `${args[0]},${args[1]}`;
        if(!memo.has(ss)){
            var val =  fn(...args);
            memo.set(ss, val);
            return val;
        }
        else {
            return memo.get(ss);
        }
    }
}
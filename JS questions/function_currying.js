var curry = function(fn) {
    return function curried(...args) {
      if (args.length >= fn.length) {
            return fn(...args);
        } else {
            return function(...moreArgs) {
                return curried(...args, ...moreArgs);
            };
        }

    };
};
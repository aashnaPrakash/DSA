var TimeLimitedCache = function() {
    this.cache = new Map();
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    if(this.cache.has(key)) {
        let timer = this.cache.get(key)[1];
        clearTimeout(timer);
        this.cache.set(key,[value, setTimeout(() => this.remove(key),duration)]);
        return true;
    }
    else {      
        let timer = setTimeout(() => this.remove(key),duration);
        this.cache.set(key, [value, timer]);
        return false;
    }
};

TimeLimitedCache.prototype.remove = function(key) {
    this.cache.delete(key);
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    return this.cache.has(key)?this.cache.get(key)[0]:-1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    return this.cache.size;
};

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */
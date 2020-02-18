let _Maybe = function(value) {
    this.value = value;
  };
  
  _Maybe.prototype.map = function(fn) {
    return this.value ? Maybe(fn(this.value)) : Maybe(null);
  };

  _Maybe.prototype.chain = function(fn) {
    return this.value ? fn(this.value) : Maybe(null);
  };
  
  const Maybe = function(x) {
    return new _Maybe(x);
  };
  
  export default Maybe;
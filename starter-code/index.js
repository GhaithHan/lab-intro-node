var SortedList = function() {
    this.items = [];
    this.length = this.items.length;
    
};

SortedList.prototype.add     = function(item) {
     this.items.push(item);
     this.items.sort(function(a,b) {
        return a - b;
      });
    this.length = this.items.length;
}
SortedList.prototype.get     = function(pos) {
    return this.items[pos-1];
}
SortedList.prototype.max     = function() {
   if (this.items.length === 0) {
       var max = 0;
       return max = 0;
   } else {
   var max = this.items.reduce(function(a,b) {
        return Math.max(a, b);
      });
      return max;
    }
}
SortedList.prototype.min     = function() {
    if (this.items.length === 0) {
        var min = 0;
        return min;
    } else {
    var min = this.items.reduce(function(a,b) {
         return Math.min(a, b);
       });
       return min;
     }
}
SortedList.prototype.average = function() {
    var aver = 0;
    if (this.length === 0) {
         return aver;
    } else {
        var result = this.items.reduce(function(accumulator, current){
            console.log(accumulator, current);
            return accumulator + current;
          }, 0)
        return aver = result / this.length;
    }
}
SortedList.prototype.sum     = function() {
    return this.items.reduce(function(accumulator, current){
        console.log(accumulator, current);
        return accumulator + current;
      }, 0);
}

module.exports = SortedList;

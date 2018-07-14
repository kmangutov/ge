var example1 = new Vue({
  el: '#example-1',
  data() {
    return {
      symbols: []
    }
  },
  mounted() {
    var that = this;
    getSymbols(function(resultSymbols) { 
      console.log(resultSymbols)
      for (symbol in resultSymbols) {
        that.symbols.push(resultSymbols[symbol])
      }
    });
  },
})

console.log("After new Vue")
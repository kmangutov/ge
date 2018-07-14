var CMC_URL = "https://api.coinmarketcap.com/v2/ticker/?convert=BTC&limit=15"

var getSymbols = function(next) {
  axios.get(CMC_URL).then(function (response) {
    coinList = response.data.data;

    var arrayOut = [];

    // Make array so easier for Vue to use
    for (var key in coinList) {
      if (coinList.hasOwnProperty(key)) {
        var coinRow = coinList[key];

        arrayOut.push({
          ticker: coinRow.symbol,
          volume: coinRow.quotes['BTC'].volume_24h,
          price: coinRow.quotes['BTC'].price,
          market_cap: coinRow.quotes['BTC'].market_cap,
        })
      }
    }      

    next(arrayOut);
  }).catch(function(error) {
    console.log("error: " + error)
  });
}

var chart = function(file, id) {
  d3.csv(file, function(data) {
    var timestamps = data.map(function(d) { return parseInt(d['Timestamp']) });
    var price = data.map(function(d) { return d['Open']} );
    var vol = data.map(function(d){ return d['vol']});

    timestamps[0] = 'Timestamp'
    price[0] = 'Open'



    var chart = c3.generate({
      bindto: id,
      data: {
          x: 'Timestamp', 
          columns: [timestamps, price],//, vol],
          axes: {
            Open: 'y',
            Volatility: 'y2'
          }
      },
       axis: {
          x: {
            type: 'timeseries',
            tick: {
              format: '%m-%d-%y'
            }
          },
          y2: {
            show: true
          }
      }
    });
  });
}

chart("./data/kraken-XRPUSD-1d.csv", "#chart2");
//chart("./data/binance-ETHBTC-1d.csv", "#chart3");
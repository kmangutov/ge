

var chart = function(file, id) {
  d3.csv(file, function(data) {
    var timestamps = data.map(function(d) { return parseInt(d['Timestamp']) });
    var price = data.map(function(d) { return d['Open']} );
    var vol = data.map(function(d){ return d['vol']});

    timestamps[0] = 'Timestamp'
    price[0] = 'Open'
    // vol[0] = 'Volatility'

    console.log(timestamps)
    console.log(price)


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

//chart("./data/binance-BTCUSDT-1d-vol.csv", "#chart");
chart("./data/kraken-XRPUSD-1d.csv", "#chart2");
chart("./data/binance-ETHBTC-1d.csv", "#chart3");

/*
d3.csv("./data/binance-BTCUSDT-1d-vol.csv", function(data) {

  
});

d3.csv("./data/kraken-XRPUSD-1d.csv", function(data) {

  var timestamps = data.map(function(d) { return parseInt(d['Timestamp']) });
  var price = data.map(function(d) { return d['Open']} );


  timestamps[0] = 'Timestamp'
  price[0] = 'Open'

  console.log(timestamps)
  console.log(price)


  var chart = c3.generate({
        bindto: '#chart2',
        data: {
            x: 'Timestamp', 
            columns: [timestamps, price],
        },
        axis: {
          x: {
            type: 'timeseries',
            tick: {
              format: '%m-%d-%y'
            }
          }
        }
    });
});
*/

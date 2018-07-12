

d3.csv("data/binance-BTCUSDT-1d.csv", function(data1) {
d3.csv("data/kraken-XRPUSD-1d.csv", function(data2) {


}}








  var timestamps = data.map(function(d) { return d['Timestamp'] });
  var price = data.map(function(d) { return d['Open']} );


  timestamps[0] = 'Timestamp'
  price[0] = 'Open'

  console.log(timestamps)
  console.log(price)


  var chart = c3.generate({
        bindto: '#chart',
        data: {
            x: 'Timestamp', 
            columns: [timestamps, price],
        },
       
    });
});

d3.csv("data/kraken-XRPUSD-1d.csv", function(data) {

  var timestamps = data.map(function(d) { return d['Timestamp'] });
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
       
    });
});


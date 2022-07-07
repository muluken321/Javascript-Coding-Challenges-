
 var maxProfit = function(prices) {
  let min = prices[0]
  let max = 0;
  for(let x = 0;x<prices.length;x++){
    min = Math.min(min, prices[x])
    let profit = prices[x] - min 
    max = Math.max(max, profit)
  }
  return max
};
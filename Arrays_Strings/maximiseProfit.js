const stockbuySell = (prices) => {
    let leastBP = prices[0]; //leastBuyingPrice
    let profit = 0;
    let profit_if_sold_today = 0;;
    for(let i=1;i<prices.length;i++){
        if(prices[i]<leastBP){
            leastBP = prices[i];
        }
        profit_if_sold_today = prices[i] - leastBP;
        if(profit_if_sold_today > profit){
            profit = profit_if_sold_today;
        }
    }
    return profit;
}

console.log(stockbuySell([7,1,5,3,6,4]));
class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let minPrice = Infinity;
        
        for(let i = 0; i < prices.length; i++) {
            let currentPrice = prices[i];

            if(currentPrice < minPrice) {
                minPrice = currentPrice;
            } else {
                let profit = currentPrice - minPrice;
                maxProfit = Math.max(profit, maxProfit)
            }
        }

        return maxProfit;
    }
}

class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let lowestPrice = Infinity;
        
        for(let i = 0; i < prices.length; i++) {
            let todayPrice = prices[i];
            if(lowestPrice > todayPrice) {
                lowestPrice = todayPrice;
            } else {
                let tempProfit = todayPrice - lowestPrice;
                maxProfit = Math.max(tempProfit, maxProfit);
            }
        }

        return maxProfit;
    }
}

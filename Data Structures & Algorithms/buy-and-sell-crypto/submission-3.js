class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minDay = Infinity;
        let maxProfit = 0;

        for (let i = 0; i < prices.length; i++) {
            let currentPrice = prices[i];

            if (currentPrice < minDay) {
                minDay = currentPrice;
            } else {
                let profit = currentPrice - minDay;
                maxProfit = Math.max(maxProfit, profit);
            }
        }

        return maxProfit;
    }
}

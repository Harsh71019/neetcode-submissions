class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let p1 = 0;
        let p2 = heights.length - 1;
        let maxWater = 0;

        while(p1 < p2) {
            let width = p2 - p1
            let maxHeight = Math.min(heights[p2], heights[p1])
            let water = width * maxHeight

            maxWater = Math.max(maxWater, water)

            if(heights[p1] < heights[p2]) {
                p1++
            } else {
                p2--
            }
        }

        return maxWater;
    }
}

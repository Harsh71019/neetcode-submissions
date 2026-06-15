class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let p1 = 0;
        let p2 = heights.length - 1;
        let maxArea = 0;

        while (p1 < p2) {
            let width = p2 - p1;
            let minHeight = Math.min(heights[p1], heights[p2]);
            let area = width * minHeight;

            maxArea = Math.max(area, maxArea);

            if (heights[p1] < heights[p2]) {
                p1++;
            } else {
                p2--;
            }
        }

        return maxArea;
    }
}

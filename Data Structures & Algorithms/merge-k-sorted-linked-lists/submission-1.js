/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        // Base case: if no lists, return null
        if (!lists || lists.length === 0) return null;

        // Helper function to merge two sorted lists
        function mergeTwoLists(l1, l2) {
            let dummy = new ListNode(0);
            let current = dummy;

            while (l1 && l2) {
                if (l1.val < l2.val) {
                    current.next = l1;
                    l1 = l1.next;
                } else {
                    current.next = l2;
                    l2 = l2.next;
                }
                current = current.next;
            }

            // Attach remaining nodes
            current.next = l1 || l2;

            return dummy.next;
        }

        // Divide and Conquer
        function merge(lists, start, end) {
            if (start === end) {
                return lists[start];
            }

            let mid = Math.floor((start + end) / 2);
            let left = merge(lists, start, mid);
            let right = merge(lists, mid + 1, end);

            return mergeTwoLists(left, right);
        }

        return merge(lists, 0, lists.length - 1);
    }
}

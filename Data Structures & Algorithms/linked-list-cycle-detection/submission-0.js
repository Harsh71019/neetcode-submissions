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
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
           if (!head || !head.next) return false;

        let slow = head;       // tortoise: advances 1 step per iteration
        let fast = head;       // hare:     advances 2 steps per iteration

        while (fast !== null && fast.next !== null) {
            slow = slow.next;        // 1 step
            fast = fast.next.next;   // 2 steps

            // Same node in memory → cycle confirmed
            if (slow === fast) return true;
        }

        // fast reached null → list terminates → no cycle
        return false;
    }
}

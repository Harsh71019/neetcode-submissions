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
     * @return {void}
     */
    reorderList(head) {
                if (!head || !head.next) return;

        // Step 1: Find middle via slow/fast pointers
        let slow = head;
        let fast = head;

        while (fast.next && fast.next.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        // Step 2: Reverse second half
        let secondHalf = slow.next;
        slow.next = null; // cut the list

        let prev = null;
        let curr = secondHalf;

        while (curr) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        secondHalf = prev; // new head of reversed second half

        // Step 3: Merge two halves by interleaving
        let first = head;
        let second = secondHalf;

        while (second) {
            let firstNext = first.next;
            let secondNext = second.next;

            first.next = second;
            second.next = firstNext;

            first = firstNext;
            second = secondNext;
        }
    }
}

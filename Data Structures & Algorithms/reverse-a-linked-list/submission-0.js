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
     * @return {ListNode}
     */
    reverseList(head) {
        let prev = null;
        let current = head;

        while (current) {
            let next = current.next; // save next
            current.next = prev; // reverse pointer
            prev = current; // move prev forward
            current = next; // move current forward
        }

        return prev;
    }
}

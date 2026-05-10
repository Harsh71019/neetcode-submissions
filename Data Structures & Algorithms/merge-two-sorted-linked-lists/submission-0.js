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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
                // Dummy node acts as a placeholder head so we never
        // have to special-case "setting the first node"
        const dummy = new ListNode(-1);

        // curr is our "tape head" — it always points to the
        // last node we've placed in the merged list
        let curr = dummy;

        // While BOTH lists have nodes remaining, compare and pick smaller
        while (list1 !== null && list2 !== null) {
            if (list1.val <= list2.val) {
                curr.next = list1;      // attach the smaller node
                list1 = list1.next;     // advance list1's pointer
            } else {
                curr.next = list2;
                list2 = list2.next;     // advance list2's pointer
            }
            curr = curr.next;           // advance our tape head
        }

        // At this point one list is exhausted.
        // The other list is already sorted, so just attach it wholesale.
        // (At most one of these is non-null at any time)
        curr.next = list1 !== null ? list1 : list2;

        // dummy.next is the real head of the merged list
        return dummy.next;

    }
}

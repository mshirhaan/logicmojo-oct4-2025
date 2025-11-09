class Solution:
    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head:
            return head
        curr = head
        next = curr.next
        while(curr and next):
            next = curr.next
            while(next and curr.val == next.val):
                next = next.next
            curr.next = next
            curr = curr.next
            
        return head
class Solution:
    def detectCycle(self, head: Optional[ListNode]) -> Optional[ListNode]:
        # s = set()

        # curr = head

        # while curr:
        #     if curr in s:
        #         return curr
        #     s.add(curr)
        #     curr = curr.next
            # return None
            
            fast = head
            slow = head

            while fast and fast.next:
                fast = fast.next.next
                slow = slow.next

                if fast == slow:
                    fast = head
                    while fast is not slow:
                        fast = fast.next
                        slow = slow.next
                    return fast
        
            return None
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        if list1 is None:
            return list2
        if list2 is None:
            return list1
        curr1 = list1
        curr2 = list2
        
        if curr1.val < curr2.val:
            curr3 = curr1
            res = curr1
            curr1 = curr1.next
        else:
            curr3 = curr2
            res = curr2
            curr2 = curr2.next

        while curr1 is not None and curr2 is not None:
            if curr1.val < curr2.val:
                curr3.next = curr1
                curr3 = curr3.next
                curr1 = curr1.next
            else:
                curr3.next = curr2
                curr3 = curr3.next
                curr2 = curr2.next
                
        if curr1 is not None:
            curr3.next = curr1
            curr3 = curr1

        if curr2 is not None:
            curr3.next = curr2
            curr3 = curr2
    
        return res
        
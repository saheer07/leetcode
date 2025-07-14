# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def getDecimalValue(self, head):
        num = 0
        while head:
            num = num * 2 + head.val
            head = head.next
        return num


head = ListNode(1, ListNode(0, ListNode(1)))  
sol = Solution()
print(sol.getDecimalValue(head))  

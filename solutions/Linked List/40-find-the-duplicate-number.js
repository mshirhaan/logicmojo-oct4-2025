class Solution:
    def findDuplicate(self, nums: List[int]) -> int:  
            fast = 0
            slow = 0

            while True:
                fast = nums[nums[fast]]
                slow = nums[slow]

                if fast == slow:
                    fast = 0
                    while fast!=slow:
                        fast = nums[fast]
                        slow = nums[slow]
                    return fast

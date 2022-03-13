var tipuesearch = {"pages":[{"title":"TofuCode404 Page not found","text":"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');\n\n  ga('create', 'G-DCBDZPQQD1', 'auto');\n  ga('send', 'pageview');\n\n\n\n\n\n\n\n\n\n\nTofuCode404 Page not found\n\n\n\n\n\n\n\n\nTofuCode\n\n\n\n\n\n\n\n\n\nInterview Questions\n\n\nRecent Questions\n\n\nTags\n\n\n\n\n\n\n\n 404 Page Note Found \n Try a search \n\n\n\n\n\n Eat Tofu and be true \n© 2022 TofuCode.com\n\nBuilt with Pelican using Flex theme\n \n\n\n{\n  \"@context\" : \"http://schema.org\",\n  \"@type\" : \"Blog\",\n  \"name\": \" TofuCode \",\n  \"url\" : \"https://tofucode.com\",\n  \"image\": \"\",\n  \"description\": \"\"\n}\n\n\n      $(document).ready(function() {\n        $('#tipue_search_input').tipuesearch();\n      });\n    \n\n","tags":"","url":"https://tofucode.com/404.html"},{"title":"Hello there","text":"Quick Start For a table of all the questions: Interview Questions For a list of all questions tags: Tags","tags":"pages","url":"https://tofucode.com/pages/hello-there.html","loc":"https://tofucode.com/pages/hello-there.html"},{"title":"Interview Questions","text":"# Question Tags 0001 Two Sum hash-map 0002 Add Two Numbers linked-list, dummy-list-head 0019 Remove Nth Node From End of List linked-list 0020 Valid Parentheses stack, parentheses 0021 Merge Two Sorted Lists linked-list 0061 Rotate List linked-list, list-to-ring 0138 Copy List with Random Pointer linked-list, dummy-list-head, recursion 0141 Linked List Cycle linked-list, fast-slow-pointer 0413 Arithmetic Slices dp 0509 Fibonacci Number recursion 0740 Delete and Earn dp 0799 Champagne Tower simulation 0606 Construct String from Binary Tree recursion, binary-tree","tags":"pages","url":"https://tofucode.com/pages/interview-questions.html","loc":"https://tofucode.com/pages/interview-questions.html"},{"title":"Leetcode 0020. Valid Parentheses","text":"Question Link : https://leetcode.com/problems/valid-parentheses/ Difficulty: Easy Question Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if: Open brackets must be closed by the same type of brackets. Open brackets must be closed in the correct order. Example 1: Input: s = \"()\" Output: true Example 2: Input: s = \"()[]{}\" Output: true Example 3: Input: s = \"(]\" Output: false Constraints: 1 <= s.length <= 104 s consists of parentheses only '()[]{}'. Solution Use a stack to match the parentheses Code ''' Leetcode 0020. Valid Parentheses Question Link : https://leetcode.com/problems/valid-parentheses/ Solution Link : https://tofucode.com/posts/leetcode_0020_valid-parentheses.html ''' class Solution : def isValid ( self , s : str ) -> bool : ''' Time : O(n) Space: O(n) ''' matches = { \"(\" : \")\" , \"{\" : \"}\" , \"[\" : \"]\" } stack = [] for c in s : if len ( stack ) == 0 or matches . get ( stack [ - 1 ]) != c : stack . append ( c ) else : stack . pop () return len ( stack ) == 0","tags":"Leetcode","url":"https://tofucode.com/posts/leetcode_0020_valid-parentheses.html","loc":"https://tofucode.com/posts/leetcode_0020_valid-parentheses.html"},{"title":"Leetcode 0138. Copy List with Random Pointer","text":"Question Link : https://leetcode.com/problems/copy-list-with-random-pointer/ Difficulty: Medium Question A linked list of length n is given such that each node contains an additional random pointer, which could point to any node in the list, or null. Construct a deep copy of the list. The deep copy should consist of exactly n brand new nodes, where each new node has its value set to the value of its corresponding original node. Both the next and random pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. None of the pointers in the new list should point to nodes in the original list. For example, if there are two nodes X and Y in the original list, where X.random --> Y, then for the corresponding two nodes x and y in the copied list, x.random --> y. Return the head of the copied linked list. The linked list is represented in the input/output as a list of n nodes. Each node is represented as a pair of [val, random_index] where: val: an integer representing Node.val random_index: the index of the node (range from 0 to n-1) that the random pointer points to, or null if it does not point to any node. Your code will only be given the head of the original linked list. Example 1: Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]] Output: [[7,null],[13,0],[11,4],[10,2],[1,0]] Example 2: Input: head = [[1,1],[2,1]] Output: [[1,1],[2,1]] Example 3: Input: head = [[3,null],[3,0],[3,null]] Output: [[3,null],[3,0],[3,null]] Constraints: 0 <= n <= 1000 -104 <= Node.val <= 104 Node.random is null or is pointing to some node in the linked list. Solution This is essentially a list iteration with a bit of extra work to deal with the random pointers with a hashmap Alternatively recursive solution can also be very clean Code ''' Leetcode 0138. Copy List with Random Pointer Question Link : https://leetcode.com/problems/copy-list-with-random-pointer/ Solution Link : https://tofucode.com/posts/leetcode_0138_copy-list-with-random-pointer.html ''' \"\"\" # Definition for a Node. class Node: def __init__(self, x: int, next: 'Node' = None, random: 'Node' = None): self.val = int(x) self.next = next self.random = random \"\"\" class Solution : def copyRandomList ( self , head : 'Optional[Node]' ) -> 'Optional[Node]' : ''' list iteration with a hashmap old pointers -> new node Time : O(n) space: O(n) ''' pointers = {} # old pointers -> new node dummy = Node ( 0 ) p = head new_p = dummy while p : # get or create new node pointers [ p ] = pointers . get ( p , Node ( p . val )) # if there is random: get or create random r = p . random if r : pointers [ r ] = pointers . get ( r , Node ( r . val )) pointers [ p ] . random = pointers [ r ] # set up the new random node # move both pointers new_p . next = pointers [ p ] new_p = new_p . next p = p . next return dummy . next def copyRandomListAlternative1 ( self , head : 'Optional[Node]' ) -> 'Optional[Node]' : ''' list iteration with a hashmap old pointers -> new node Time : O(n) space: O(n) ''' self . pointers = {} # old pointer -> new node return self . copyRandom ( head ) def copyRandom ( self , head ): if head == None : return None if head in self . pointers : return self . pointers [ head ] # create a new node. node = Node ( head . val ) # save in hashmap self . pointers [ head ] = node # keep going to next and random via recursion node . next = self . copyRandom ( head . next ) node . random = self . copyRandom ( head . random ) return node","tags":"Leetcode","url":"https://tofucode.com/posts/leetcode_0138_copy-list-with-random-pointer.html","loc":"https://tofucode.com/posts/leetcode_0138_copy-list-with-random-pointer.html"},{"title":"Leetcode 0061. Rotate List","text":"Question Link : https://leetcode.com/problems/rotate-list/ Difficulty: Medium Question Given the head of a linked list, rotate the list to the right by k places. Example 1: Input: head = [1,2,3,4,5], k = 2 Output: [4,5,1,2,3] Example 2: Input: head = [0,1,2], k = 4 Output: [2,0,1] Constraints: The number of nodes in the list is in the range [0, 500]. -100 <= Node.val <= 100 0 <= k <= 2 * 109 Solution Connect the tail to the head of the list to form a ring, this way the new problem becomes as to where to cut a new list We can k % count to find the actual offset needed to move since this is a ring Code ''' Leetcode 0061. Rotate List Question Link : https://leetcode.com/problems/rotate-list/ Solution Link : https://tofucode.com/posts/leetcode_0061_rotate-list.html ''' # Definition for singly-linked list. # class ListNode: # def __init__(self, val=0, next=None): # self.val = val # self.next = next class Solution : def rotateRight ( self , head : Optional [ ListNode ], k : int ) -> Optional [ ListNode ]: ''' [1,2,3,4,5] T H count = 5 k = 2 offset = 2 # position calculated from start of the list head_position = 3 tail_position = 2 Time : O(n) Space: O(1) ''' if not head or not head . next : return head # keep a count of the size so we know where to move count = 1 # set up a ring p = head while p . next : count += 1 p = p . next p . next = head # find the new head and tail p = head offset = k % count head_position = count - offset # subtract to go from the back tail_position = head_position - 1 for i in range ( tail_position ): p = p . next # cut the ring result = p . next p . next = None return result","tags":"Leetcode","url":"https://tofucode.com/posts/leetcode_0061_rotate-list.html","loc":"https://tofucode.com/posts/leetcode_0061_rotate-list.html"},{"title":"Leetcode 0002. Add Two Numbers","text":"Question Link : https://leetcode.com/problems/add-two-numbers/ Difficulty: Medium Question You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list. You may assume the two numbers do not contain any leading zero, except the number 0 itself. Example 1: Input: l1 = [2,4,3], l2 = [5,6,4] Output: [7,0,8] Explanation: 342 + 465 = 807. Example 2: Input: l1 = [0], l2 = [0] Output: [0] Example 3: Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9] Output: [8,9,9,9,0,0,0,1] Constraints: The number of nodes in each linked list is in the range [1, 100]. 0 <= Node.val <= 9 It is guaranteed that the list represents a number that does not have leading zeros. Solution Use 2 pointers to go through each list and sum up each digit Use a carry to denote when it's >= 10 At the very end, check the carry again Code ''' Leetcode 0002. Add Two Numbers Question Link : https://leetcode.com/problems/add-two-numbers/ Solution Link : https://tofucode.com/posts/leetcode_0002_add-two-numbers.html ''' # Definition for singly-linked list. # class ListNode: # def __init__(self, val=0, next=None): # self.val = val # self.next = next class Solution : def addTwoNumbers ( self , l1 : Optional [ ListNode ], l2 : Optional [ ListNode ]) -> Optional [ ListNode ]: ''' [2,4,3] [5,6,4] 7 0 7+1 carry Time : O(m + n) Space: O(m + n) ''' a = l1 b = l2 dummy = ListNode () p = dummy carry = 0 while a or b : s = carry if a : s += a . val a = a . next if b : s += b . val b = b . next carry = s // 10 s = s % 10 node = ListNode ( s ) p . next = node p = p . next # check if there is still a 1 if carry : node = ListNode ( carry ) p . next = node return dummy . next","tags":"Leetcode","url":"https://tofucode.com/posts/leetcode_0002_add-two-numbers.html","loc":"https://tofucode.com/posts/leetcode_0002_add-two-numbers.html"},{"title":"Leetcode 0141. Linked List Cycle","text":"Question Link : https://leetcode.com/problems/linked-list-cycle/ Difficulty: Easy Question Given head, the head of a linked list, determine if the linked list has a cycle in it. There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter. Return true if there is a cycle in the linked list. Otherwise, return false. Example 1: Input: head = [3,2,0,-4], pos = 1 Output: true Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed). Example 2: Input: head = [1,2], pos = 0 Output: true Explanation: There is a cycle in the linked list, where the tail connects to the 0th node. Example 3: Input: head = [1], pos = -1 Output: false Explanation: There is no cycle in the linked list. Constraints: The number of the nodes in the list is in the range [0, 104]. -105 <= Node.val <= 105 pos is -1 or a valid index in the linked-list. Follow up: Can you solve it using O(1) (i.e. constant) memory? Solution Use two pointer where the fast the twice the speed of the slow one If there is a cycle the fast one would catch up with the slow one Code ''' Leetcode 0141. Linked List Cycle Question Link : https://leetcode.com/problems/linked-list-cycle/ Solution Link : https://tofucode.com/posts/leetcode_0141_linked-list-cycle.html ''' # Definition for singly-linked list. # class ListNode: # def __init__(self, x): # self.val = x # self.next = None class Solution : def hasCycle ( self , head : Optional [ ListNode ]) -> bool : ''' Time : O(n) Space: O(1) ''' fast = head slow = head while True : if fast is None or fast . next is None : return False fast = fast . next . next slow = slow . next if fast == slow : return True","tags":"Leetcode","url":"https://tofucode.com/posts/leetcode_0141_linked-list-cycle.html","loc":"https://tofucode.com/posts/leetcode_0141_linked-list-cycle.html"},{"title":"Leetcode 0021. Merge Two Sorted Lists","text":"Question Link : https://leetcode.com/problems/merge-two-sorted-lists/ Difficulty: Easy Question You are given the heads of two sorted linked lists list1 and list2. Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists. Return the head of the merged linked list. Example 1: Input: list1 = [1,2,4], list2 = [1,3,4] Output: [1,1,2,3,4,4] Example 2: Input: list1 = [], list2 = [] Output: [] Example 3: Input: list1 = [], list2 = [0] Output: [0] Constraints: The number of nodes in both lists is in the range [0, 50]. -100 <= Node.val <= 100 Both list1 and list2 are sorted in non-decreasing order. Solution Use 2 pointers to trace both lists and form a new list starting at a dummy head pointer When one list ends, we can append the remains of the other list onto the combined list Code ''' Leetcode 0021. Merge Two Sorted Lists Question Link : https://leetcode.com/problems/merge-two-sorted-lists/ Solution Link : https://tofucode.com/posts/leetcode_0021_merge-two-sorted-lists.html ''' # Definition for singly-linked list. # class ListNode: # def __init__(self, val=0, next=None): # self.val = val # self.next = next class Solution : def mergeTwoLists ( self , list1 : Optional [ ListNode ], list2 : Optional [ ListNode ]) -> Optional [ ListNode ]: p1 = list1 p2 = list2 head = ListNode () x = head while p1 and p2 : if p1 . val < p2 . val : x . next = p1 p1 = p1 . next else : x . next = p2 p2 = p2 . next x = x . next if p1 : x . next = p1 else : x . next = p2 return head . next","tags":"Leetcode","url":"https://tofucode.com/posts/leetcode_0021_merge-two-sorted-lists.html","loc":"https://tofucode.com/posts/leetcode_0021_merge-two-sorted-lists.html"},{"title":"Leetcode 0740. Delete and Earn","text":"Question Link : https://leetcode.com/problems/delete-and-earn/ Difficulty: Medium Question You are given an integer array nums. You want to maximize the number of points you get by performing the following operation any number of times: Pick any nums[i] and delete it to earn nums[i] points. Afterwards, you must delete every element equal to nums[i] - 1 and every element equal to nums[i] + 1. Return the maximum number of points you can earn by applying the above operation some number of times. Example 1: Input: nums = [3,4,2] Output: 6 Explanation: You can perform the following operations: - Delete 4 to earn 4 points. Consequently, 3 is also deleted. nums = [2]. - Delete 2 to earn 2 points. nums = []. You earn a total of 6 points. Example 2: Input: nums = [2,2,3,3,3,4] Output: 9 Explanation: You can perform the following operations: - Delete a 3 to earn 3 points. All 2's and 4's are also deleted. nums = [3,3]. - Delete a 3 again to earn 3 points. nums = [3]. - Delete a 3 once more to earn 3 points. nums = []. You earn a total of 9 points. Constraints: 1 <= nums.length <= 2 * 104 1 <= nums[i] <= 104 Solution First observation is that for any number that we take, we'd want to tak all intances of that number, so we can reduce nums to a counting dict This then is the same problem as the house robber problem where dp is used to solve whether to take the adjacent number Code ''' Leetcode 0740. Delete and Earn Question Link : https://leetcode.com/problems/delete-and-earn/ Solution Link : https://tofucode.com/posts/leetcode_0740_delete-and-earn.html ''' class Solution : def deleteAndEarn ( self , nums : List [ int ]) -> int : ''' [2,2,3,3,3,4] map: num -> count 2: 2 3: 3 4: 1 dp[i] = max(taking last one, not taking last one + num * count) With n elements, and k as the max number Time : O(n + x) Space: O(n + x) ''' if not nums : return 0 counts = {} for num in nums : counts [ num ] = counts . get ( num , 0 ) + 1 # + 1 so the last key is included, and can direct access with dp[-1] dp = [ 0 ] * ( max ( counts . keys ()) + 1 ) for i in range ( 1 , len ( dp )): if i == 1 : dp [ i ] = max ( dp [ i - 1 ], i * counts . get ( i , 0 )) else : dp [ i ] = max ( dp [ i - 1 ], dp [ i - 2 ] + i * counts . get ( i , 0 )) return dp [ - 1 ]","tags":"Leetcode","url":"https://tofucode.com/posts/leetcode_0740_delete-and-earn.html","loc":"https://tofucode.com/posts/leetcode_0740_delete-and-earn.html"},{"title":"Leetcode 0799. Champagne Tower","text":"Question Link : https://leetcode.com/problems/champagne-tower/ Difficulty: Medium Question We stack glasses in a pyramid, where the first row has 1 glass, the second row has 2 glasses, and so on until the 100th row. Each glass holds one cup of champagne. Then, some champagne is poured into the first glass at the top. When the topmost glass is full, any excess liquid poured will fall equally to the glass immediately to the left and right of it. When those glasses become full, any excess champagne will fall equally to the left and right of those glasses, and so on. (A glass at the bottom row has its excess champagne fall on the floor.) For example, after one cup of champagne is poured, the top most glass is full. After two cups of champagne are poured, the two glasses on the second row are half full. After three cups of champagne are poured, those two cups become full - there are 3 full glasses total now. After four cups of champagne are poured, the third row has the middle glass half full, and the two outside glasses are a quarter full, as pictured below. Now after pouring some non-negative integer cups of champagne, return how full the jth glass in the ith row is (both i and j are 0-indexed.) Example 1: Input: poured = 1, query_row = 1, query_glass = 1 Output: 0.00000 Explanation: We poured 1 cup of champange to the top glass of the tower (which is indexed as (0, 0)). There will be no excess liquid so all the glasses under the top glass will remain empty. Example 2: Input: poured = 2, query_row = 1, query_glass = 1 Output: 0.50000 Explanation: We poured 2 cups of champange to the top glass of the tower (which is indexed as (0, 0)). There is one cup of excess liquid. The glass indexed as (1, 0) and the glass indexed as (1, 1) will share the excess liquid equally, and each will get half cup of champange. Example 3: Input: poured = 100000009, query_row = 33, query_glass = 17 Output: 1.00000 Constraints: 0 <= poured <= 109 0 <= query_glass <= query_row < 100 Solution Just simulate how the pouring happens Here we create a tower with 100 rows just like the description This means we'd need to check if next row exists when pouring in the double for loop we can just query tower[query_row][query_glass] in the end For the pouring: think of all the glasses as left aligned in the 2d array, and the ones to pour into for [i][j] are [i+1][j] and [i+1][j+1] Code ''' Leetcode 0799. Champagne Tower Question Link : https://leetcode.com/problems/champagne-tower/ Solution Link : https://tofucode.com/posts/leetcode_0799_champagne-tower.html ''' class Solution : def champagneTower ( self , poured : int , query_row : int , query_glass : int ) -> float : ''' Use similation 2 0 0 0 0 0 1 .5 .5 0 0 0 for every row including the query_row: for every col: check if excess Time : O(1) Rows&#94;2 but Rows is fixed Space: O(1) ''' tower = [[ 0 ] * x for x in range ( 1 , 101 )] # first: len 1, last: len 100 tower [ 0 ][ 0 ] = poured for i in range ( query_row + 1 ): for j in range ( len ( tower [ i ])): # if there's a next row and current cup >= 1 if i + 1 < len ( tower ) and tower [ i ][ j ] >= 1 : half = ( tower [ i ][ j ] - 1 ) / 2.0 tower [ i + 1 ][ j ] += half tower [ i + 1 ][ j + 1 ] += half tower [ i ][ j ] = 1 return tower [ query_row ][ query_glass ]","tags":"Leetcode","url":"https://tofucode.com/posts/leetcode_0799_champagne-tower.html","loc":"https://tofucode.com/posts/leetcode_0799_champagne-tower.html"},{"title":"Leetcode 0413. Arithmetic Slices","text":"Question Link : https://leetcode.com/problems/arithmetic-slices/ Difficulty: Medium Question An integer array is called arithmetic if it consists of at least three elements and if the difference between any two consecutive elements is the same. For example, [1,3,5,7,9], [7,7,7,7], and [3,-1,-5,-9] are arithmetic sequences. Given an integer array nums, return the number of arithmetic subarrays of nums. A subarray is a contiguous subsequence of the array. Example 1: Input: nums = [1,2,3,4] Output: 3 Explanation: We have 3 arithmetic slices in nums: [1, 2, 3], [2, 3, 4] and [1,2,3,4] itself. Example 2: Input: nums = [1] Output: 0 Constraints: 1 <= nums.length <= 5000 -1000 <= nums[i] <= 1000 Solution At any time you have an subarray with >= 3 elements, and want to add the next number to the Sequence, you are extending the sequence * And add an amount of subarraies based on the current count. This hints at dp Code ''' Leetcode 0413. Arithmetic Slices Question Link : https://leetcode.com/problems/arithmetic-slices/ Solution Link : https://tofucode.com/posts/leetcode_0413_arithmetic-slices.html ''' class Solution : def numberOfArithmeticSlices ( self , nums : List [ int ]) -> int : ''' eg. 1,2,3,4,5 (sub) [1, 2, 3] at 3: have this with the first 3 elements (sub ) [1,2,3,4] at 4: 1 subarray for every subarray that starts at the current sequence and ends at 4 (dp[i-1]) (sub) [2, 3, 4] at 4: + 1 for the 3 element ending at 4 idx: 0 1 2 3 arr: [1,2,3,4] dp: [0 0 1 x] dp[i] = number of subarrays that end at index i x = (1 from dp[i-1]) + 1 dp[i] = dp[i-1] + 1 return sum(dp) ''' dp = [ 0 ] * len ( nums ) result = 0 for i in range ( 2 , len ( dp )): if self . endsAtArithSubarray ( nums , i ): dp [ i ] = dp [ i - 1 ] + 1 result += dp [ i ] return result def endsAtArithSubarray ( self , nums , i ): return nums [ i ] - nums [ i - 1 ] == nums [ i - 1 ] - nums [ i - 2 ]","tags":"Leetcode","url":"https://tofucode.com/posts/leetcode_0413_arithmetic-slices.html","loc":"https://tofucode.com/posts/leetcode_0413_arithmetic-slices.html"},{"title":"Leetcode 0001. Two Sum","text":"Question Link : https://leetcode.com/problems/two-sum/ Difficulty: Easy Question Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order. Example 1: Input: nums = [2,7,11,15], target = 9 Output: [0,1] Explanation: Because nums[0] + nums[1] == 9, we return [0, 1]. Example 2: Input: nums = [3,2,4], target = 6 Output: [1,2] Example 3: Input: nums = [3,3], target = 6 Output: [0,1] Constraints: 2 <= nums.length <= 104 -109 <= nums[i] <= 109 -109 <= target <= 109 Only one valid answer exists. Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity? Solution ww Code ''' Leetcode 0001. Two Sum Question Link : https://leetcode.com/problems/two-sum/ Solution Link : https://tofucode.com/posts/leetcode_0001_two-sum.html ''' class Solution : def twoSum ( self , nums : List [ int ], target : int ) -> List [ int ]: ''' [3,2,4], target = 6 numbers: [2, 4] indices: [1, 2] other = target - current number 3 ? 4 ? 2 ? seen = {} # number -> index 3 -> 0, 2 -> 1, Time: O(n) Space: O(n) ''' seen = {} # number -> index for i in range ( len ( nums )): num = nums [ i ] other = target - num if other in seen : return [ seen [ other ], i ] seen [ num ] = i","tags":"Leetcode","url":"https://tofucode.com/posts/leetcode_0001_two-sum.html","loc":"https://tofucode.com/posts/leetcode_0001_two-sum.html"},{"title":"Leetcode 0019. Remove Nth Node From End of List","text":"Question Link : https://leetcode.com/problems/remove-nth-node-from-end-of-list/ Difficulty: Medium Question Given the head of a linked list, remove the nth node from the end of the list and return its head. Example 1: Input: head = [1,2,3,4,5], n = 2 Output: [1,2,3,5] Example 2: Input: head = [1], n = 1 Output: [] Example 3: Input: head = [1,2], n = 1 Output: [1] Constraints: The number of nodes in the list is sz. 1 <= sz <= 30 0 <= Node.val <= 100 1 <= n <= sz Follow up: Could you do this in one pass? Solution Use two pointers to mark out the ideal end location and remove the next node. Code ''' Leetcode 0019. Remove Nth Node From End of List Question Link : https://leetcode.com/problems/remove-nth-node-from-end-of-list/ Solution Link : https://tofucode.com/posts/leetcode_0019_remove-nth-node-from-end-of-list.html ''' # Definition for singly-linked list. # class ListNode: # def __init__(self, val=0, next=None): # self.val = val # self.next = next class Solution : def removeNthFromEnd ( self , head : ListNode , n : int ) -> ListNode : ''' First move x, then start moving both x and p p x n1 n2 n3 n4 n5 x->x p->p x: goes through the whole list * count: num of nodes up to x. 1, 2, ... total size of list p: pointer to one node before the deletion * Ideal Position: (position of x) - (position of p) == n * So start moving p: count - 1 > n Time: O(n) - one pass Space: O(1) ''' if not head : return None count = 1 x = p = head while x . next : x = x . next count += 1 if count - 1 > n : p = p . next if count == n : return head . next p . next = p . next . next return head","tags":"Leetcode","url":"https://tofucode.com/posts/leetcode_0019_remove-nth-node-from-end-of-list.html","loc":"https://tofucode.com/posts/leetcode_0019_remove-nth-node-from-end-of-list.html"},{"title":"Leetcode 0509. Fibonacci Number","text":"Question Link : https://leetcode.com/problems/fibonacci-number/ Difficulty: Easy Question The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is, F(0) = 0, F(1) = 1 F(n) = F(n - 1) + F(n - 2), for n > 1. Given n, calculate F(n). Example 1: Input: n = 2 Output: 1 Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1. Example 2: Input: n = 3 Output: 2 Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2. Example 3: Input: n = 4 Output: 3 Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3. Constraints: 0 <= n <= 30 Solution Use recursion and a cache. Code ''' Leetcode 0509. Fibonacci Number Question Link : https://leetcode.com/problems/fibonacci-number/ Solution Link : https://tofucode.com/posts/leetcode_0509_fibonacci-number.html ''' class Solution : # @functools.cache def fib ( self , n : int ) -> int : ''' base: F(0) = 0, F(1) = 1 func: F(n) = F(n - 1) + F(n - 2), for n > 1 eg. fib(4) fib(3) + fib(2) fib(2)+fib(1) Time: O(n) Space: O(n) ''' cache = { 0 : 0 , 1 : 1 } # n -> number return self . getFib ( cache , n ) def getFib ( self , cache , n ): if n in cache : return cache [ n ] cache [ n ] = self . getFib ( cache , n - 1 ) + self . getFib ( cache , n - 2 ) return cache [ n ]","tags":"Leetcode","url":"https://tofucode.com/posts/leetcode_0509_fibonacci-number.html","loc":"https://tofucode.com/posts/leetcode_0509_fibonacci-number.html"},{"title":"Leetcode 0606. Construct String from Binary Tree","text":"Question Link : https://leetcode.com/problems/construct-string-from-binary-tree/ Difficulty: Easy Question Given the root of a binary tree, construct a string consisting of parenthesis and integers from a binary tree with the preorder traversal way, and return it. Omit all the empty parenthesis pairs that do not affect the one-to-one mapping relationship between the string and the original binary tree. Example 1: Input: root = [1,2,3,4] Output: \"1(2(4))(3)\" Explanation: Originally, it needs to be \"1(2(4)())(3()())\", but you need to omit all the unnecessary empty parenthesis pairs. And it will be \"1(2(4))(3)\" Example 2: Input: root = [1,2,3,null,4] Output: \"1(2()(4))(3)\" Explanation: Almost the same as the first example, except we cannot omit the first parenthesis pair to break the one-to-one mapping relationship between the input and the output. Constraints: The number of nodes in the tree is in the range [1, 104]. -1000 <= Node.val <= 1000 Solution Use recursion to build the string while considering different cases of when to omit the parenthesis. Code ''' Leetcode 0606. Construct String from Binary Tree Question Link : https://leetcode.com/problems/construct-string-from-binary-tree/ Solution Link : https://tofucode.com/posts/leetcode_0606_construct-string-from-binary-tree.html ''' # Definition for a binary tree node. # class TreeNode: # def __init__(self, val=0, left=None, right=None): # self.val = val # self.left = left # self.right = right class Solution : def tree2str ( self , t : TreeNode ) -> str : ''' current + left + right 1 (2(4)()) (3()()) (4)() 3()() Time: O(n) Space: O(n) ''' if not t : return \"\" current = str ( t . val ) left = self . wrap ( self . tree2str ( t . left )) right = self . wrap ( self . tree2str ( t . right )) if not t . left and not t . right : return current elif not t . right : return current + left return current + left + right def wrap ( self , s ): return '(' + s + ')'","tags":"Leetcode","url":"https://tofucode.com/posts/leetcode_0606_construct-string-from-binary-tree.html","loc":"https://tofucode.com/posts/leetcode_0606_construct-string-from-binary-tree.html"}]};
var tipuesearch = {"pages":[{"title":"TofuCode404 Page not found","text":"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');\n\n  ga('create', 'G-DCBDZPQQD1', 'auto');\n  ga('send', 'pageview');\n\n\n\n\n\n\n\n\n\n\nTofuCode404 Page not found\n\n\n\n\n\n\n\n\nTofuCode\n\n\n\n\n\n\n\n\n\nInterview Questions\n\n\nRecent Questions\n\n\nTags\n\n\n\n\n\n\n\n 404 Page Note Found \n Try a search \n\n\n\n\n\n Eat Tofu and be true \n© 2021 TofuCode.com\n\nBuilt with Pelican using Flex theme\n \n\n\n{\n  \"@context\" : \"http://schema.org\",\n  \"@type\" : \"Blog\",\n  \"name\": \" TofuCode \",\n  \"url\" : \"https://tofucode.com\",\n  \"image\": \"\",\n  \"description\": \"\"\n}\n\n\n      $(document).ready(function() {\n        $('#tipue_search_input').tipuesearch();\n      });\n    \n\n","tags":"","url":"https://tofucode.com/404.html"},{"title":"Hello there","text":"Quick Start For a table of all the questions: Interview Questions For a list of all questions tags: Tags","tags":"pages","url":"https://tofucode.com/pages/hello-there.html","loc":"https://tofucode.com/pages/hello-there.html"},{"title":"Interview Questions","text":"# Question Tags 0001 Two Sum hash-map 0606 Construct String from Binary Tree recursion, binary-tree","tags":"pages","url":"https://tofucode.com/pages/interview-questions.html","loc":"https://tofucode.com/pages/interview-questions.html"},{"title":"Leetcode 0606. Construct String from Binary Tree","text":"Question Link : https://leetcode.com/problems/construct-string-from-binary-tree/ Difficulty: Easy Question You need to construct a string consists of parenthesis and integers from a binary tree with the preorder traversing way. The null node needs to be represented by empty parenthesis pair \"()\". And you need to omit all the empty parenthesis pairs that don't affect the one-to-one mapping relationship between the string and the original binary tree. Example 1: Input: Binary tree: [1,2,3,4] 1 / \\ 2 3 / 4 Output: \"1(2(4))(3)\" Explanation: Originallay it needs to be \"1(2(4)())(3()())\", but you need to omit all the unnecessary empty parenthesis pairs. And it will be \"1(2(4))(3)\". Example 2: Input: Binary tree: [1,2,3,null,4] 1 / \\ 2 3 \\ 4 Output: \"1(2()(4))(3)\" Explanation: Almost the same as the first example, except we can't omit the first parenthesis pair to break the one-to-one mapping relationship between the input and the output. Solution Use recursion to build the string while considering different cases of when to omit the parenthesis Code ''' Leetcode 0606. Construct String from Binary Tree Question Link : https://leetcode.com/problems/construct-string-from-binary-tree/ Solution Link : https://tofucode.com/posts/leetcode_0606_construct-string-from-binary-tree.html ''' # Definition for a binary tree node. # class TreeNode: # def __init__(self, val=0, left=None, right=None): # self.val = val # self.left = left # self.right = right class Solution : def tree2str ( self , t : TreeNode ) -> str : ''' current + left + right 1 (2(4)()) (3()()) (4)() 3()() Time: O(n) Space: O(n) ''' if not t : return \"\" current = str ( t . val ) left = self . wrap ( self . tree2str ( t . left )) right = self . wrap ( self . tree2str ( t . right )) if not t . left and not t . right : return current elif not t . right : return current + left return current + left + right def wrap ( self , s ): return '(' + s + ')'","tags":"Leetcode","url":"https://tofucode.com/posts/leetcode_0606_construct-string-from-binary-tree.html","loc":"https://tofucode.com/posts/leetcode_0606_construct-string-from-binary-tree.html"},{"title":"Leetcode 0001. Two Sum","text":"Question Link : https://leetcode.com/problems/two-sum/ Difficulty: Easy Question Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order. Example 1: Input: nums = [2,7,11,15], target = 9 Output: [0,1] Output: Because nums[0] + nums[1] == 9, we return [0, 1]. Example 2: Input: nums = [3,2,4], target = 6 Output: [1,2] Example 3: Input: nums = [3,3], target = 6 Output: [0,1] Constraints: 2 <= nums.length <= 103 -109 <= nums[i] <= 109 -109 <= target <= 109 Only one valid answer exists. Solution Use a hashmap to store number to index info for look up Code ''' Leetcode 0001. Two Sum Question Link : https://leetcode.com/problems/two-sum/ Solution Link : https://tofucode.com/posts/leetcode_0001_two-sum.html ''' class Solution : def twoSum ( self , nums : List [ int ], target : int ) -> List [ int ]: ''' [3,2,4], target = 6 numbers: [2, 4] indices: [1, 2] other = target - current number 3 ? 4 ? 2 ? seen = {} # number -> index 3 -> 0, 2 -> 1, Time: O(n) Space: O(n) ''' seen = {} # number -> index for i in range ( len ( nums )): num = nums [ i ] other = target - num if other in seen : return [ seen [ other ], i ] seen [ num ] = i","tags":"Leetcode","url":"https://tofucode.com/posts/leetcode_0001_two-sum.html","loc":"https://tofucode.com/posts/leetcode_0001_two-sum.html"}]};
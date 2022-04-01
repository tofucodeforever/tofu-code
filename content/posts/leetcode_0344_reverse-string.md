Title: Leetcode 0344. Reverse String
Slug: leetcode_0344_reverse-string
Status: published
Date: 2022-03-31
Category: Leetcode
Tags: string
Author: Zeph

Question Link : [https://leetcode.com/problems/reverse-string/](https://leetcode.com/problems/reverse-string/)

Difficulty: Easy

### Question
Write a function that reverses a string. The input string is given as an array of characters s.
You must do this by modifying the input array in-place with O(1) extra memory.
 
Example 1:
Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:
Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]

 
Constraints:

1 <= s.length <= 105
s[i] is a printable ascii character.

### Solution

Use 2 pointers from start and end and swap


### Code
```python
'''
Leetcode 0344. Reverse String
Question Link : https://leetcode.com/problems/reverse-string/
Solution Link : https://tofucode.com/posts/leetcode_0344_reverse-string.html
'''

class Solution:
    def reverseString(self, s: List[str]) -> None:
        """
        Do not return anything, modify s in-place instead.
        """
        if not s:
            return
        i = 0
        j = len(s) - 1

        while i < j:
            s[i], s[j] = s[j], s[i]
            i += 1
            j  -= 1

```


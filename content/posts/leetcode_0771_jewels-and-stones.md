Title: Leetcode 0771. Jewels and Stones
Slug: leetcode_0771_jewels-and-stones
Status: published
Date: 2024-09-02
Category: Leetcode
Tags: set
Author: Zeph

Question Link : [https://leetcode.com/problems/jewels-and-stones/](https://leetcode.com/problems/jewels-and-stones/)

Difficulty: Easy

Premium: False

### Question
You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.
Letters are case sensitive, so "a" is considered a different type of stone from "A".
 
Example 1:
Input: jewels = "aA", stones = "aAAbbbb"
Output: 3
Example 2:
Input: jewels = "z", stones = "ZZ"
Output: 0

 
Constraints:

1 <= jewels.length, stones.length <= 50
jewels and stones consist of only English letters.
All the characters of jewels are unique.

### Solution

Use a set to denote the known jewels so we can check every stone against that 

### Code
```python
'''
Leetcode 0771. Jewels and Stones
Question Link : https://leetcode.com/problems/jewels-and-stones/
Solution Link : https://tofucode.com/posts/leetcode_0771_jewels-and-stones.html
'''

class Solution:
    def numJewelsInStones(self, jewels: str, stones: str) -> int:
        """
        jewels:
        "aA" -> set("aA")

        for every stone in stones: check if in set

        Time : O(n + m)
        Space: O(n) <- n is length of jewels - consist of only English letters so really O(1)
        """
        known_jewels = set([c for c in jewels])
        result = 0

        for c in stones:
            if c in known_jewels:
                result += 1
        return result

```


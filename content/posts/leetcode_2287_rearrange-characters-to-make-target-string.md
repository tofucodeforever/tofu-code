Title: Leetcode 2287. Rearrange Characters to Make Target String
Slug: leetcode_2287_rearrange-characters-to-make-target-string
Status: published
Date: 2022-06-08
Category: Leetcode
Tags: hash-map-count
Author: Zeph

Question Link : [https://leetcode.com/problems/rearrange-characters-to-make-target-string/](https://leetcode.com/problems/rearrange-characters-to-make-target-string/)

Difficulty: Easy

### Question
You are given two 0-indexed strings s and target. You can take some letters from s and rearrange them to form new strings.
Return the maximum number of copies of target that can be formed by taking letters from s and rearranging them.
 
Example 1:

Input: s = "ilovecodingonleetcode", target = "code"
Output: 2
Explanation:
For the first copy of "code", take the letters at indices 4, 5, 6, and 7.
For the second copy of "code", take the letters at indices 17, 18, 19, and 20.
The strings that are formed are "ecod" and "code" which can both be rearranged into "code".
We can make at most two copies of "code", so we return 2.

Example 2:

Input: s = "abcba", target = "abc"
Output: 1
Explanation:
We can make one copy of "abc" by taking the letters at indices 0, 1, and 2.
We can make at most one copy of "abc", so we return 1.
Note that while there is an extra 'a' and 'b' at indices 3 and 4, we cannot reuse the letter 'c' at index 2, so we cannot make a second copy of "abc".

Example 3:

Input: s = "abbaccaddaeea", target = "aaaaa"
Output: 1
Explanation:
We can make one copy of "aaaaa" by taking the letters at indices 0, 3, 6, 9, and 12.
We can make at most one copy of "aaaaa", so we return 1.

 
Constraints:

1 <= s.length <= 100
1 <= target.length <= 10
s and target consist of lowercase English letters.

### Solution

Count the chars that is given and needed, do a division to find the possible copies


### Code
```python
'''
Leetcode 2287. Rearrange Characters to Make Target String
Question Link : https://leetcode.com/problems/rearrange-characters-to-make-target-string/
Solution Link : https://tofucode.com/posts/leetcode_2287_rearrange-characters-to-make-target-string.html
'''

class Solution:
    def rearrangeCharacters(self, s: str, target: str) -> int:
        '''
        1. Count how many times each char is given
        2. Count how many times each char is needed
        3. Do a division to see how many copies each char can provide
        4. Take the min which is the bottleneck

        Time : O(1) s and target length is constant
        Space: O(1)
        '''
        given_counts = [0] * 26 # given: count of a b c ...
        for c in s:
            i = ord(c) - ord('a')
            given_counts[i] += 1

        need_counts = [0] * 26 # needed: count of a b c ...
        for c in target:
            i = ord(c) - ord('a')
            need_counts[i] += 1

        copies = [] # for all the needed chars, how many copies each char can provide
        for i in range(len(need_counts)):
            if need_counts[i] != 0:
                copies.append(given_counts[i] // need_counts[i])

        return min(copies)


```


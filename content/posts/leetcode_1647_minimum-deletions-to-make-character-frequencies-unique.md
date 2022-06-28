Title: Leetcode 1647. Minimum Deletions to Make Character Frequencies Unique
Slug: leetcode_1647_minimum-deletions-to-make-character-frequencies-unique
Status: published
Date: 2022-06-27
Category: Leetcode
Tags: hash-map-count
Author: Zeph

Question Link : [https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/](https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/)

Difficulty: Medium

### Question
A string s is called good if there are no two different characters in s that have the same frequency.
Given a string s, return the minimum number of characters you need to delete to make s good.
The frequency of a character in a string is the number of times it appears in the string. For example, in the string "aab", the frequency of 'a' is 2, while the frequency of 'b' is 1.
 
Example 1:

Input: s = "aab"
Output: 0
Explanation: s is already good.

Example 2:

Input: s = "aaabbbcc"
Output: 2
Explanation: You can delete two 'b's resulting in the good string "aaabcc".
Another way it to delete one 'b' and one 'c' resulting in the good string "aaabbc".
Example 3:

Input: s = "ceabaacb"
Output: 2
Explanation: You can delete both 'c's resulting in the good string "eabaab".
Note that we only care about characters that are still in the string at the end (i.e. frequency of 0 is ignored).

 
Constraints:

1 <= s.length <= 105
s contains only lowercase English letters.

### Solution

Count the frequency and sort in reverse. Go through it and use a max_freq marker to calculate what the max possible freq is


### Code
```python
'''
Leetcode 1647. Minimum Deletions to Make Character Frequencies Unique
Question Link : https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/
Solution Link : https://tofucode.com/posts/leetcode_1647_minimum-deletions-to-make-character-frequencies-unique.html
'''

class Solution:
    def minDeletions(self, s: str) -> int:
        '''
        "aaabbbcc"
        a: 3
        b: 3
        c: 2

        "ceabaacb"
        a: 3
        b: 2
        c: 2
        e: 1

        count first, sort by value,
        from highest to lowest freq: keep trying max_freq

        # s has n length, and k number of distinct chars (which is 26 max)
        Time : O(n)
        Space: O(1)
        '''

        counts = {} # letter -> count

        for c in s:
            counts[c] = counts.get(c, 0) + 1

        max_freq = len(s)
        result = 0

        for k, v in sorted(counts.items(), key = lambda x: x[1], reverse=True):
            if v > max_freq:
                result += v - max_freq
                # frequency of 0 is ignored
                if max_freq > 0:
                    max_freq -= 1
            else:
                max_freq = v - 1

        return result


```


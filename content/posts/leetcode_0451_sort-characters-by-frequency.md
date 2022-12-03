Title: Leetcode 0451. Sort Characters By Frequency
Slug: leetcode_0451_sort-characters-by-frequency
Status: published
Date: 2022-12-03
Category: Leetcode
Tags: counting
Author: Zeph

Question Link : [https://leetcode.com/problems/sort-characters-by-frequency/](https://leetcode.com/problems/sort-characters-by-frequency/)

Difficulty: Medium

Premium: False

### Question
Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.
Return the sorted string. If there are multiple answers, return any of them.
 
Example 1:

Input: s = "tree"
Output: "eert"
Explanation: 'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.

Example 2:

Input: s = "cccaaa"
Output: "aaaccc"
Explanation: Both 'c' and 'a' appear three times, so both "cccaaa" and "aaaccc" are valid answers.
Note that "cacaca" is incorrect, as the same characters must be together.

Example 3:

Input: s = "Aabb"
Output: "bbAa"
Explanation: "bbaA" is also a valid answer, but "Aabb" is incorrect.
Note that 'A' and 'a' are treated as two different characters.

 
Constraints:

1 <= s.length <= 5 * 105
s consists of uppercase and lowercase English letters and digits.

### Solution

Count and sort and reconstruct the string.


### Code
```python
'''
Leetcode 0451. Sort Characters By Frequency
Question Link : https://leetcode.com/problems/sort-characters-by-frequency/
Solution Link : https://tofucode.com/posts/leetcode_0451_sort-characters-by-frequency.html
'''

class Solution:
    def frequencySort(self, s: str) -> str:
        '''
        map of char -> count
        go through s and count everything
        sort
        conatruct the string

        Time : O(n log n)
        Space: O(n)
        '''
        counter = {} # char -> count
        for c in s:
            counter[c] = counter.get(c, 0) + 1

        sorted_chars = sorted(counter.items(), key=lambda x: x[1], reverse=True)
        result = ''

        for c, count in sorted_chars:
            result += c * count

        return result

```


Title: Leetcode 2955. Number of Same-End Substrings
Slug: leetcode_2955_number-of-same-end-substrings
Status: published
Date: 2024-11-22
Category: Leetcode Premium
Tags: math, binary-search, prefix-sum
Author: Zeph

Question Link : [https://leetcode.com/problems/number-of-same-end-substrings/](https://leetcode.com/problems/number-of-same-end-substrings/)

Difficulty: Medium

Premium: True

### Question
You are given a 0-indexed string s, and a 2D array of integers queries, where queries[i] = [li, ri] indicates a substring of s starting from the index li and ending at the index ri (both inclusive), i.e. s[li..ri].
Return an array ans where ans[i] is the number of same-end substrings of queries[i].
A 0-indexed string t of length n is called same-end if it has the same character at both of its ends, i.e., t[0] == t[n - 1].
A substring is a contiguous non-empty sequence of characters within a string.
 
Example 1:

Input: s = "abcaab", queries = [[0,0],[1,4],[2,5],[0,5]]
Output: [1,5,5,10]
Explanation: Here is the same-end substrings of each query:
1st query: s[0..0] is "a" which has 1 same-end substring: "a".
2nd query: s[1..4] is "bcaa" which has 5 same-end substrings: "bcaa", "bcaa", "bcaa", "bcaa", "bcaa".
3rd query: s[2..5] is "caab" which has 5 same-end substrings: "caab", "caab", "caab", "caab", "caab".
4th query: s[0..5] is "abcaab" which has 10 same-end substrings: "abcaab", "abcaab", "abcaab", "abcaab", "abcaab", "abcaab", "abcaab", "abcaab", "abcaab", "abcaab".

Example 2:

Input: s = "abcd", queries = [[0,3]]
Output: [4]
Explanation: The only query is s[0..3] which is "abcd". It has 4 same-end substrings: "abcd", "abcd", "abcd", "abcd".

 
Constraints:

2 <= s.length <= 3 * 104
s consists only of lowercase English letters.
1 <= queries.length <= 3 * 104
queries[i] = [li, ri]
0 <= li <= ri < s.length

### Solution

The main observation to make is that given each query, what matters is the number of occurance every char and use that to calculate the number of substrings for that char. To find the number of occurances, one can use: 1) linear search 2) binary search 3) prefix sum 

### Code
```python
'''
Leetcode 2955. Number of Same-End Substrings
Question Link : https://leetcode.com/problems/number-of-same-end-substrings/
Solution Link : https://tofucode.com/posts/leetcode_2955_number-of-same-end-substrings.html
'''

class Solution:
    def sameEndSubstringCount(self, s: str, queries: List[List[int]]) -> List[int]:
        """
        s = "abcaab", queries = [[0,0],[1,4],[2,5],[0,5]]
        query: left and right inclusive
        same-end: if it has the same character at both of its ends, i.e., t[0] == t[n - 1].

        abcaab
        012345
        process s: for each char have a char->[position]
        a->[0, 3, 4]
        b->[1, 5]
        c->[2]

        for each query check the overlap of it between [position]
        [0,0] just a: 1
        [1,4] overlaps a[3, 4], b [1], c[2]
        a[3, 4]: 1 + 1 + 2 (combination: 2 + 1 )
        b[1]: 1
        c[2]: 1

        eg. abcaab a:[0, 3, 4]: 6 = 3 + 2 + 1
        6 = (1 + 3) * 3 / 2

        s of n length, q queries
        Time : O(n + nq) This will TLE
        Space: O(q)
        """
        # build char to positions mapping
        positions = {} # char -> [idx]
        for i in range(len(s)):
            c = s[i]
            positions[c] = positions.get(c, []) + [i]


        # go through each query
        result = []
        for query in queries:
            total = 0
            l, r = query
            # check overlap
            for k, position_list in positions.items():
                overlap_count = 0
                for p in position_list:
                    if l <= p <= r:
                        overlap_count += 1
                total += (1 + overlap_count) * overlap_count // 2
            result.append(total)

        return result

class SolutionImproved1:
    def sameEndSubstringCount(self, s: str, queries: List[List[int]]) -> List[int]:
        """
        Improved to binary search

        s = "abcaab", queries = [[0,0],[1,4],[2,5],[0,5]]
        query: left and right inclusive
        same-end: if it has the same character at both of its ends, i.e., t[0] == t[n - 1].

        abcaab
        012345
        process s: for each char have a char->[position]
        a->[0, 3, 4]
        b->[1, 5]
        c->[2]

        for each query check the overlap of it between [position]
        [0,0] just a: 1
        [1,4] overlaps a[3, 4], b [1], c[2]
        a[3, 4]: 1 + 1 + 2 (combination: 2 + 1 )
        b[1]: 1
        c[2]: 1

        eg. abcaab a:[0, 3, 4]: 6 = 3 + 2 + 1
        6 = (1 + 3) * 3 / 2

        s of n length, q queries
        Time : O(n + q * log n)
        Space: O(q)
        """
        # build char to positions mapping
        positions = {} # char -> [idx]
        for i in range(len(s)):
            c = s[i]
            positions[c] = positions.get(c, []) + [i]


        # go through each query
        result = []
        for query in queries:
            total = 0
            l, r = query
            # check overlap
            for k, position_list in positions.items():
                left_bound = bisect_left(position_list, l)
                right_bound = bisect_right(position_list, r)
                overlap_count = right_bound - left_bound

                total += (1 + overlap_count) * overlap_count // 2
            result.append(total)

        return result

class SolutionImproved2:
    def sameEndSubstringCount(self, s: str, queries: List[List[int]]) -> List[int]:
        """
        Improved to prefix sum

        s = "abcaab", queries = [[0,0],[1,4],[2,5],[0,5]]
        query: left and right inclusive
        same-end: if it has the same character at both of its ends, i.e., t[0] == t[n - 1].

        abcaab
        012345
        n = 6
        first frequence:
        a: [1, 0, 0, 1, 1, 0]
        then prefix sum:
        a: [1, 1, 1, 2, 3, 0]
        a:
        [0,0] just a at position 0: 1
        [1,4] = 3

        s of n length, q queries
        Time : O(n + q)
        Space: O(n)
        """
        # prefix sum 2d array: every row is a char's prefix sum array
        n = len(s)
        prefix_sum = [[0] * n for _ in range(26)]

        # calculate frequency
        for i in range(len(s)):
            c = s[i]
            prefix_sum[ord(c) - ord("a")][i] += 1

        # calculate prefix sum
        for char_prefix in prefix_sum:
            for j in range(1, n):
                char_prefix[j] += char_prefix[j - 1]

        # go through each query
        result = []
        for query in queries:
            total = 0
            l, r = query
            # check overlap
            for char_prefix in prefix_sum:
                left_freq = 0 if l == 0 else char_prefix[l- 1]
                right_freq = char_prefix[r]
                overlap_count = right_freq - left_freq
                total += (1 + overlap_count) * overlap_count // 2
            result.append(total)

        return result

```


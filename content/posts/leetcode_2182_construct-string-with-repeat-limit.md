Title: Leetcode 2182. Construct String With Repeat Limit
Slug: leetcode_2182_construct-string-with-repeat-limit
Status: published
Date: 2024-12-16
Category: Leetcode
Tags: priority-queue
Author: Zeph

Question Link : [https://leetcode.com/problems/construct-string-with-repeat-limit/](https://leetcode.com/problems/construct-string-with-repeat-limit/)

Difficulty: Medium

Premium: False

### Question
You are given a string s and an integer repeatLimit. Construct a new string repeatLimitedString using the characters of s such that no letter appears more than repeatLimit times in a row. You do not have to use all characters from s.
Return the lexicographically largest repeatLimitedString possible.
A string a is lexicographically larger than a string b if in the first position where a and b differ, string a has a letter that appears later in the alphabet than the corresponding letter in b. If the first min(a.length, b.length) characters do not differ, then the longer string is the lexicographically larger one.
 
Example 1:

Input: s = "cczazcc", repeatLimit = 3
Output: "zzcccac"
Explanation: We use all of the characters from s to construct the repeatLimitedString "zzcccac".
The letter 'a' appears at most 1 time in a row.
The letter 'c' appears at most 3 times in a row.
The letter 'z' appears at most 2 times in a row.
Hence, no letter appears more than repeatLimit times in a row and the string is a valid repeatLimitedString.
The string is the lexicographically largest repeatLimitedString possible so we return "zzcccac".
Note that the string "zzcccca" is lexicographically larger but the letter 'c' appears more than 3 times in a row, so it is not a valid repeatLimitedString.

Example 2:

Input: s = "aababab", repeatLimit = 2
Output: "bbabaa"
Explanation: We use only some of the characters from s to construct the repeatLimitedString "bbabaa". 
The letter 'a' appears at most 2 times in a row.
The letter 'b' appears at most 2 times in a row.
Hence, no letter appears more than repeatLimit times in a row and the string is a valid repeatLimitedString.
The string is the lexicographically largest repeatLimitedString possible so we return "bbabaa".
Note that the string "bbabaaa" is lexicographically larger but the letter 'a' appears more than 2 times in a row, so it is not a valid repeatLimitedString.

 
Constraints:

1 <= repeatLimit <= s.length <= 105
s consists of lowercase English letters.

### Solution

Since we want to greedily pick out the bigest chars, we can use a priority queue for this - which is a maxHeap. For the maxHeap - use a negative to achieve it with python's min heap implementation.

### Code
```python
'''
Leetcode 2182. Construct String With Repeat Limit
Question Link : https://leetcode.com/problems/construct-string-with-repeat-limit/
Solution Link : https://tofucode.com/posts/leetcode_2182_construct-string-with-repeat-limit.html
'''

class Solution:
    def repeatLimitedString(self, s: str, repeatLimit: int) -> str:
        """
        no letter appears more than repeatLimit times in a row
        as long as possible

        s = "cczazcc", repeatLimit = 3
        a: 1
        c: 4
        z: 2
        zz ccc a c

        s = "aababab", repeatLimit = 2
        a: 4
        b: 3

        bb a b aa

        1. count chars in c: counts = [0] # char(0: 1, 25:z) -> count.
        2. greedy: z - a take max repeatLimit,
            start at idx = 25
            take max char[idx]
            take a single idx-1 if hit limit
            take max char[idx]

            priority queue to always take the biggest chars

        Time : O(n * log m) m unique chars
        Space: O(n) space for resulting string
        """
        counts = {} # char -> count
        pq = MaxHeap() # store (offset, count, char)

        for c in s:
            counts[c] = counts.get(c, 0) + 1

        for c, count in counts.items():
            pq.push(c, count)

        result = []
        while pq.isNotEmpty():
            offset, count, c = pq.pop()
            take = min(count, repeatLimit)
            remain = count - take
            result.append(c * take)

            # if there are more and can keep going, take a filler
            if remain > 0 and pq.isNotEmpty():
                next_offset, next_count, next_c = pq.pop()
                result.append(next_c)
                if next_count > 1:
                    pq.push(next_c, next_count - 1)

                pq.push(c, remain)

        return ''.join(result)

class MaxHeap:
    def __init__(self):
        self.pq = []

    def push(self, c, count):
        offset =  ord(c) - ord('a')
        heapq.heappush(self.pq, (-offset, -count, c))

    def pop(self):
        offset, count, c = heapq.heappop(self.pq)
        return (-offset, -count, c)

    def isNotEmpty(self):
        return len(self.pq) > 0

```


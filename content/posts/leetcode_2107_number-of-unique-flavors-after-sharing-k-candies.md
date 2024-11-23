Title: Leetcode 2107. Number of Unique Flavors After Sharing K Candies
Slug: leetcode_2107_number-of-unique-flavors-after-sharing-k-candies
Status: published
Date: 2024-11-22
Category: Leetcode Premium
Tags: sliding-window-fixed
Author: Zeph

Question Link : [https://leetcode.com/problems/number-of-unique-flavors-after-sharing-k-candies/](https://leetcode.com/problems/number-of-unique-flavors-after-sharing-k-candies/)

Difficulty: Medium

Premium: True

### Question
You are given a 0-indexed integer array candies, where candies[i] represents the flavor of the ith candy. Your mom wants you to share these candies with your little sister by giving her k consecutive candies, but you want to keep as many flavors of candies as possible.
Return the maximum number of unique flavors of candy you can keep after sharing  with your sister.
 
Example 1:

Input: candies = [1,2,2,3,4,3], k = 3
Output: 3
Explanation: 
Give the candies in the range [1, 3] (inclusive) with flavors [2,2,3].
You can eat candies with flavors [1,4,3].
There are 3 unique flavors, so return 3.

Example 2:

Input: candies = [2,2,2,2,3,3], k = 2
Output: 2
Explanation: 
Give the candies in the range [3, 4] (inclusive) with flavors [2,3].
You can eat candies with flavors [2,2,2,3].
There are 2 unique flavors, so return 2.
Note that you can also share the candies with flavors [2,2] and eat the candies with flavors [2,2,3,3].

Example 3:

Input: candies = [2,4,5], k = 0
Output: 3
Explanation: 
You do not have to give any candies.
You can eat the candies with flavors [2,4,5].
There are 3 unique flavors, so return 3.

 
Constraints:

1 <= candies.length <= 105
1 <= candies[i] <= 105
0 <= k <= candies.length

### Solution

Since the ask is to take out a consecutive piece of length k - this first thought is that this could be a sliding window provlem with a constant length. The resulting unique candies can be maintained with a dict outside of the fixed sliding window.

### Code
```python
'''
Leetcode 2107. Number of Unique Flavors After Sharing K Candies
Question Link : https://leetcode.com/problems/number-of-unique-flavors-after-sharing-k-candies/
Solution Link : https://tofucode.com/posts/leetcode_2107_number-of-unique-flavors-after-sharing-k-candies.html
'''

class Solution:
    def shareCandies(self, candies: List[int], k: int) -> int:
        """
        candies = [1,2,2,3,4,3], k = 3
        give out [2,2,3], eat [1,4,3]

        give out k consecutive candies
        return set(rest) as unique flavors

        sliding window, want to find the largest set outside of the sliding window
        l = 0
        r = l+k
        constant length window of k
        maintain a dict {} of flavor -> count of everything outside the sliding window

        on window move:
        adjust this dict:
        take out left end of window, add in right end of window
        [1,2,2,3,4,3]
        count: {3: 2, 4: 1} - init [1,2,2]: max 2 flavors
        count: {1: 1, 3: 1, 4 : 1} moved to [2,2,3]: max 3 flavors

        Time : O(n)
        Space: O(n)
        """
        count = {} # flavor -> count

        # set up count on initial window
        for i in range(k, len(candies)):
            candy = candies[i]
            count[candy] = count.get(candy, 0) + 1

        result = len(count)

        # slide window and recalculate:
        # window: take left out, add right - next one in
        # count dict: add left in, take right out
        for i in range(k, len(candies)):
            l = i-k
            r = i
            l_candy = candies[l]
            r_candy = candies[r]

            # count: add left in, take right out
            count[l_candy] = count.get(l_candy, 0) + 1
            count[r_candy] -= 1
            if count[r_candy] == 0:
                del count[r_candy]

            result = max(result, len(count))

        return result




```


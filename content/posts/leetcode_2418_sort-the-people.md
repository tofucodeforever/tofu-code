Title: Leetcode 2418. Sort the People
Slug: leetcode_2418_sort-the-people
Status: published
Date: 2022-11-11
Category: Leetcode
Tags: hash-map
Author: Zeph

Question Link : [https://leetcode.com/problems/sort-the-people/](https://leetcode.com/problems/sort-the-people/)

Difficulty: Easy

### Question
You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.
For each index i, names[i] and heights[i] denote the name and height of the ith person.
Return names sorted in descending order by the people's heights.
 
Example 1:

Input: names = ["Mary","John","Emma"], heights = [180,165,170]
Output: ["Mary","Emma","John"]
Explanation: Mary is the tallest, followed by Emma and John.

Example 2:

Input: names = ["Alice","Bob","Bob"], heights = [155,185,150]
Output: ["Bob","Alice","Bob"]
Explanation: The first Bob is the tallest, followed by Alice and the second Bob.

 
Constraints:

n == names.length == heights.length
1 <= n <= 103
1 <= names[i].length <= 20
1 <= heights[i] <= 105
names[i] consists of lower and upper case English letters.
All the values of heights are distinct.

### Solution

Use a hashmap to map height to name, and sort by height.

### Code
```python
'''
Leetcode 2418. Sort the People
Question Link : https://leetcode.com/problems/sort-the-people/
Solution Link : https://tofucode.com/posts/leetcode_2418_sort-the-people.html
'''

class Solution:
    def sortPeople(self, names: List[str], heights: List[int]) -> List[str]:
        '''
        height is distinct
        people = {} # height -> name
        sort based on key, return name

        Time : O(n)
        Space: O(n)
        '''
        people = {} # height -> name

        for i in range(len(names)):
            p = names[i]
            h = heights[i]
            people[h] = p

        sorted_people = sorted(people.items(), key=lambda x: x[0], reverse=True)
        return [x[1] for x in sorted_people]
```


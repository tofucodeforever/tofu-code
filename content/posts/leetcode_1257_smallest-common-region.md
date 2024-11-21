Title: Leetcode 1257. Smallest Common Region
Slug: leetcode_1257_smallest-common-region
Status: published
Date: 2024-11-20
Category: Leetcode
Tags: least-common-ancestor
Author: Zeph

Question Link : [https://leetcode.com/problems/smallest-common-region/](https://leetcode.com/problems/smallest-common-region/)

Difficulty: Medium

Premium: False

### Question
You are given some lists of regions where the first region of each list includes all other regions in that list.
Naturally, if a region x contains another region y then x is bigger than y. Also, by definition, a region x contains itself.
Given two regions: region1 and region2, return the smallest region that contains both of them.
If you are given regions r1, r2, and r3 such that r1 includes r3, it is guaranteed there is no r2 such that r2 includes r3.
It is guaranteed the smallest region exists.
 
Example 1:

Input:
regions = [["Earth","North America","South America"],
["North America","United States","Canada"],
["United States","New York","Boston"],
["Canada","Ontario","Quebec"],
["South America","Brazil"]],
region1 = "Quebec",
region2 = "New York"
Output: "North America"

Example 2:

Input: regions = [["Earth", "North America", "South America"],["North America", "United States", "Canada"],["United States", "New York", "Boston"],["Canada", "Ontario", "Quebec"],["South America", "Brazil"]], region1 = "Canada", region2 = "South America"
Output: "Earth"

 
Constraints:

2 <= regions.length <= 104
2 <= regions[i].length <= 20
1 <= regions[i][j].length, region1.length, region2.length <= 20
region1 != region2
regions[i][j], region1, and region2 consist of English letters.
The input is generated such that there exists a region which contains all the other regions, either directly or indirectly.

### Solution

LCA problem, since the only info we care about here are the names, we can just use a dict instead of building out a Node class

### Code
```python
'''
Leetcode 1257. Smallest Common Region
Question Link : https://leetcode.com/problems/smallest-common-region/
Solution Link : https://tofucode.com/posts/leetcode_1257_smallest-common-region.html
'''

class Solution:
    def findSmallestRegion(self, regions: List[List[str]], region1: str, region2: str) -> str:
        """
        regions = [
            ["Earth","North America","South America"],
            ["North America","United States","Canada"],
            ["United States","New York","Boston"],
            ["Canada","Ontario","Quebec"],
            ["South America","Brazil"]
        ],
        for a sublist: first is the parent
        eg:
            Quebec (Quebec - Canada - North America)
            New York (New York - United States - North America)

        ask:
        region1, region2 find the first common ancester

        Tree: and find first common ancester
        1. set up Tree:
            do we need Node class:
                no: all we care about is the child -> parent, use a dict
            Go through regions list and build a tree
        3. find first common ancester
            traverse one region up to root and store in set()
            traverse second region up and return first common

        Time : O(n)
        Space: O(n)
        """
        nodes = {} # child -> parent

        # set up tree
        for region_info in regions:
            parent_name = region_info[0]
            children_names = region_info[1:]
            for child_name in children_names:
                nodes[child_name] = parent_name

        # find common ancestor
        p = region1
        seen = set()
        while p:
            seen.add(p)
            p = nodes.get(p, None)
        p = region2
        while p:
            if p in seen:
                return p
            p = nodes.get(p, None)

```


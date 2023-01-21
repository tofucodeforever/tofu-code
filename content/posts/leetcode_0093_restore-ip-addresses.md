Title: Leetcode 0093. Restore IP Addresses
Slug: leetcode_0093_restore-ip-addresses
Status: published
Date: 2023-01-21
Category: Leetcode
Tags: backtracking
Author: Zeph

Question Link : [https://leetcode.com/problems/restore-ip-addresses/](https://leetcode.com/problems/restore-ip-addresses/)

Difficulty: Medium

Premium: False

### Question
A valid IP address consists of exactly four integers separated by single dots. Each integer is between 0 and 255 (inclusive) and cannot have leading zeros.

For example, "0.1.2.201" and "192.168.1.1" are valid IP addresses, but "0.011.255.245", "192.168.1.312" and "192.168@1.1" are invalid IP addresses.

Given a string s containing only digits, return all possible valid IP addresses that can be formed by inserting dots into s. You are not allowed to reorder or remove any digits in s. You may return the valid IP addresses in any order.
 
Example 1:

Input: s = "25525511135"
Output: ["255.255.11.135","255.255.111.35"]

Example 2:

Input: s = "0000"
Output: ["0.0.0.0"]

Example 3:

Input: s = "101023"
Output: ["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]

 
Constraints:

1 <= s.length <= 20
s consists of digits only.

### Solution

Since we want to consider different combos of splitting the current string, we'd want to use backtracking. Check that the various conditions are satisfied. 

### Code
```python
'''
Leetcode 0093. Restore IP Addresses
Question Link : https://leetcode.com/problems/restore-ip-addresses/
Solution Link : https://tofucode.com/posts/leetcode_0093_restore-ip-addresses.html
'''

class Solution:
    def restoreIpAddresses(self, s: str) -> List[str]:
        '''
        Use backtracking to build a path
        various checks to check for the conditions
        note for the for loop only check next 3

        Time : O(3 ^ 3) 3 branches, depth of 3
        Space: O(1)
        '''
        result = []
        self.backtrack(result, s, [], 0)
        return result

    def backtrack(self, result, s, path, idx):
        if idx == len(s):
            if len(path) == 4:
                result.append('.'.join(path))
            return

        if len(path) >= 4:
            return

        # go to next possible integer with max length 3
        for i in range(idx+1, min(idx+1+3, len(s)+1)):
            num = s[idx:i]
            # check leading 0
            if num[0] == '0' and len(num) > 1:
                break
            # check range
            if int(num) > 255:
                break

            self.backtrack(result, s, path +[num], i)
```


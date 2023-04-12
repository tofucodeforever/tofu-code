Title: Leetcode 0071. Simplify Path
Slug: leetcode_0071_simplify-path
Status: published
Date: 2023-04-11
Category: Leetcode
Tags: stack
Author: Zeph

Question Link : [https://leetcode.com/problems/simplify-path/](https://leetcode.com/problems/simplify-path/)

Difficulty: Medium

Premium: False

### Question
Given a string path, which is an absolute path (starting with a slash '/') to a file or directory in a Unix-style file system, convert it to the simplified canonical path.
In a Unix-style file system, a period '.' refers to the current directory, a double period '..' refers to the directory up a level, and any multiple consecutive slashes (i.e. '//') are treated as a single slash '/'. For this problem, any other format of periods such as '...' are treated as file/directory names.
The canonical path should have the following format:

The path starts with a single slash '/'.
Any two directories are separated by a single slash '/'.
The path does not end with a trailing '/'.
The path only contains the directories on the path from the root directory to the target file or directory (i.e., no period '.' or double period '..')

Return the simplified canonical path.
 
Example 1:

Input: path = "/home/"
Output: "/home"
Explanation: Note that there is no trailing slash after the last directory name.

Example 2:

Input: path = "/../"
Output: "/"
Explanation: Going one level up from the root directory is a no-op, as the root level is the highest level you can go.

Example 3:

Input: path = "/home//foo/"
Output: "/home/foo"
Explanation: In the canonical path, multiple consecutive slashes are replaced by a single one.

 
Constraints:

1 <= path.length <= 3000
path consists of English letters, digits, period '.', slash '/' or '_'.
path is a valid absolute Unix path.

### Solution

Use a stack, consider the different cases, especially when to continue. 


### Code
```python
'''
Leetcode 0071. Simplify Path
Question Link : https://leetcode.com/problems/simplify-path/
Solution Link : https://tofucode.com/posts/leetcode_0071_simplify-path.html
'''

class Solution:
    def simplifyPath(self, path: str) -> str:
        """
        split path by /
        process each part
        join at the end

        Time : O(n)
        Space: O(n)
        """
        stack = []
        parts = path.split("/")

        for part in parts:
            if not part or part == ".":
                continue
            elif part == "..":
                if stack:
                    stack.pop()
            else:
                stack.append(part)


        return "/" + "/".join(stack)


```


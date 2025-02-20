Title: Leetcode 1166. Design File System
Slug: leetcode_1166_design-file-system
Status: published
Date: 2025-02-19
Category: Leetcode Premium
Tags: simulation, string
Author: Zeph

Question Link : [https://leetcode.com/problems/design-file-system/](https://leetcode.com/problems/design-file-system/)

Difficulty: Medium

Premium: True

### Question
You are asked to design a file system that allows you to create new paths and associate them with different values.
The format of a path is one or more concatenated strings of the form: / followed by one or more lowercase English letters. For example, "/leetcode" and "/leetcode/problems" are valid paths while an empty string "" and "/" are not.
Implement the FileSystem class:

bool createPath(string path, int value) Creates a new path and associates a value to it if possible and returns true. Returns false if the path already exists or its parent path doesn't exist.
int get(string path) Returns the value associated with path or returns -1 if the path doesn't exist.

 
Example 1:

Input: 
["FileSystem","createPath","get"]
[[],["/a",1],["/a"]]
Output: 
[null,true,1]
Explanation: 
FileSystem fileSystem = new FileSystem();

fileSystem.createPath("/a", 1); // return true
fileSystem.get("/a"); // return 1

Example 2:

Input: 
["FileSystem","createPath","createPath","get","createPath","get"]
[[],["/leet",1],["/leet/code",2],["/leet/code"],["/c/d",1],["/c"]]
Output: 
[null,true,true,2,false,-1]
Explanation: 
FileSystem fileSystem = new FileSystem();

fileSystem.createPath("/leet", 1); // return true
fileSystem.createPath("/leet/code", 2); // return true
fileSystem.get("/leet/code"); // return 2
fileSystem.createPath("/c/d", 1); // return false because the parent path "/c" doesn't exist.
fileSystem.get("/c"); // return -1 because this path doesn't exist.

 
Constraints:

2 <= path.length <= 100
1 <= value <= 109
Each path is valid and consists of lowercase English letters and '/'.
At most 104 calls in total will be made to createPath and get.

### Solution

One main point to understand is that one would only need to check the current parent path and don't need to go through the whole path as the existance of the parent means that the parent was added with a valid grandparent path.

### Code
```python
'''
Leetcode 1166. Design File System
Question Link : https://leetcode.com/problems/design-file-system/
Solution Link : https://tofucode.com/posts/leetcode_1166_design-file-system.html
'''
class FileSystem:

    def __init__(self):
        """
        mapping of path -> value

        /a/b/c with 1
        split by /
        check if parent exist

        /a -> something
        /a/b -> something
        /a/b/c -> 1
        check need to check the parent: cause grandparent must have been valid

        Time : O(n) n length of a single path
        Space: O(m) m total path
        """
        self.record = {} # path -> value

    def createPath(self, path: str, value: int) -> bool:
        if not path or path in self.record:
            return False

        parts = [x for x in path.split('/') if x]
        parent = '/' # init root path
        parent += '/'.join(parts[:-1])
        if parent != '/' and parent not in self.record:
            return False

        self.record[path] = value
        return True


    def get(self, path: str) -> int:
        return self.record.get(path, -1)


# Your FileSystem object will be instantiated and called as such:
# obj = FileSystem()
# param_1 = obj.createPath(path,value)
# param_2 = obj.get(path)
```


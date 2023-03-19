Title: Leetcode 1472. Design Browser History
Slug: leetcode_1472_design-browser-history
Status: published
Date: 2023-03-19
Category: Leetcode
Tags: stack
Author: Zeph

Question Link : [https://leetcode.com/problems/design-browser-history/](https://leetcode.com/problems/design-browser-history/)

Difficulty: Medium

Premium: False

### Question
You have a browser of one tab where you start on the homepage and you can visit another url, get back in the history number of steps or move forward in the history number of steps.
Implement the BrowserHistory class:

BrowserHistory(string homepage) Initializes the object with the homepage of the browser.
void visit(string url) Visits url from the current page. It clears up all the forward history.
string back(int steps) Move steps back in history. If you can only return x steps in the history and steps > x, you will return only x steps. Return the current url after moving back in history at most steps.
string forward(int steps) Move steps forward in history. If you can only forward x steps in the history and steps > x, you will forward only x steps. Return the current url after forwarding in history at most steps.

 
Example:

Input:
["BrowserHistory","visit","visit","visit","back","back","forward","visit","forward","back","back"]
[["leetcode.com"],["google.com"],["facebook.com"],["youtube.com"],[1],[1],[1],["linkedin.com"],[2],[2],[7]]
Output:
[null,null,null,null,"facebook.com","google.com","facebook.com",null,"linkedin.com","google.com","leetcode.com"]

Explanation:
BrowserHistory browserHistory = new BrowserHistory("leetcode.com");
browserHistory.visit("google.com");       // You are in "leetcode.com". Visit "google.com"
browserHistory.visit("facebook.com");     // You are in "google.com". Visit "facebook.com"
browserHistory.visit("youtube.com");      // You are in "facebook.com". Visit "youtube.com"
browserHistory.back(1);                   // You are in "youtube.com", move back to "facebook.com" return "facebook.com"
browserHistory.back(1);                   // You are in "facebook.com", move back to "google.com" return "google.com"
browserHistory.forward(1);                // You are in "google.com", move forward to "facebook.com" return "facebook.com"
browserHistory.visit("linkedin.com");     // You are in "facebook.com". Visit "linkedin.com"
browserHistory.forward(2);                // You are in "linkedin.com", you cannot move forward any steps.
browserHistory.back(2);                   // You are in "linkedin.com", move back two steps to "facebook.com" then to "google.com". return "google.com"
browserHistory.back(7);                   // You are in "google.com", you can move back only one step to "leetcode.com". return "leetcode.com"

 
Constraints:

1 <= homepage.length <= 20
1 <= url.length <= 20
1 <= steps <= 100
homepage and url consist of  '.' or lower case English letters.
At most 5000 calls will be made to visit, back, and forward.

### Solution

Use either 1 stack with a pointer or separate back and forward stack with current.

### Code
```python
'''
Leetcode 1472. Design Browser History
Question Link : https://leetcode.com/problems/design-browser-history/
Solution Link : https://tofucode.com/posts/leetcode_1472_design-browser-history.html
'''

class BrowserHistory:
    '''
    Use a single stack, with a current pointer.
    visit: add url and clear stack to the right

    n visits
    Time : O(1)
    Space: O(n)
    '''
    def __init__(self, homepage: str):
        self.stack = [homepage]
        self.p = 0

    def visit(self, url: str) -> None:
        self.p += 1
        if self.p == len(self.stack):
            self.stack.append(url)
        else:
            self.stack[self.p] = url
        self.stack = self.stack[:self.p+1]

    def back(self, steps: int) -> str:
        self.p = max(self.p - steps, 0)
        return self.stack[self.p]

    def forward(self, steps: int) -> str:
        self.p = min(self.p + steps, len(self.stack)-1)
        return self.stack[self.p]


class BrowserHistoryAlternative1:
    '''
    Easier to think about this first, but actually more complicated to write out
    2 stack:
    back_stack:
    forward_stacK:

    ["leetcode.com"],["google.com"],["facebook.com"],["youtube.com"]
    hompage + visit: l, g, f, y

    back, current, forward
    [l, g, f] y []

    back 1:
    [l, g] f [y]
    back 1:
    [l] g [y, f]
    forward:
    [l, g] f [y]


    visit:
        current -> back_stack
        url -> current
        forward_stack = []
    back:
        current -> forward_stack
        back_stack -> current
    forward:
        current -> back_stack
        forward_stack -> current

    n visits
    Time : O(1)
    Space: O(n)
    '''
    def __init__(self, homepage: str):
        self.back_stack = []
        self.forward_stack = []
        self.current = homepage

    def visit(self, url: str) -> None:
        self.back_stack.append(self.current)
        self.current = url
        self.forward_stack = []

    def back(self, steps: int) -> str:
        step = steps
        while self.back_stack and step > 0:
            self.forward_stack.append(self.current)
            self.current = self.back_stack.pop()
            step -= 1
        return self.current

    def forward(self, steps: int) -> str:
        step = steps
        while self.forward_stack and step > 0:
            self.back_stack.append(self.current)
            self.current = self.forward_stack.pop()
            step -= 1
        return self.current



# Your BrowserHistory object will be instantiated and called as such:
# obj = BrowserHistory(homepage)
# obj.visit(url)
# param_2 = obj.back(steps)
# param_3 = obj.forward(steps)
```


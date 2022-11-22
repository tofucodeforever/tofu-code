Title: Leetcode 0901. Online Stock Span
Slug: leetcode_0901_online-stock-span
Status: published
Date: 2022-11-08
Category: Leetcode
Tags: monotonic-stack
Author: Zeph

Question Link : [https://leetcode.com/problems/online-stock-span/](https://leetcode.com/problems/online-stock-span/)

Difficulty: Medium

### Question
Design an algorithm that collects daily price quotes for some stock and returns the span of that stock's price for the current day.
The span of the stock's price today is defined as the maximum number of consecutive days (starting from today and going backward) for which the stock price was less than or equal to today's price.

For example, if the price of a stock over the next 7 days were [100,80,60,70,60,75,85], then the stock spans would be [1,1,1,2,1,4,6].

Implement the StockSpanner class:

StockSpanner() Initializes the object of the class.
int next(int price) Returns the span of the stock's price given that today's price is price.

 
Example 1:

Input
["StockSpanner", "next", "next", "next", "next", "next", "next", "next"]
[[], [100], [80], [60], [70], [60], [75], [85]]
Output
[null, 1, 1, 1, 2, 1, 4, 6]

Explanation
StockSpanner stockSpanner = new StockSpanner();
stockSpanner.next(100); // return 1
stockSpanner.next(80);  // return 1
stockSpanner.next(60);  // return 1
stockSpanner.next(70);  // return 2
stockSpanner.next(60);  // return 1
stockSpanner.next(75);  // return 4, because the last 4 prices (including today's price of 75) were less than or equal to today's price.
stockSpanner.next(85);  // return 6

 
Constraints:

1 <= price <= 105
At most 104 calls will be made to next.

### Solution

Since we need to keep checking back, we can use a stack, we also need to store how many smaller prices before are seen at each price, so we can use a tuple. Here we have a monotonic stack that is decreasing in price, and with each price, we store the span.

### Code
```python
'''
Leetcode 0901. Online Stock Span
Question Link : https://leetcode.com/problems/online-stock-span/
Solution Link : https://tofucode.com/posts/leetcode_0901_online-stock-span.html
'''

class StockSpanner:
    '''
    1: 100
    1: 100 80
    1: 100 80 60
    2: 100 80 60 70 (60 and 70)
    1: 100 80 60 70 60
    4: 100 80 60 70 60 75 (60 70 60 75)

    stack keep checking back [(price, span count)]
    remove all that are smaller than the current price and add +1
    monotonic decreasing stack

    1: (100, 1)
    1: (100, 1), (80, 1)
    1: (100, 1), (80, 1), (60, 1)
    2: (100, 1), (80, 1), (70, 2)
    1: (100, 1), (80, 1), (70, 2), (60, 1)
    4: (100, 1), (80, 1), (75, 4)  4 is: (2 + 1 + 1)


    Time : O(1)
    Space: O(n)
    '''

    def __init__(self):
        self.stack = []

    def next(self, price: int) -> int:
        count = 1
        while self.stack and self.stack[-1][0] <= price:
            count += self.stack.pop()[1]

        self.stack.append((price, count))

        return count


# Your StockSpanner object will be instantiated and called as such:
# obj = StockSpanner()
# param_1 = obj.next(price)
```


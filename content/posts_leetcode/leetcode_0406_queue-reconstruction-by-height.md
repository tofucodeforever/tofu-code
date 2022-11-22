Title: Leetcode 0406. Queue Reconstruction by Height
Slug: leetcode_0406_queue-reconstruction-by-height
Status: published
Date: 2022-07-07
Category: Leetcode
Tags: sort
Author: Zeph

Question Link : [https://leetcode.com/problems/queue-reconstruction-by-height/](https://leetcode.com/problems/queue-reconstruction-by-height/)

Difficulty: Medium

### Question
You are given an array of people, people, which are the attributes of some people in a queue (not necessarily in order). Each people[i] = [hi, ki] represents the ith person of height hi with exactly ki other people in front who have a height greater than or equal to hi.
Reconstruct and return the queue that is represented by the input array people. The returned queue should be formatted as an array queue, where queue[j] = [hj, kj] is the attributes of the jth person in the queue (queue[0] is the person at the front of the queue).
 
Example 1:

Input: people = [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]
Output: [[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]]
Explanation:
Person 0 has height 5 with no other people taller or the same height in front.
Person 1 has height 7 with no other people taller or the same height in front.
Person 2 has height 5 with two persons taller or the same height in front, which is person 0 and 1.
Person 3 has height 6 with one person taller or the same height in front, which is person 1.
Person 4 has height 4 with four people taller or the same height in front, which are people 0, 1, 2, and 3.
Person 5 has height 7 with one person taller or the same height in front, which is person 1.
Hence [[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]] is the reconstructed queue.

Example 2:

Input: people = [[6,0],[5,0],[4,0],[3,2],[2,2],[1,4]]
Output: [[4,0],[5,0],[2,2],[3,2],[1,4],[6,0]]

 
Constraints:

1 <= people.length <= 2000
0 <= hi <= 106
0 <= ki < people.length
It is guaranteed that the queue can be reconstructed.

### Solution

Try to write out what would happen if we sorted from decreasing h or increasing h, and how each one needs to be inserted with relation to its k.


### Code
```python
'''
Leetcode 0406. Queue Reconstruction by Height
Question Link : https://leetcode.com/problems/queue-reconstruction-by-height/
Solution Link : https://tofucode.com/posts/leetcode_0406_queue-reconstruction-by-height.html
'''

class Solution:
    def reconstructQueue(self, people: List[List[int]]) -> List[List[int]]:
        '''
        [7,0],[4,4],[7,1],[5,0],[6,1],[5,2]
        k: num of people in front >= me

        # start from smallest height
        [5,0],[7,0],[5,2],[6,1],[4,4],[7,1]

                                [4,4]
        [5,0]       [5,2]
                          [6,1]
              [7,0]                   [7,1]

        from h smallest to largest:
            count empties or same height till upto k and insert

        Time : O(nlogn + n^2)
        Space: O(n)
        '''
        result = [None] * len(people)

        # sort the array in increasing order of height, increasing of k
        # before: [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]
        # after : [[4,4],[5,0],[5,2],[6,1],[7,0],[7,1]]
        people = sorted(people, key=lambda x: (x[0], x[1]))
        for p in people:
            h, k = p

            for i in range(len(people)):
                if result[i] is None or result[i][0] == h:
                    k -= 1
                # found position for p, -1 now cause there were k before
                if k == -1:
                    result[i] = p
                    break

        return result


class SolutionAlternative1:
    def reconstructQueue(self, people: List[List[int]]) -> List[List[int]]:
        '''
        [7,0],[4,4],[7,1],[5,0],[6,1],[5,2]
        k: num of people in front >= me

        insert with k as index
        [5,0],[7,0],[5,2],[6,1],[4,4],[7,1]
        0: [7,0]
        1: [7,0], [7,1]
        1: [7,0], [6,1], [7,1]
        1: [7,0], [6,1], [7,1]
        0: [5,0], [7,0], [6,1], [7,1]
        2: [5,0], [7,0], [5,2], [6,1], [7,1]
        4: [5,0], [7,0], [5,2], [6,1], [4,4], [7,1]

        * persons with the same height are sorted by the second value

        Time : O(nlogn + n^2)
        Space: O(n)
        '''
        result = []

        # sort the array in decreasing order of height, increasing of k
        # before: [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]
        # after:  [[7,0],[7,1],[6,1],[5,0],[5,2],[4,4]]
        people.sort(key=lambda x: (-x[0], x[1]))
        for p in people:
            h, k = p
            # greedy insert with k as the index
            result.insert(k, p)

        return result



```


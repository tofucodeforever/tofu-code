Title: Leetcode 1094. Car Pooling
Slug: leetcode_1094_car-pooling
Status: published
Date: 2022-11-12
Category: Leetcode
Tags: interval-overlap
Author: Zeph

Question Link : [https://leetcode.com/problems/car-pooling/](https://leetcode.com/problems/car-pooling/)

Difficulty: Medium

### Question
There is a car with capacity empty seats. The vehicle only drives east (i.e., it cannot turn around and drive west).
You are given the integer capacity and an array trips where trips[i] = [numPassengersi, fromi, toi] indicates that the ith trip has numPassengersi passengers and the locations to pick them up and drop them off are fromi and toi respectively. The locations are given as the number of kilometers due east from the car's initial location.
Return true if it is possible to pick up and drop off all passengers for all the given trips, or false otherwise.
 
Example 1:

Input: trips = [[2,1,5],[3,3,7]], capacity = 4
Output: false

Example 2:

Input: trips = [[2,1,5],[3,3,7]], capacity = 5
Output: true

 
Constraints:

1 <= trips.length <= 1000
trips[i].length == 3
1 <= numPassengersi <= 100
0 <= fromi < toi <= 1000
1 <= capacity <= 105

### Solution

Use a dict or an array to track what the passenger count is at every point, and then whenever that exceeds the capacity, we return False.

### Code
```python
'''
Leetcode 1094. Car Pooling
Question Link : https://leetcode.com/problems/car-pooling/
Solution Link : https://tofucode.com/posts/leetcode_1094_car-pooling.html
'''

class Solution:
    def carPooling(self, trips: List[List[int]], capacity: int) -> bool:
        '''
        location -> count
        check through every locaiton needs to be < capacity

        [2,1,5], passengers, from, to
        1 -> 2
        2 -> 2
        3 -> 2 + 3
        4 -> 2 + 3
        5 -> 2 + 3

        Time : O(1000 * 1000) every trip goes full length
        Space: O(1000)
        '''
        location = {} # location -> passenger count

        for trip in trips:
            p, start, end = trip
            for i in range(start, end):
                location[i] = location.get(i, 0) + p
                if location[i] > capacity:
                    return False

        return True

```


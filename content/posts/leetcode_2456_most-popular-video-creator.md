Title: Leetcode 2456. Most Popular Video Creator
Slug: leetcode_2456_most-popular-video-creator
Status: published
Date: 2022-11-05
Category: Leetcode
Tags: hash-map-count
Author: Zeph

Question Link : [https://leetcode.com/problems/most-popular-video-creator/](https://leetcode.com/problems/most-popular-video-creator/)

Difficulty: Medium

### Question
You are given two string arrays creators and ids, and an integer array views, all of length n. The ith video on a platform was created by creator[i], has an id of ids[i], and has views[i] views.
The popularity of a creator is the sum of the number of views on all of the creator's videos. Find the creator with the highest popularity and the id of their most viewed video.

If multiple creators have the highest popularity, find all of them.
If multiple videos have the highest view count for a creator, find the lexicographically smallest id.

Return a 2D array of strings answer where answer[i] = [creatori, idi] means that creatori has the highest popularity and idi is the id of their most popular video. The answer can be returned in any order.
 
Example 1:

Input: creators = ["alice","bob","alice","chris"], ids = ["one","two","three","four"], views = [5,10,5,4]
Output: [["alice","one"],["bob","two"]]
Explanation:
The popularity of alice is 5 + 5 = 10.
The popularity of bob is 10.
The popularity of chris is 4.
alice and bob are the most popular creators.
For bob, the video with the highest view count is "two".
For alice, the videos with the highest view count are "one" and "three". Since "one" is lexicographically smaller than "three", it is included in the answer.

Example 2:

Input: creators = ["alice","alice","alice"], ids = ["a","b","c"], views = [1,2,2]
Output: [["alice","b"]]
Explanation:
The videos with id "b" and "c" have the highest view count.
Since "b" is lexicographically smaller than "c", it is included in the answer.

 
Constraints:

n == creators.length == ids.length == views.length
1 <= n <= 105
1 <= creators[i].length, ids[i].length <= 5
creators[i] and ids[i] consist only of lowercase English letters.
0 <= views[i] <= 105

### Solution

We need to store all of the given info: name, id, view number, as well as the total popularity. We can do this with hashmap. Also much clearer with a new class. 

### Code
```python
'''
Leetcode 2456. Most Popular Video Creator
Question Link : https://leetcode.com/problems/most-popular-video-creator/
Solution Link : https://tofucode.com/posts/leetcode_2456_most-popular-video-creator.html
'''
class Solution:
    def mostPopularCreator(self, creators: List[str], ids: List[str], views: List[int]) -> List[List[str]]:
        '''
        popularity = sum (all views on all video)

        1 loop: person -> views
        2 loop: need sum of views - find top
        3 loop:
        get all people with top reviews.
        sort based on views

        people = {} # name -> (popularity, [(sorted view, index)])

        Time : O(n)
        Space: O(n)
        '''
        people = {} # name -> (popularity, [(sorted view, index)])

        for i in range(len(creators)):
            name = creators[i]
            vid = ids[i]
            v = views[i]
            people[name] = people.get(name, []) + [(v, vid)]

        for name, view_list in people.items():
            popularity = sum([x[0] for x in view_list])
            people[name] = (popularity, people[name])

        # sort by popularity,  x[1] is the value,  x[1][0] is popularity
        sorted_people = sorted(people.items(), key=lambda x: x[1][0], reverse=True)
        max_pop = sorted_people[0][1][0]

        # for only the top popularity, write the name and id to answer
        result = []
        for person in sorted_people:
            if person[1][0] != max_pop:
                break
            view_list = person[1][1]
            # sort by view, negative so views are big to same, and then ids are lexicographical order
            view_list = sorted(view_list, key=lambda x: (-x[0], x[1]))
            result.append([person[0], view_list[0][1]])

        return result


class Creator:
    def __init__(self, name):
        self.name = name
        self.view_list = [] # (view, id)
        self.popularity = None

    def addVideo(self, view, vid):
        self.view_list.append((view, vid))

    def getPopularity(self):
        if self.popularity:
            return self.popularity
        self.popularity = sum([ x[0] for x in self.view_list])
        return self.popularity

    def getTopVideoWithName(self):
        # sort by view, negative so views are big to small, and then ids are lexicographical order
        view_list = sorted(self.view_list, key=lambda x: (-x[0], x[1]))
        return [self.name, view_list[0][1]]


class SolutionImproved1:
    def mostPopularCreator(self, creators: List[str], ids: List[str], views: List[int]) -> List[List[str]]:
        '''
        popularity = sum (all views on all video)
        Creator:
            name
            view_list
            popularity

        Time : O(n)
        Space: O(n)
        '''
        people = {} # name -> creator

        for i in range(len(creators)):
            name = creators[i]
            vid = ids[i]
            v = views[i]
            person = people.get(name, Creator(name))
            person.addVideo(v, vid)
            people[name] = person

        # sort by popularity,
        sorted_people = sorted(people.items(), key=lambda x: x[1].getPopularity(), reverse=True)
        max_pop = sorted_people[0][1].getPopularity()

        # for only the top popularity, write the name and id to answer
        result = []
        for person in sorted_people:
            if person[1].getPopularity() != max_pop:
                break
            result.append(person[1].getTopVideoWithName())

        return result







```


Title: Leetcode 2423. Remove Letter To Equalize Frequency
Slug: leetcode_2423_remove-letter-to-equalize-frequency
Status: published
Date: 2022-11-11
Category: Leetcode
Tags: hash-map-count
Author: Zeph

Question Link : [https://leetcode.com/problems/remove-letter-to-equalize-frequency/](https://leetcode.com/problems/remove-letter-to-equalize-frequency/)

Difficulty: Easy

### Question
You are given a 0-indexed string word, consisting of lowercase English letters. You need to select one index and remove the letter at that index from word so that the frequency of every letter present in word is equal.
Return true if it is possible to remove one letter so that the frequency of all letters in word are equal, and false otherwise.
Note:

The frequency of a letter x is the number of times it occurs in the string.
You must remove exactly one letter and cannot chose to do nothing.

 
Example 1:

Input: word = "abcc"
Output: true
Explanation: Select index 3 and delete it: word becomes "abc" and each character has a frequency of 1.

Example 2:

Input: word = "aazz"
Output: false
Explanation: We must delete a character, so either the frequency of "a" is 1 and the frequency of "z" is 2, or vice versa. It is impossible to make all present letters have equal frequency.

 
Constraints:

2 <= word.length <= 100
word consists of lowercase English letters only.

### Solution

First return True we would need to remove a char and check if all ther others chars are of equal counts, to do this we can use a hash map as a counter, and then loop through all possible chars, remove, and check if the condition is satisfied. 


### Code
```python
'''
Leetcode 2423. Remove Letter To Equalize Frequency
Question Link : https://leetcode.com/problems/remove-letter-to-equalize-frequency/
Solution Link : https://tofucode.com/posts/leetcode_2423_remove-letter-to-equalize-frequency.html
'''

class Solution:
    def equalFrequency(self, word: str) -> bool:
        '''
        go through and map char -> count
        When removing any char, everything that's left has equal frequency/count
        So in next for loop, we go through all possible chars:
            1. remove
            2. check if all other counts are the same (return True if it is)
            3. add back 1 if not and keep going

        counter # char -> count
        a: 1
        b: 1
        c: 2

        Time : O(n)
        Space: O(n)
        '''
        counter = {} # char -> count

        for c in word:
            counter[c] = counter.get(c, 0) + 1

        candidates = set([c for c in word])
        for c in candidates:
            counter[c] -= 1
            if counter[c] == 0:
                counter.pop(c)

            # check all other counts are the same with a set
            if len(set(counter.values())) == 1:
                return True

            counter[c] = counter.get(c, 0) + 1
        return False


class SolutionNope1:
    def equalFrequency(self, word: str) -> bool:
        '''
        Here we try to approach this by getting all the different frequencies
        Assumed that the True answer has only 2 frequencies and calculate the relationship there.
        There too many edges cases to consider, and this doesn't work.
        eg should be True:

        "abcc"
        "bac"
        "abbcc"
        "zz"

        Time : O(n)
        Space: O(n)
        '''
        counts = {} # char -> count

        for c in word:
            counts[c] = counts.get(c, 0) + 1

        freq = {} # count -> count of count
        for _char, count in counts.items():
            freq[count] = freq.get(count, 0) + 1

         # case "bac", but not "aazz"
        if len(freq) == 1:
            [k] = freq.keys()
            return k == 1

        # otherwise should have 2 freqences
        if len(freq) != 2:
            return False

        # get the 2 counts, with a as the bigger one
        [a, b] = freq.keys()
        a, b = max(a, b), min(a, b)

        return a - 1 == b and freq[a] == 1

```


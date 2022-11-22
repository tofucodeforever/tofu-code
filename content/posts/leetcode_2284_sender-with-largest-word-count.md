Title: Leetcode 2284. Sender With Largest Word Count
Slug: leetcode_2284_sender-with-largest-word-count
Status: published
Date: 2022-06-15
Category: Leetcode
Tags: hash-map-count
Author: Zeph

Question Link : [https://leetcode.com/problems/sender-with-largest-word-count/](https://leetcode.com/problems/sender-with-largest-word-count/)

Difficulty: Medium

### Question
You have a chat log of n messages. You are given two string arrays messages and senders where messages[i] is a message sent by senders[i].
A message is list of words that are separated by a single space with no leading or trailing spaces. The word count of a sender is the total number of words sent by the sender. Note that a sender may send more than one message.
Return the sender with the largest word count. If there is more than one sender with the largest word count, return the one with the lexicographically largest name.
Note:

Uppercase letters come before lowercase letters in lexicographical order.
"Alice" and "alice" are distinct.

 
Example 1:

Input: messages = ["Hello userTwooo","Hi userThree","Wonderful day Alice","Nice day userThree"], senders = ["Alice","userTwo","userThree","Alice"]
Output: "Alice"
Explanation: Alice sends a total of 2 + 3 = 5 words.
userTwo sends a total of 2 words.
userThree sends a total of 3 words.
Since Alice has the largest word count, we return "Alice".

Example 2:

Input: messages = ["How is leetcode for everyone","Leetcode is useful for practice"], senders = ["Bob","Charlie"]
Output: "Charlie"
Explanation: Bob sends a total of 5 words.
Charlie sends a total of 5 words.
Since there is a tie for the largest word count, we return the sender with the lexicographically larger name, Charlie.
 
Constraints:

n == messages.length == senders.length
1 <= n <= 104
1 <= messages[i].length <= 100
1 <= senders[i].length <= 10
messages[i] consists of uppercase and lowercase English letters and ' '.
All the words in messages[i] are separated by a single space.
messages[i] does not have leading or trailing spaces.
senders[i] consists of uppercase and lowercase English letters only.

### Solution

Use a hashmap to count for each person, than go through the map to find the max


### Code
```python
'''
Leetcode 2284. Sender With Largest Word Count
Question Link : https://leetcode.com/problems/sender-with-largest-word-count/
Solution Link : https://tofucode.com/posts/leetcode_2284_sender-with-largest-word-count.html
'''

class Solution:
    def largestWordCount(self, messages: List[str], senders: List[str]) -> str:
        '''
        messages = ["Hello userTwooo","Hi userThree","Wonderful day Alice","Nice day userThree"]
        senders = ["Alice","userTwo","userThree","Alice"]

        {} # sender -> message count
        loop through map to find largest sender with max count

        Time:  O(n)
        Space: O(n)
        '''
        counts = {} # sender -> message count

        for i in range(len(messages)):
            message = messages[i]
            sender = senders[i]
            counts[sender] = counts.get(sender, 0) + self.countWords(message)

        result = ""
        max_count = 0

        for sender, count in counts.items():
            if count > max_count or (count == max_count and sender > result):
                result = sender
                max_count = count

        return result

    def countWords(self, message):
        return len(message.split(' '))
```


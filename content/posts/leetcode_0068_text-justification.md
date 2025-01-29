Title: Leetcode 0068. Text Justification
Slug: leetcode_0068_text-justification
Status: published
Date: 2025-01-28
Category: Leetcode
Tags: string, simulation
Author: Zeph

Question Link : [https://leetcode.com/problems/text-justification/](https://leetcode.com/problems/text-justification/)

Difficulty: Hard

Premium: False

### Question
Given an array of strings words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified.
You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ' ' when necessary so that each line has exactly maxWidth characters.
Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line does not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.
For the last line of text, it should be left-justified, and no extra space is inserted between words.
Note:

A word is defined as a character sequence consisting of non-space characters only.
Each word's length is guaranteed to be greater than 0 and not exceed maxWidth.
The input array words contains at least one word.

 
Example 1:

Input: words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16
Output:
[
   "This    is    an",
   "example  of text",
   "justification.  "
]
Example 2:

Input: words = ["What","must","be","acknowledgment","shall","be"], maxWidth = 16
Output:
[
  "What   must   be",
  "acknowledgment  ",
  "shall be        "
]
Explanation: Note that the last line is "shall be    " instead of "shall     be", because the last line must be left-justified instead of fully-justified.
Note that the second line is also left-justified because it contains only one word.
Example 3:

Input: words = ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"], maxWidth = 20
Output:
[
  "Science  is  what we",
  "understand      well",
  "enough to explain to",
  "a  computer.  Art is",
  "everything  else  we",
  "do                  "
]
 
Constraints:

1 <= words.length <= 300
1 <= words[i].length <= 20
words[i] consists of only English letters and symbols.
1 <= maxWidth <= 100
words[i].length <= maxWidth

### Solution

Mostly string processing. Two edge casees to focus on: 1. if a word takes up the whole line 2. the last line being left justified

### Code
```python
'''
Leetcode 0068. Text Justification
Question Link : https://leetcode.com/problems/text-justification/
Solution Link : https://tofucode.com/posts/leetcode_0068_text-justification.html
'''

from typing import List

class Solution:
    def fullJustify(self, words: List[str], maxWidth: int) -> List[str]:
        """
        word1  word2 word3
        at least one space between
        if have more space - go to the left

        word1+space+word2+space
            greedy take a word + a space
                current:
                    current word length: len(word)
                    all word length: current_length
                    at least one space for current line: len(line)
            when can't take any more words, distribute remaining space from front
        except last line: is left justified

        Time : O(n)
        Space: O(n)
        """
        result = []
        line = []  # Words in the current line
        current_length = 0  # current length of all words in line(no spaces)

        for word in words:
            if current_length + len(word) + len(line) <= maxWidth:
                # keep going
                line.append(word)
                current_length += len(word)
            else:
                # end line
                remaining_spaces = maxWidth - current_length
                if len(line) == 1:
                    # Handle: single word as its own line
                    result.append(line[0] + ' ' * remaining_spaces)
                else:
                    space_count = len(line) - 1
                    spaces_between_words = remaining_spaces // space_count
                    extra_spaces = remaining_spaces % space_count

                    build_line = ''
                    for i in range(len(line)):
                        build_line += line[i]
                        if i != len(line) - 1:
                             build_line += ' ' * spaces_between_words
                        if i < extra_spaces:
                             build_line += ' '
                    result.append(build_line)

                # Reset with current word
                line = [word]
                current_length = len(word)


        # Handle: left align last line
        last_line = ' '.join(line)
        last_line += ' ' * (maxWidth - len(last_line))
        result.append(last_line)

        return result

```


Title: Leetcode 0273. Integer to English Words
Slug: leetcode_0273_integer-to-english-words
Status: published
Date: 2025-01-16
Category: Leetcode
Tags: string, recursion
Author: Zeph

Question Link : [https://leetcode.com/problems/integer-to-english-words/](https://leetcode.com/problems/integer-to-english-words/)

Difficulty: Hard

Premium: False

### Question
Convert a non-negative integer num to its English words representation.
 
Example 1:

Input: num = 123
Output: "One Hundred Twenty Three"

Example 2:

Input: num = 12345
Output: "Twelve Thousand Three Hundred Forty Five"

Example 3:

Input: num = 1234567
Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"

 
Constraints:

0 <= num <= 231 - 1

### Solution

The cleanest solution to write is with recursion. Trying to process the string iteratively also works with extra care to check for edge cases.

### Code
```python
'''
Leetcode 0273. Integer to English Words
Question Link : https://leetcode.com/problems/integer-to-english-words/
Solution Link : https://tofucode.com/posts/leetcode_0273_integer-to-english-words.html
'''
class Solution:
    def numberToWords(self, num: int) -> str:
        '''
        Use recursion, note the strip() for when the last one is an empty string

        Time : O(log n)
        Space: O(log n)
        '''
        if num == 0:
            return 'Zero'
        self.BILLION = 1000000000
        self.MILLION = 1000000
        self.THOUSAND = 1000
        self.HUNDRED = 100
        self.TWENTY = 20

        self.tens = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"]
        self.ones = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen",  "Sixteen", "Seventeen", "Eighteen", "Nineteen"]

        return self.translate(num).strip()

    def translate(self, num):

        if num >= self.BILLION:
            return self.translate(num // self.BILLION) + ' Billion ' + self.translate(num % self.BILLION)
        elif num >= self.MILLION:
            return self.translate(num // self.MILLION) + ' Million ' + self.translate(num % self.MILLION)
        elif num >= self.THOUSAND:
            return self.translate(num // self.THOUSAND) + ' Thousand ' + self.translate(num % self.THOUSAND)
        elif num >= self.HUNDRED:
            return (self.translate(num // self.HUNDRED) + ' Hundred ' + self.translate(num % self.HUNDRED)).strip()
        elif num >= self.TWENTY:
            return (self.tens[num // 10] + " " + self.translate(num % 10)).strip()

        return self.ones[num]

class SolutionAlternative1:
    def numberToWords(self, num: int) -> str:
        """
        1 234 567
        One Million
        Two Hundred Thirty Four Thousand
        Five Hundred Sixty Seven

        break into parts of 3:
        567
        234
        1
        translate eachand stick together


        Time : O(d) # number of digits in num
        Space: O(d)
        """
        if num == 0:
            return "Zero"

        self.suffix = ['', 'Thousand', 'Million', 'Billion', 'Trillion']
        self.num_word_map = self.getNumMap()

        num_str = str(num)
        parts = []
        for i in range(len(num_str), 0, -3):
            parts.append(num_str[max(i-3, 0): i])

        result = []
        for i in range(len(parts)):
            num = self.getNumberWords(parts[i])
            suf = self.suffix[i]
            r = ''
            if num:
                r += num
            if num and suf:
                r += ' ' + suf
            result.append(r)
        result = result[::-1]

        return ' '.join([x for x in result if x])

    def getNumberWords(self, s):
        result = []
        if int(s) == 0:
            return ''

        if len(s) == 1:
            result.append(self.num_word_map[s])
        elif len(s) == 2:
            result.extend(self.translateTens(s))
        else:
            pre_hundred = self.num_word_map[s[0]]
            result.append(pre_hundred)
            if pre_hundred:
                result.append('Hundred')
            result.extend(self.translateTens(s[1:]))

        return ' '.join([x for x in result if x])

    def translateTens(self, s):
        result = []
        num = int(s)

        if num <= 20:
            result.append(self.num_word_map[str(num)])
        else:
            one = num % 10
            result.append(self.num_word_map[str(num-one)])
            result.append(self.num_word_map[str(one)])
        return result


    def getNumMap(self):
        return {
            "0": '', "1": 'One', "2": 'Two', "3": 'Three', "4": 'Four', "5": 'Five',
            "6": 'Six', "7": 'Seven', "8": 'Eight', "9": 'Nine',
            "10": 'Ten', "11": 'Eleven', "12": 'Twelve', "13": 'Thirteen',
            "14": 'Fourteen', "15": 'Fifteen', "16": 'Sixteen', "17": 'Seventeen',
            "18": 'Eighteen', "19": 'Nineteen',
            "20": 'Twenty', "30": 'Thirty', "40": 'Forty', "50": 'Fifty',
            "60": 'Sixty', "70": 'Seventy', "80": 'Eighty', "90": 'Ninety'
    }
```


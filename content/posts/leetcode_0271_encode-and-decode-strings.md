Title: Leetcode 0271. Encode and Decode Strings
Slug: leetcode_0271_encode-and-decode-strings
Status: published
Date: 2025-01-15
Category: Leetcode Premium
Tags: string
Author: Zeph

Question Link : [https://leetcode.com/problems/encode-and-decode-strings/](https://leetcode.com/problems/encode-and-decode-strings/)

Difficulty: Medium

Premium: True

### Question
Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.
Machine 1 (sender) has the function:

string encode(vector<string> strs) {
  // ... your code
  return encoded_string;
}
Machine 2 (receiver) has the function:


vector<string> decode(string s) {
  //... your code
  return strs;
}

So Machine 1 does:

string encoded_string = encode(strs);

and Machine 2 does:

vector<string> strs2 = decode(encoded_string);

strs2 in Machine 2 should be the same as strs in Machine 1.
Implement the encode and decode methods.
You are not allowed to solve the problem using any serialize methods (such as eval).
 
Example 1:

Input: dummy_input = ["Hello","World"]
Output: ["Hello","World"]
Explanation:
Machine 1:
Codec encoder = new Codec();
String msg = encoder.encode(strs);
Machine 1 ---msg---> Machine 2

Machine 2:
Codec decoder = new Codec();
String[] strs = decoder.decode(msg);

Example 2:

Input: dummy_input = [""]
Output: [""]

 
Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] contains any possible characters out of 256 valid ASCII characters.

 
Follow up: Could you write a generalized algorithm to work on any possible set of characters?

### Solution

The most easy solution is to use a single delimiter that is not used in the input string. Otherwise we need to write extra into into the encoded string that can help with decoding - with this string length comes up as a piece of useful info to add.


### Code
```python
'''
Leetcode 0271. Encode and Decode Strings
Question Link : https://leetcode.com/problems/encode-and-decode-strings/
Solution Link : https://tofucode.com/posts/leetcode_0271_encode-and-decode-strings.html
'''
class Codec:
    """
    pass along length info at the start of the string
    ["Hello","World"]
    5,5#HelloWorld

    Time : O(n)
    Space: O(n)
    """

    def encode(self, strs: List[str]) -> str:
        """Encodes a list of strings to a single string.
        """
        all_length = [str(len(s)) for s in strs]
        return ','.join(all_length)+ '#' + ''.join(strs)

    def decode(self, s: str) -> List[str]:
        """Decodes a single string to a list of strings.
        """
        idx = s.find('#')
        length_info = s[:idx].split(',')
        string_info = s[idx+1:]

        result = []
        i = 0
        for length_str in length_info:
            l = int(length_str)
            result.append(string_info[i:i+l])
            i += l

        return result




# Your Codec object will be instantiated and called as such:
# codec = Codec()
# codec.decode(codec.encode(strs))
```


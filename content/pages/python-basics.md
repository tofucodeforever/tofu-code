Title: Python Basics
Date: 2022-06-15 22:07:43
Status: published
Author: Zeph



#### essentials
* Math
```
import math

#  when need a max min value: note that this returns floats
math.inf
-math.inf

# log
math.log()

# random integer N such that a <= N <= b.
random.randint(a, b)

# random item from a list
random.choice(l)

# randomly shuffle a list of nums in place
random.shuffle(nums)

```
* Exceptions
```
try:
    int(i)
except Exception as e:
    print(e)
```
* loops
```
# you can't modify the i variable inside a for loop. eg. won't work:
for i in range(6):
    i -= 1

```
* lambda
```
x = lambda a, b, c : a + b + c
print(x(5, 6, 2))

# filter
final_list = list(filter(lambda x: (x%2 != 0) , li)) # filters out to get all odd nums in li

# map
final_list = list(map(lambda x: x*2 , li)) # applie *2 to all the elements of the list

# reduce
from functools import reduce
sum = reduce((lambda x, y: x + y), li) # sum of the list

```

* Class

```
class Dog:

	all_tricks = [] # class instance shared by all dogs

    def __init__(self, name):
        self.name = name
        self.tricks = []    # creates a new empty list for each dog

    def add_trick(self, trick):
        self.tricks.append(trick)
```

* Swapping
```
a, b, c = d, e, f
# note that order matters curr has to be last:
# eg. when reversing a list in leetcode/leet_0206_reverse-linked-list.py
# curr.next, prev, curr = prev, curr, curr.next

```
#### data structures
* Time: https://wiki.python.org/moin/TimeComplexity

* String
   * Strings are immutable

```python
# initialize
t = "string"
t = 'string'

# Operators
t + t
t * 3

# methods
t.isdigit() # if made of digits only
t.isalpha() # if made of alphabetics only
t.isalnum() # if made of digits and alphabetics only
t.isspace() # if made of spaces only

t.isupper() # if made of upper case only
t.upper() # returns an uppercased string
t.islower() # if made of lower case only
t.lower() # returns an lowercased string
t.swapcase() # toggle between lower and upper case for each char

# length
t.count("t") # count the occurance of the character t
len(t) #the length of the string

# aligning
t.center(20) # center the string in 20 chars
t.ljust(20) # left align in 20 chars
t.rjust(20) # right align in 20 chars

# strip
t.strip() # strip trailing whitespaces
t.lstrip()
t.rstrip()

# replace
t.replace("a", "b") # replace all occurances of a to b
t.replace("a", "b", 2) # replace only the first 2

# split
t.plit("a") # returns a list of strings split by the seperator

# find
t.startswith("a") # if the string starts with
t.endswith("a") # is the string ends with
t.find("a") # returns the index of the first occurance
t.count('a') # returns the occurance of this string

# join
' '.join(["this", "is", "it"])

# reverse a string
str[::-1] # [ <first element to include> : <first element to exclude> : <step> ]
''.join(reversed(str))

# casting a binary string to int
int('110', 2)

# zfill with zeros
txt = "10"
x = txt.zfill(4) # 0010

# int to binary string - cut the first 2 chars
bin(3)[2:]


```

* List
    * same as arrays in java

```python
# initilizing
l = [1, 2, 3]
l = [1] * 4 # create a list of four 1s

# insert and delete
l.append(4) # appends one element to the end of the list
l.extend([4, 5]) # This does not return another, but adds a list to l in place [Plus One](leetcode/leet_0066_plus-one.py)

l += [4, 5] # extends the list
l.insert(2, 99) # insert the element 99 before the given index 2
l.remove(99) # removes the first occorance of the given element
l.pop(0) # pop the first element of the list
l.pop() # pop the last element of the list
l.clear() # clears the whole list

# find
l.index(1) # return the index of the given element: 0
l.count(2) # count the number of the element

# sort
l.sort() # in place sorting
l.sort(reverse=True) # reverse sorting
l.reverse() # reverse the list in place
l[::-1] # reverse slice to return a reversed list

sorted(l, key=lambda x: len(x))# sort by length of string

# which is: [ <first element to include> : <first element to exclude> : <step> ]
# so is actually l[n-1:-1:-1]
sorted(l) returns a sorted list of l

# sublist
l[1:] # sublist from including index 1 to the end [2, 3]
l[:1] # sublist from the begining to and not include index 1 [1]
l[1:-1] # sublist from including index 1 to the including 1 from the end [2]

# list comprehension
[ x * 2 for x in l] # list processing  [2, 4, 6]
[ x for x in l if x < 2 ] # list filtering [1]

# copy
l2 = l[:] # shallow copy
import copy
l2 = copy.deepcopy(l) # deep copy
l2 = l # reference only
l2[:] = l1[:] # by value

# insert into a sorted list
import bisect
bisext.insort(l, 0) # inserts the element 0 into the list

# enumerate both the index and the iterable
for i, num in enumerate(nums):

# zip : zips togeter multiple list by the element
[sum(x) for x in zip(l1, l2)] # sums the 2 lists l1 and l2 element wise

# initilizing a 2d list
dp = [[0] * m for x in range(n)]
# dp = [[0] * m] * n  # NOPE: This makes a list with five references to the same list

```

* Tuple
    * Better way of mixing types in a collection
    * Tuples are faster and consume less memory than list
    * It is immutable
    * Can be used as keys on a dictionary

```python
# initilize
t = (1, 2, "a")
t = (1,) # tuple with a single element
t = (1,) * 3 # a tuple of five 1s

# manipulation
t += (9,) # append 9 to t
t[2:] # 2 index including to the end

# indexing
t.count(1) # count the number of occurances of 1
t.index(1) # find the first index of 1

# unpacking
a, b, c = t # can also return a tuple in a method and unpack to variables

# copy
t2 = t # tuple is immutabe and this creates a copy
# If a value within a tuple is mutable, then you can change it
t = (1, [9, 8]) # you can change t[1][0]

```

* Dictionary
    * Are not sorted
    * Can not have duplicate elements

```python
# initilize
d = {"a": 1, "b": 2}
a = {}.fromkeys(["a", "b"]) # creat a empty dictionary of None with the keys

# accessing
d.keys()
d.values()
d.items() # a list of tuple (key, value)
d["a"]
d.get("a")
d.get("a", -1) # get -1 as a default value
"a" in d # returns True or False

# manipulation
d.pop("a") # pop also removes the element
d.clear() # clear the dictionary
del d["a"] # deletes just one element
d2.update(d) # add all key values pairs of d to d2 , duplicated keys will be overwritten

# iterating
for key, value in d.items(): # iterate all key value

# counting items in list
counts = dict()
for i in items:
      counts[i] = counts.get(i, 0) + 1

from collections import Counter
counts = Counter(items)

```

* Set
    * unique elements
    * ordering is arbitrary
    * frozenset() is an immutable version of set

```python
# initilize
a = set([1, 2, 3])
b = set([3, 4, 5])

# add
a.add(4)

# union
a | b # union

# intersection
a & b
a.intersection(b)

# subset
a < b
a.issubset(b)
a.issuperset(b)

# difference
a - b
a.differnece(b)

# symetric difference
a ^ b
a.symmetric_difference(b)

# copy
c = a.copy()

```
* heap
    * priority queue

```
# creating it
import heapq

l = [5, 7, 9, 1, 3]
heapq.heapify(l) # min heap
heapq._heapify_max(l) #  max heap

# pushing
heapq.heappush(l,4)

# pop
heapq.heappop(l) # min heap
heapq._heappop_max(l) # max heap
# access
heapq.nlargest(3, l) # returns a list of the 3 largest numbers
heapq.nsmallest(3, l) # returns a list of the 3 smallest numbers

# given counts which is a mup of num to counts: get the k most frequent numbers
heapq.nlargest(k, counts.keys(), key=counts.get)

```

* PriorityQueue
    * this is implemented as a wrapper around heap
    * this is thread safe
    * easier sytax
```
from queue import PriorityQueue
q = PriorityQueue()
q.put(1)
q.put(4)
q.put(2)
next_item = q.get()
q.qsize() # get size

# if want a reverse one as a max heap, use a tuple with the first one as the key: or use neg
q.put((-n ,n))

# peek:
q.queue[0]

```

#### collections
* Counter
* defaultdict
* OrderedDict
* deque
* ChainMap
* namedtuple()

* Counter
    * give it a list and it will count occurances of each element and give dictionary of key => occurances
```python
from collections import Counter
d = Counter([1,1,1,2]) # Counter({1: 3, 2: 1})
d[1] # 3

# get the original list:
list(b.elements()) # [1,1,1,2]

# sort the counter dictionary and give a sorted list of key-value
d.most_common() # [(1, 3), (2, 1)]

# subtract another dictionary: it will match the keys and subtract the values
d.subtract(d2)

```

* defaultdict
    * sets a default return value instead of throwing a `KeyError` when the key does not exist
    * easier to use d.get('two', 0) instead
```python
from collections import defaultdict
nums = defaultdict(int)
nums['two'] = 2
print(nums['three']) # 0

```

* OrderedDict
    * a dictionary where keys maintain the order in which they are inserted

```python
from collections import OrderedDict
d = OrderedDict()
d['a'] = 1
d['b'] = 2
d['c'] = 3
print(d) # OrderedDict([('a', 1), ('b', 2), ('c', 3)])

```

* deque
    * list that append pop from either end in O(1)
    * python list pop(0) would otherwise be O(n)

```python
from collections import deque
list = ["a","b","c"]
dq = deque(list)
print(dq) # deque(['a', 'b', 'c'])

# append
dq.append("d")
dq.appendleft("z")

# pop
dq.pop()
dq.popleft()

# other
dq.clear()
dq.count('a') # counts the number of occurances: 1

```

* ChainMap
    * combine multiple dictionaries to be used as a single unit
```python
from collections import ChainMap
dict1 = { 'a' : 1, 'b' : 2 }
dict2 = { 'c' : 3, 'b' : 4 }
chain_map = ChainMap(dict1, dict2)
print(chain_map.maps) # [{'b': 2, 'a': 1}, {'c': 3, 'b': 4}]

print (list(chain_map.keys())) # ['b', 'a', 'c']
print (list(chain_map.values())) # [2, 1, 3]

chain_map.new_child(dict3) # add another dictionary

```

* namedtuple()
    * gives name to each object in tuple
```python
from collections import namedtuple
Student = namedtuple('Student', 'fname, lname, age')
s1 = Student('John', 'Clarke', '13')
print(s1.fname) # Student(fname='John', lname='Clarke', age='13')

s2 = Student._make(['Adam','joe','18']) # creates new Student tuples
s2 = s1._replace(age='14') # changes a field of the tuple: tuples are immutable so this returns new instance

```


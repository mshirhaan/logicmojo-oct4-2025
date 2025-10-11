# Data Structures & Algorithms
## Lecture Notes: Time Complexity & Binary Search

---

## Table of Contents
1. Introduction to Time Complexity
2. Understanding Big O Notation
3. Common Time Complexities
4. Binary Search Algorithm
5. Space Complexity Fundamentals
6. Computer Memory & Arrays
7. Quick Revision Sheet

---

## 1. Introduction to Time Complexity

### What is Time Complexity?

**Time Complexity** is a computational concept used to describe the amount of time an algorithm takes to run as a function of the input size. It helps us understand how efficient our code is and how it will perform with larger datasets.

### Why Can't We Use Actual Runtime?

Many beginners think that measuring the actual execution time (in seconds or milliseconds) is sufficient to determine algorithm efficiency. However, this approach has critical flaws:

- **Hardware Dependency**: The same code runs at different speeds on different machines
- **System Load**: Background processes affect execution time
- **Language & Compiler**: Different programming languages have different execution speeds
- **Inconsistent Results**: The same code may take different times on different runs

### The Solution: Counting Operations

Instead of measuring actual time, we **count the number of operations** (or steps) an algorithm performs relative to the input size.

**Key Principle**: We focus on how the number of operations grows as the input size increases, not the exact number of operations.

---

## 2. Understanding Big O Notation

### What is Big O?

**Big O Notation** is a mathematical notation used to describe the upper bound (worst-case scenario) of an algorithm's time complexity. It describes how the runtime grows relative to the input size.

**Notation Format**: O(f(n))
- O = "Order of"
- f(n) = A function of input size n

### Rules for Calculating Big O

1. **Drop Constants**: O(2n) becomes O(n)
2. **Drop Lower Order Terms**: O(n² + n) becomes O(n²)
3. **Focus on Dominant Term**: The term that grows fastest as n increases
4. **Worst Case Analysis**: We analyze the worst possible scenario

### Real-World Analogy

Think of Big O like estimating travel time:
- **O(1)** - Taking an elevator: Time is constant regardless of which floor
- **O(n)** - Climbing stairs: Time increases linearly with number of floors
- **O(n²)** - Checking every pair of rooms on n floors: Time grows quadratically

---

## 3. Common Time Complexities

### O(1) - Constant Time

**Definition**: The algorithm takes the same amount of time regardless of input size.

**Example**:
```javascript
function getFirstElement(arr) {
    return arr[0];  // Always takes 1 operation
}
```

**Characteristics**:
- Most efficient time complexity
- No loops or recursion
- Direct access operations (array indexing, hash table lookup)

---

### O(n) - Linear Time

**Definition**: The time grows linearly with input size. If input doubles, time doubles.

**Example**:
```javascript
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];  // n operations
    }
    return sum;
}
```

**Characteristics**:
- Single loop through data
- Each element processed once
- Common in searching unsorted arrays

---

### O(n²) - Quadratic Time

**Definition**: Time grows quadratically with input size. If input doubles, time quadruples.

**Example**:
```javascript
function printPairs(arr) {
    for (let i = 0; i < arr.length; i++) {        // n times
        for (let j = 0; j < arr.length; j++) {    // n times for each i
            console.log(arr[i], arr[j]);
        }
    }
}
// Total operations: n × n = n²
```

**Characteristics**:
- Nested loops (loop inside a loop)
- Common in bubble sort, selection sort
- Becomes very slow for large inputs

---

### O(n³) - Cubic Time

**Definition**: Time grows cubically with input size. Three nested loops.

**Example**:
```javascript
function tripleLoop(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            for (let k = 0; k < arr.length; k++) {
                // Some operation
            }
        }
    }
}
// Total operations: n × n × n = n³
```

---

### O(log n) - Logarithmic Time

**Definition**: Time grows logarithmically with input size. The algorithm divides the problem in half with each step.

**Key Concept**: Logarithm base 2 (log₂) represents how many times you can divide n by 2 until you reach 1.

**Examples of log₂(n)**:
- log₂(8) = 3 (because 2³ = 8)
- log₂(16) = 4 (because 2⁴ = 16)
- log₂(1024) = 10 (because 2¹⁰ = 1024)

**Characteristics**:
- Extremely efficient for large datasets
- Binary search is the classic example
- Each step eliminates half of the remaining data

**Comparison**:
```
Input Size (n)    Linear O(n)    Logarithmic O(log n)
10                10              ~3
100               100             ~7
1,000             1,000           ~10
1,000,000         1,000,000       ~20
```

---

### O(n log n) - Linearithmic Time

**Definition**: Combination of linear and logarithmic growth.

**Characteristics**:
- Common in efficient sorting algorithms (Merge Sort, Quick Sort)
- More efficient than O(n²) but slower than O(n)

---

### Time Complexity Hierarchy (Best to Worst)

```
O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(n³) < O(2ⁿ) < O(n!)
```

**Visual Growth Comparison**:
```
As n increases →

O(1):      ————————————————  (Flat line)
O(log n):  ————————          (Slow growth)
O(n):      ————              (Linear growth)
O(n²):     —                 (Steep growth)
```

---

## 4. Binary Search Algorithm

### Introduction

**Binary Search** is a highly efficient searching algorithm that works on **sorted arrays**. It repeatedly divides the search space in half, making it much faster than linear search for large datasets.

**Prerequisites**: The array MUST be sorted for binary search to work correctly.

---

### How Binary Search Works

**Core Principle**: Compare the target value with the middle element and eliminate half of the remaining elements in each step.

**Step-by-Step Process**:

1. Find the middle element of the array
2. Compare target with middle element
3. Three possible cases:
   - **Target = Middle**: Element found! Return index
   - **Target < Middle**: Search in left half
   - **Target > Middle**: Search in right half
4. Repeat until element is found or search space is exhausted

---

### Binary Search Visual Example

**Array**: [2, 5, 8, 12, 16, 23, 38, 45, 56, 67, 78]  
**Target**: 23

```
Step 1: Check middle (index 5)
[2, 5, 8, 12, 16, |23|, 38, 45, 56, 67, 78]
        left       mid         right
Middle element = 23 = Target ✓ FOUND!

Example 2 - Target: 45

Step 1: Check middle
[2, 5, 8, 12, 16, |23|, 38, 45, 56, 67, 78]
23 < 45, so search right half

Step 2: Check middle of right half
[38, |45|, 56, 67, 78]
45 = Target ✓ FOUND!

Example 3 - Target: 8

Step 1: Check middle
[2, 5, 8, 12, 16, |23|, 38, 45, 56, 67, 78]
8 < 23, so search left half

Step 2: Check middle of left half
[2, 5, |8|, 12, 16]
8 = Target ✓ FOUND!
```

---

### Binary Search Implementation (Iterative)

```javascript
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        // Calculate middle index
        let mid = Math.floor((left + right) / 2);
        
        // Check if target is at mid
        if (arr[mid] === target) {
            return mid;  // Element found
        }
        
        // If target is greater, ignore left half
        if (arr[mid] < target) {
            left = mid + 1;
        }
        // If target is smaller, ignore right half
        else {
            right = mid - 1;
        }
    }
    
    return -1;  // Element not found
}

// Example usage:
const sortedArray = [2, 5, 8, 12, 16, 23, 38, 45, 56, 67, 78];
console.log(binarySearch(sortedArray, 23));  // Output: 5
console.log(binarySearch(sortedArray, 100)); // Output: -1
```

---

### Binary Search Implementation (Recursive)

```javascript
function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
    // Base case: search space exhausted
    if (left > right) {
        return -1;
    }
    
    // Calculate middle
    let mid = Math.floor((left + right) / 2);
    
    // Target found
    if (arr[mid] === target) {
        return mid;
    }
    
    // Search right half
    if (arr[mid] < target) {
        return binarySearchRecursive(arr, target, mid + 1, right);
    }
    
    // Search left half
    return binarySearchRecursive(arr, target, left, mid - 1);
}
```

---

### Time Complexity Analysis of Binary Search

**Best Case**: O(1)
- Target is at the middle position in first comparison

**Average Case**: O(log n)
- Target requires logarithmic number of comparisons

**Worst Case**: O(log n)
- Target is at the end or not present, requires maximum comparisons

**Why O(log n)?**

In each step, we eliminate half of the remaining elements:
- Array size: n
- After 1st step: n/2
- After 2nd step: n/4
- After 3rd step: n/8
- After k steps: n/2^k

We continue until n/2^k = 1, which means 2^k = n, therefore **k = log₂(n)**

**Example with n = 16**:
```
Step 0: 16 elements
Step 1: 8 elements (16/2)
Step 2: 4 elements (8/2)
Step 3: 2 elements (4/2)
Step 4: 1 element (2/2)

Total steps = 4 = log₂(16)
```

---

### Binary Search vs Linear Search

| Aspect | Linear Search | Binary Search |
|--------|--------------|---------------|
| **Time Complexity** | O(n) | O(log n) |
| **Precondition** | Any array | Must be sorted |
| **Best for** | Small/unsorted arrays | Large sorted arrays |
| **Example (n=1M)** | Up to 1M comparisons | ~20 comparisons |

---

### Important Notes About Binary Search

**✓ Advantages**:
- Extremely fast for large datasets
- Predictable performance
- Low number of comparisons

**✗ Limitations**:
- Array must be sorted (sorting takes O(n log n) time)
- Not efficient for small arrays (overhead not worth it)
- Requires random access (array structure, not linked list)

---

### When to Use Binary Search

**Use Binary Search When**:
- Data is sorted or can be sorted
- Dataset is large
- You need to perform multiple searches
- Memory allows array storage

**Avoid Binary Search When**:
- Data is unsorted and sorting is expensive
- Dataset is very small (linear search is simpler)
- Data structure doesn't support random access

---

### Iterative vs Recursive Binary Search

**Iterative Approach**:
- **Pros**: No risk of stack overflow, slightly faster
- **Cons**: More code to write

**Recursive Approach**:
- **Pros**: More elegant, easier to understand
- **Cons**: Risk of stack overflow for very large inputs, uses call stack space

**Stack Overflow Issue**: Each recursive call adds a frame to the call stack. For very large inputs, this can exceed stack size limits and cause a stack overflow error.

**Interview Tip**: Most interviewers prefer iterative solutions for production code due to stack overflow concerns.

---

## 5. Space Complexity Fundamentals

### What is Space Complexity?

**Space Complexity** measures the amount of memory an algorithm uses relative to the input size.

**Components of Space Complexity**:
1. **Fixed Space**: Variables, constants (independent of input size)
2. **Variable Space**: Data structures that grow with input size

---

### Common Space Complexities

**O(1) - Constant Space**:
```javascript
function sum(a, b) {
    let result = a + b;  // Only 1 variable
    return result;
}
// Space used does not depend on input size
```

**O(n) - Linear Space**:
```javascript
function createCopy(arr) {
    let copy = [];
    for (let i = 0; i < arr.length; i++) {
        copy.push(arr[i]);
    }
    return copy;  // New array of size n
}
// Space used grows linearly with input size
```

**O(n²) - Quadratic Space**:
```javascript
function create2DArray(n) {
    let matrix = [];
    for (let i = 0; i < n; i++) {
        matrix[i] = [];
        for (let j = 0; j < n; j++) {
            matrix[i][j] = 0;
        }
    }
    return matrix;  // n × n matrix
}
```

---

### Space-Time Tradeoff

**Definition**: Often, we can make an algorithm faster by using more memory, or use less memory by accepting slower execution.

**Example 1: Caching/Memoization**
```javascript
// Without caching - Less space, more time
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n-1) + fibonacci(n-2);  // O(2^n) time, O(n) space
}

// With caching - More space, less time
function fibonacciCached(n, cache = {}) {
    if (n <= 1) return n;
    if (cache[n]) return cache[n];
    
    cache[n] = fibonacciCached(n-1, cache) + fibonacciCached(n-2, cache);
    return cache[n];  // O(n) time, O(n) space
}
```

**Example 2: Two Pointers vs Hash Map**
```javascript
// Hash Map approach - O(n) space, O(n) time
function hasDuplicateHashMap(arr) {
    let seen = new Set();
    for (let num of arr) {
        if (seen.has(num)) return true;
        seen.add(num);
    }
    return false;
}

// Sorting approach - O(1) extra space, O(n log n) time
function hasDuplicateSorting(arr) {
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === arr[i+1]) return true;
    }
    return false;
}
```

**Real-World Application**: Websites cache frequently accessed data in memory (trading space for faster response times).

---

## 6. Computer Memory & Arrays

### Binary Number System

**Bit**: Smallest unit of data (0 or 1)
**Byte**: 8 bits

**Binary to Decimal Conversion**:
```
Binary: 1011
= 1×2³ + 0×2² + 1×2¹ + 1×2⁰
= 8 + 0 + 2 + 1
= 11 (decimal)

Binary: 10000000
= 1×2⁷
= 128 (decimal)
```

**Decimal to Binary Conversion**:
```
Decimal: 13

13 ÷ 2 = 6 remainder 1  ↓
6 ÷ 2 = 3 remainder 0   ↓
3 ÷ 2 = 1 remainder 1   ↓
1 ÷ 2 = 0 remainder 1   ↓

Binary: 1101 (read remainders bottom to top)
```

---

### Memory Storage

**How Data is Stored**:
- Everything in computers is stored in binary (0s and 1s)
- Each memory location has an address
- Different data types require different amounts of memory

**Common Data Type Sizes (Java)**:
- `int`: 4 bytes (32 bits)
- `long`: 8 bytes (64 bits)
- `char`: 2 bytes (16 bits)
- `boolean`: 1 byte (8 bits)

**Integer Range**:
- **Signed int** (4 bytes): -2,147,483,648 to 2,147,483,647
- **Explanation**: 2³² = 4,294,967,296 total values (split between positive and negative)

---

### Arrays in Memory

**Array Definition**: A collection of elements of the same type stored in contiguous memory locations.

**Key Characteristics**:
1. **Contiguous Memory**: Elements stored next to each other
2. **Same Type**: All elements are the same data type
3. **Fixed Size**: Size determined at creation (in most languages)
4. **Zero-Indexed**: First element at index 0

---

### Array Memory Layout

**Example**: Integer array with 5 elements

```
Memory Address:  1000   1004   1008   1012   1016
Array Values:    [10]   [20]   [30]   [40]   [50]
Array Index:      0      1      2      3      4

Each integer: 4 bytes
Address of arr[i] = Base Address + (i × Size of Element)
```

**Calculation Example**:
```
Base address: 1000
Find address of arr[3]:
Address = 1000 + (3 × 4) = 1000 + 12 = 1012 ✓
```

---

### Why Array Access is O(1)

**Constant Time Access**: Regardless of array size, accessing any element takes the same time because we use direct calculation:

```
Address = Base + (Index × Element_Size)
```

**No need to traverse** the array; we jump directly to the memory location.

**Example**:
```javascript
let arr = [10, 20, 30, 40, 50];

// All these operations take O(1) time:
let first = arr[0];    // Direct access
let middle = arr[2];   // Direct access
let last = arr[4];     // Direct access
```

**Contrast with Linked Lists**: Linked lists require traversal (O(n)) because elements are not contiguous in memory.

---

### Array Operations Complexity

| Operation | Time Complexity | Explanation |
|-----------|----------------|-------------|
| Access by index | O(1) | Direct calculation |
| Search (unsorted) | O(n) | Must check each element |
| Search (sorted) | O(log n) | Binary search |
| Insert at end | O(1) | If space available |
| Insert at beginning | O(n) | Must shift all elements |
| Delete at end | O(1) | Just remove last |
| Delete at beginning | O(n) | Must shift all elements |

---

### Detailed Array Operations Analysis

#### 1. Accessing Elements - O(1)

**Why O(1)?**
Array access is constant time because we can calculate the exact memory address using the formula:

```
Address = Base Address + (Index × Element Size)
```

**Example**:
```javascript
let arr = [10, 20, 30, 40, 50];

// All take exactly O(1) time - single calculation
console.log(arr[0]);    // Access first element
console.log(arr[2]);    // Access middle element  
console.log(arr[4]);    // Access last element
console.log(arr[999]);  // Even accessing non-existent index is O(1)
```

**No matter the array size** (100 elements or 1 million elements), accessing any element takes the same constant time.

---

#### 2. Adding at the End - O(1)

**Operation**: Append element to the last position

**Why O(1)?**
- We know the size of the array
- We know exactly where to add (at index = current size)
- No shifting of existing elements required

**Visual Example**:
```
Initial Array:
Index:    0    1    2    3
Value:  [10] [20] [30] [40]
Size = 4

Add 50 at end:
Step 1: Calculate position = size = 4
Step 2: arr[4] = 50

Result:
Index:    0    1    2    3    4
Value:  [10] [20] [30] [40] [50]

Operations performed: 1 (constant)
Time Complexity: O(1)
```

**Code Example**:
```javascript
let arr = [10, 20, 30, 40];
arr.push(50);  // O(1) operation

// Internally:
// 1. Check if space available
// 2. arr[arr.length] = 50
// 3. Increment size
// Total: 3 operations (constant)
```

---

#### 3. Removing from the End - O(1)

**Operation**: Delete the last element

**Why O(1)?**
- We know exactly where the last element is (at index = size - 1)
- No shifting required
- Simply decrease the size counter

**Visual Example**:
```
Initial Array:
Index:    0    1    2    3    4
Value:  [10] [20] [30] [40] [50]
Size = 5

Remove last element:
Step 1: Access arr[4] (last element)
Step 2: Mark as removed/decrease size

Result:
Index:    0    1    2    3
Value:  [10] [20] [30] [40]
Size = 4

Operations performed: 1 (constant)
Time Complexity: O(1)
```

**Code Example**:
```javascript
let arr = [10, 20, 30, 40, 50];
let removed = arr.pop();  // O(1) operation
console.log(removed);      // 50

// Internally:
// 1. Get arr[size - 1]
// 2. Decrease size
// Total: 2 operations (constant)
```

---

#### 4. Adding at the Beginning - O(N)

**Operation**: Insert element at index 0

**Why O(N)?**
Every existing element must be shifted one position to the right to make space. For an array of size n, we must move n elements.

**Visual Example with Reindexing**:
```
Initial Array:
Index:    0    1    2    3    4
Value:  [10] [20] [30] [40] [50]

Task: Insert 5 at the beginning

Step-by-step shifting (right to left):
Step 1: Move arr[4] to arr[5]
Index:    0    1    2    3    4    5
Value:  [10] [20] [30] [40] [__] [50]

Step 2: Move arr[3] to arr[4]
Index:    0    1    2    3    4    5
Value:  [10] [20] [30] [__] [40] [50]

Step 3: Move arr[2] to arr[3]
Index:    0    1    2    3    4    5
Value:  [10] [20] [__] [30] [40] [50]

Step 4: Move arr[1] to arr[2]
Index:    0    1    2    3    4    5
Value:  [10] [__] [20] [30] [40] [50]

Step 5: Move arr[0] to arr[1]
Index:    0    1    2    3    4    5
Value:  [__] [10] [20] [30] [40] [50]

Step 6: Insert 5 at arr[0]
Index:    0    1    2    3    4    5
Value:  [ 5] [10] [20] [30] [40] [50]

Total operations: 5 shifts + 1 insert = 6 operations
For array of size n: n shifts + 1 insert = n+1 operations
Time Complexity: O(n)
```

**Code Example**:
```javascript
let arr = [10, 20, 30, 40, 50];
arr.unshift(5);  // O(n) operation

// Result: [5, 10, 20, 30, 40, 50]

// Internally performs n shifts:
// - Shift 50 from index 4 to 5
// - Shift 40 from index 3 to 4
// - Shift 30 from index 2 to 3
// - Shift 20 from index 1 to 2
// - Shift 10 from index 0 to 1
// - Insert 5 at index 0
```

**Complexity Analysis**:
```
Array size: n = 5
Operations needed: 5 shifts + 1 insert = 6

Array size: n = 100
Operations needed: 100 shifts + 1 insert = 101

Array size: n = 1,000,000
Operations needed: 1,000,000 shifts + 1 insert = 1,000,001

Pattern: Operations ≈ n
Therefore: O(n)
```

---

#### 5. Removing from the Beginning - O(N)

**Operation**: Delete element at index 0

**Why O(N)?**
After removing the first element, all remaining elements must be shifted one position to the left to fill the gap. This requires moving n-1 elements.

**Visual Example with Reindexing**:
```
Initial Array:
Index:    0    1    2    3    4
Value:  [10] [20] [30] [40] [50]

Task: Remove element at index 0 (value 10)

Step 1: Remove arr[0]
Index:    0    1    2    3    4
Value:  [__] [20] [30] [40] [50]

Now shift all elements left to fill the gap:

Step 2: Move arr[1] to arr[0]
Index:    0    1    2    3    4
Value:  [20] [20] [30] [40] [50]
              ↑ will be overwritten

Step 3: Move arr[2] to arr[1]
Index:    0    1    2    3    4
Value:  [20] [30] [30] [40] [50]
                   ↑ will be overwritten

Step 4: Move arr[3] to arr[2]
Index:    0    1    2    3    4
Value:  [20] [30] [40] [40] [50]
                        ↑ will be overwritten

Step 5: Move arr[4] to arr[3]
Index:    0    1    2    3    4
Value:  [20] [30] [40] [50] [50]
                             ↑ will be removed

Step 6: Decrease size to 4
Final Result:
Index:    0    1    2    3
Value:  [20] [30] [40] [50]

Total operations: 4 shifts + 1 size update = 5 operations
For array of size n: (n-1) shifts = n-1 operations
Time Complexity: O(n)
```

**Code Example**:
```javascript
let arr = [10, 20, 30, 40, 50];
arr.shift();  // O(n) operation

// Result: [20, 30, 40, 50]

// Internally performs n-1 shifts:
// - Shift 20 from index 1 to 0
// - Shift 30 from index 2 to 1
// - Shift 40 from index 3 to 2
// - Shift 50 from index 4 to 3
// - Decrease size from 5 to 4
```

**Complexity Analysis**:
```
Array size: n = 5
Operations needed: 4 shifts = n-1

Array size: n = 100
Operations needed: 99 shifts = n-1

Array size: n = 1,000,000
Operations needed: 999,999 shifts = n-1

Pattern: Operations ≈ n
Therefore: O(n)
```

---

#### 6. Adding/Removing at Middle - O(N)

**Both operations are O(n)** because:
- **Adding at middle**: Must shift all elements after insertion point to the right
- **Removing from middle**: Must shift all elements after deletion point to the left

**Example - Insert at Index 2**:
```
Initial: [10, 20, 30, 40, 50]
Insert 25 at index 2

Shift elements from index 2 onwards:
[10, 20, __, 30, 40, 50]  // Make space
[10, 20, 25, 30, 40, 50]  // Insert

Elements shifted: 3 (30, 40, 50)
Worst case: n/2 elements ≈ O(n)
```

---

### Summary Table: Array Operations

| Operation | Position | Time Complexity | Why? |
|-----------|----------|----------------|------|
| **Access** | Any | O(1) | Direct address calculation |
| **Add** | End | O(1) | No shifting needed |
| **Add** | Beginning | O(n) | Shift all n elements right |
| **Add** | Middle | O(n) | Shift ~n/2 elements right |
| **Remove** | End | O(1) | No shifting needed |
| **Remove** | Beginning | O(n) | Shift all n-1 elements left |
| **Remove** | Middle | O(n) | Shift ~n/2 elements left |
| **Search** | Unsorted | O(n) | May check all elements |
| **Search** | Sorted | O(log n) | Binary search |

---

### Key Takeaways

**✓ Fast Operations** (O(1)):
- Accessing any element by index
- Adding to end (if space available)
- Removing from end

**✗ Slow Operations** (O(n)):
- Adding to beginning or middle (requires shifting)
- Removing from beginning or middle (requires shifting)
- Searching in unsorted array

**Interview Insight**: 
- Always ask: "Will we be adding/removing from the beginning frequently?"
- If yes, consider using a different data structure (like LinkedList)
- Arrays are best when you need fast random access and mostly work with the end

---

### Important Array Concepts

**Fixed Size Limitation**:
- Traditional arrays have fixed size
- Dynamic arrays (ArrayList in Java, vector in C++) handle resizing automatically
- Resizing involves creating a new larger array and copying elements (O(n) operation)

**Memory Efficiency**:
- Arrays are memory-efficient for fixed-size collections
- No overhead for pointers (unlike linked lists)
- Cache-friendly due to contiguous memory

**Interview Tips**:
- Always clarify if array is sorted
- Ask about constraints (size, memory limits)
- Consider edge cases (empty array, single element)
- Think about space-time tradeoffs

---

## 7. Quick Revision Sheet

### Time Complexity Essentials

**✓ Big O Notation**:
- Describes worst-case time complexity
- Drop constants and lower-order terms
- Focus on how runtime scales with input size

**✓ Common Complexities** (Best to Worst):
- **O(1)**: Constant - Array access, hash table lookup
- **O(log n)**: Logarithmic - Binary search, balanced tree operations
- **O(n)**: Linear - Single loop, linear search
- **O(n log n)**: Linearithmic - Merge sort, quick sort (average)
- **O(n²)**: Quadratic - Nested loops, bubble sort
- **O(n³)**: Cubic - Triple nested loops
- **O(2ⁿ)**: Exponential - Recursive fibonacci (naive)

---

### Binary Search Checklist

**✓ Prerequisites**:
- Array MUST be sorted
- Requires random access (array structure)

**✓ Algorithm Steps**:
1. Find middle element
2. Compare with target
3. Eliminate half of search space
4. Repeat until found or exhausted

**✓ Complexity**:
- **Time**: O(log n)
- **Space**: O(1) iterative, O(log n) recursive

**✓ When to Use**:
- Large sorted dataset
- Multiple searches needed
- Fast lookups required

**✓ Code Template**:
```javascript
let left = 0, right = arr.length - 1;
while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
}
return -1;
```

---

### Space Complexity Essentials

**✓ Key Points**:
- Measures memory usage relative to input size
- Includes variables, data structures, recursion stack
- Often traded for better time complexity

**✓ Common Patterns**:
- **O(1)**: Few variables, in-place algorithms
- **O(n)**: Single array/hash map of size n
- **O(n²)**: 2D matrix, nested data structures

---

### Array Fundamentals

**✓ Properties**:
- Contiguous memory locations
- Same data type elements
- Zero-indexed
- Fixed size (traditional arrays)

**✓ Memory Address Formula**:
```
Address of arr[i] = Base Address + (i × Element Size)
```

**✓ Key Operations**:
- **Access**: O(1) - Direct calculation
- **Search**: O(n) unsorted, O(log n) sorted
- **Insert/Delete**: O(1) at end, O(n) at beginning

---

### Binary & Memory Basics

**✓ Units**:
- 1 Bit = 0 or 1
- 1 Byte = 8 Bits
- 1 KB = 1024 Bytes

**✓ Common Data Type Sizes**:
- Integer (Java): 4 bytes
- Long (Java): 8 bytes
- Character: 2 bytes

---

### Interview Success Tips

**✓ Complexity Analysis**:
- Always state time AND space complexity
- Explain your reasoning
- Consider best, average, and worst cases

**✓ Binary Search Interviews**:
- Verify array is sorted
- Handle edge cases (empty array, single element)
- Prefer iterative over recursive (stack overflow concern)
- Watch for infinite loops (left <= right condition)

**✓ General Problem-Solving**:
- Start with brute force, then optimize
- Ask clarifying questions
- Think about edge cases
- Test with examples
- Communicate your thought process

**✓ Common Pitfalls**:
- Off-by-one errors in loops
- Integer overflow in (left + right) / 2 → Use left + (right - left) / 2
- Forgetting to handle empty inputs
- Not considering sorted vs unsorted data

---

### Space-Time Tradeoff Examples

**✓ When to Trade Space for Time**:
- Caching computed results (memoization)
- Hash tables for O(1) lookups
- Preprocessing data for faster queries

**✓ When to Trade Time for Space**:
- Memory-constrained environments
- In-place algorithms
- Iterative vs recursive implementations

---

## End of Notes

*These notes cover fundamental DSA concepts essential for technical interviews and competitive programming. Practice regularly and focus on understanding the underlying principles rather than memorizing code.*

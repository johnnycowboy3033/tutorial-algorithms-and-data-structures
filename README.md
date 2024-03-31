# tutorial-algorithms-and-data-structures

<img src="https://github.com/johnnycowboy3033/resources/blob/main/banners/banner-galileo-galilei.png" alt="Church of Scyence Banner">

# JavaScript Algorithms and Data Structures

# How to launch jupyter notebook from a terminal

Jupyter Notebooks allow you to open IPYNB notebooks in the location you prefer. I generally recommend the following:     

* First create a folder at your preferred destination      
* Then go to terminal/cmd prompt and navigate to your above made destination      
* Once in the destination then type in **jupyter notebook**     

This will then automatically trigger the browser and open the Home tab, you can start a new notebook with your preferred kernel, rename and save the notebook, which it saves at the location where you navigated through the terminal.           

# Topics
* Algorithm   
* Meassuring performance   
* Time & Space Complexity   
* Big O Notation   
* Math Algorithms  
* Search     
* Sort   
* Misc. Algorithms and Problem solving  

# Algorithm

## What is an algorithm?
An algorithm is a set of well-defined instructions to solve a particular problem     

<img src="https://github.com/churchofscyence/resources/blob/main/images/tutorial-algorithms-and-data-structures/recipe_analogy.png" alt="Recipe Analogy">

<img src="https://github.com/churchofscyence/resources/blob/main/images/tutorial-algorithms-and-data-structures/programming_recipe_analogy.png" alt="Programming Recipe Analogy">

## Why Algorithms?
* As a developer, you're going to come across problems that you need to solve         
* Learning algorithms translates to learning different techniques to efficiently solve those problems      
* One problem can be solved in many ways using different algorithms     

## Algorithm Analysis
* We evaluate the performance of an algorithm in **terms of its input size**
* **Time complexity** - Amount of time taken by an algorithm to run, as a function of input size
* **Space complexity** - Amount of memory taken by an algorithm to run, as a function of input size        

By evaluating against the input size, the analysis is not only machine independant, but the comparison is
also more appropriate         

There is no one solution that works every single time. It is always good to know multiple ways to solve the problem and use the best solution, given your constraints       

If you have little memory to work with, you should pick a solution that is relatively slower but needs less
spcae      

# Time & Space Complexity

## How to represent complexity ?
Asymptotic notations
* Mathematical tools to represent time and space complexity
1. Big-O notation (O-notation) - Worst case complexity
2. Omega notation (&Omega;-notation) - Best case complexity
3. Theta notation (&theta;-notation) - Average case complexity


# Big O Notation
The worst case complexity of an algorithm is represented using the big O notation     

Big-O notation describes the complexity of the algorithm using algebraic terms  

Count the number of times a statement executes based on the input size

It has two important characteristics
* It is expressed in terms of the input
* It Focuses on the bigger picture without getting caught up in the minute details

 # Big-O Time Complexity

 Count the number of times a statement is executes based on the the input size

 ## Example Linear Time Completity  

```javascript

fuction summation(n){
  1  let sum = 0;
    for (let i = 0; i < n; i++){
  2      sum +=i;
    }

  3  return sum;
}

```

if n = 4

Line 1 excutes 1    
Line 2 excutes 4      
Line 3 excutes 1       

total excutes is 6

So write the following equation: ( two in the equation is line 1 and line 3 excutes)    

6 = n + 2     

So write the following in expressed in terms of the inputs    

n+2    

Conclusion:   
 if n = 100 then equation is 100 + 2     
 if n = 1000 the equation is 1000 + 2   

 so we can drop the + 2 and rewrite the equation  because Big-O focuses on the the big picture without getting caught up in the small details    

 n   

 This is O(n) - Linear  Time Completity   

## Example Constant Time Completity

   ```javascript
   function sunation(n){
   1 return (n * (n+1))/ 2
   }

   ```

   Line 1 only excutes one time so this is O(1) Constant Time Completity   

## Example Quadratic Time Completity

   ```javascript
   for (i = 1; i <= n; i++){
    for (j = 1; j <= n; j++){
    }
   }
```

O(n&sup2;)

 ## Example Cubic Time Completity

   ```javascript
   for (i = 1; i <= n; i++){
    for (j = 1; j <= n; j++){
          for (k = 1; k <= n; k++){
    }
    }
   }
```

O(n&sup3;)

 ## Example Logical Time Complexity
* Imput size reduces by half every iteration      

* Examples include binary searches, finding the smallest or largest value in a binary search tree, and certain divide and conquer algorithms.  

* If an algorithm is dividing the elements being considered by 2 each iteration, then it likely has a runtime complexity of O(log N).  

## Big O Notation of Objects and Arrays

### Objects
* An object is a collection of key and value pairs

Insert item - O(1)
Remove item - O(1)
Access items - O(1)
Search items - O(n) is Linear because might have search all elements
Object.keys() - O(n)
Object.values() - O(n)
Object.entries() - O(n)

### Arrays
* An array is an ordered collection of values

Insert/remove at end - O(1)
Insert/remove at beginning - O(n)
Access - O(1)
Search - O(n)
Push/pop - O(1)
Shift/unshift/concat/slice/splice - O(n)
forEach/map/filter/reduce - O(n)

 ## Big-O Guide Cheatsheet
 __________________________________________________
 Calculation not dependent in input size - O(1)

 1 loop - O(n)
 2 nested loops - O(n^2)
 Input size reduced by half - O(log n)

# Math Algorithms
* Fibonacci Sequence
* Factorial Sequence
* Prime Numer
* Power of Two
* Recursion
* Fibonacci sequence with recursion
* Factorial of a number with recursion    

## Recursion
* Recursion of a problem solving technique where the solution depends on solutions to smaller
instances of the same problem    

*  Recursion is when a function calls itself

*  A great technique to simplify your solution

*  If you find yourself breaking down your problem into smaller versions of the same problem,
recursion is very useful  

### A few points about recursion
* Every recursive solution needs to have base case - a condition to terminate the recursion

*  Recursion might simplify solving a problem but it does not always translate to a faster
solution. A recursive solution solution may be for worse compared to an iterative solution

* Recursion is a topic that is not the most straightforward to understand. Do not give up
if you struggle with the concept

### Tips for recursive solutions
* Figure out how to break down the problem inti smaller versions of the same problem
identify the base case for recursion

### Recursive Fibonacci Sequence
* The Fibonacci Sequence is a sequence in which each number is the sum of the two preceding ones.

* If F represents a function to calculate the Fibonacci number, then
```
Fn = Fn-1 + Fn-2

F0 = 0 and F1 = 1

F2 = F1 + F0
```

# Search
* Linear Search
* Binary Search
* Recursive Binary Search

## The approach
* Video narator will provide problem statment
* You should pause the video and try solving the problem
* You should implement the solution together
* Video narator will detemine the Big-O time complexity of the solution*

## Linear Search Pseudocode
* Start at the first element in the array and move towards the last
* At each element though, check if the element is equal to the target element
*  if element found, return index of the element
*  if element not found, return -1

## Linear Search Big-O
* loop - O(n)

 # Binary Search
Binary Search is defined as a searching algorithm used in a **sorted array** by repeatedly dividing the search interval in half. The idea of binary search is to use the information that the array is sorted and reduce the time complexity to O(log N).

## Conditions for when to apply Binary Search in a Data Structure:
To apply Binary Search algorithm:

The data structure must be sorted.
Access to any element of the data structure takes constant time.

## Binary Search Algorithm:
In this algorithm,

Divide the search space into two halves by finding the middle index “mid”.

<img src="https://github.com/churchofscyence/resources/blob/main/images/tutorial-algorithms-and-data-structures/binary_search_algorithm.png" alt="Binary Search Algorithm">        


* Compare the middle element of the search space with the key.
* If the key is found at middle element, the process is terminated.
* If the key is not found at middle element, choose which half will be used as the next search space.
  - If the key is smaller than the middle element, then the left side is used for next search.
  - If the key is larger than the middle element, then the right side is used for next search.
* This process is continued until the key is found or the total search space is exhausted.





# Sort  



# Misc. Algorithms and Problem solving




# References      
* [JavaScript Algorithms and Data Structures - Codevolution - YouTube
](https://www.youtube.com/watch?v=coqQwbDezUA&list=PLC3y8-rFHvwjPxNAKvZpdnsr41E0fCMMP&index=1)
* [Python3 Compile Online - Rextester](http://rextester.com/l/python3_online_compiler)
* [Problem Solving with Algorithms and Data Structures using Python - By Brad Miller and David Ranum, Luther College](https://runestone.academy/ns/books/published/pythonds/index.html)
* [Python Docs](https://docs.python.org/3/tutorial/datastructures.html)
* [Python - Tutorialspoint](https://www.tutorialspoint.com/python/python_data_structure.htm)
* [Data Structure and Algorithms Tutorial - Tutorialspoint](https://www.tutorialspoint.com/data_structures_algorithms/index.htm)  
* [Algorithms - Hacker Earth](https://www.hackerearth.com/practice/algorithms/searching/linear-search/tutorial/)
* [Data Structures - Python Official Documentation](https://docs.python.org/3.1/tutorial/datastructures.html#)   
* [javascript-algorithms - trekhleb](https://github.com/trekhleb/javascript-algorithms)
* [Data Structures and Algorithms in Java | Free course | Animations and Implementations - Dinesh Varyani - YouTube](https://www.youtube.com/watch?v=6iCHf7OZn6c&list=PL6Zs6LgrJj3tDXv8a_elC6eT_4R5gfX4d)
* [Analysis of Algorithms | Big-O analysis - geeksforgeeks.org](https://www.geeksforgeeks.org/analysis-algorithms-big-o-analysis/)
* [JavaScript - draw triangle on canvas element](https://dirask.com/posts/JavaScript-draw-triangle-on-canvas-element-1yKd5p)


# Tools  
* [Python Compile](http://rextester.com/l/python3_online_compiler)
* [Drawing Tool](https://www.draw.io/)
* [Tower of Hanoi - Math is Fun](https://www.mathsisfun.com/games/towerofhanoi.html)
* [Online Markdown Editer](https://hackmd.io/Ij7BgiLES4mySTY7B4V9Vw)

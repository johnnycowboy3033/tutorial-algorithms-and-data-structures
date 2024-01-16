# tutorial-algorithms-and-data-structures

<img src="https://github.com/johnnycowboy3033/resources/blob/main/banners/banner-galileo-galilei.png" alt="Church of Scyence Banner">

# JavaScript Algorithms and Data Structures

# Topics
* Algorithm   
* Meassuring performance   
* Time & Space Complexity   
* Big O Notation   
* Math Algorithms   
* Sort   
* Search    
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

# Math Algorithms
* Fibonacci Sequence
* Factorial Sequence
* Prime Numer
* Power of Two
* Recursion
    


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


# Tools  
* [Python Compile](http://rextester.com/l/python3_online_compiler)
* [Drawing Tool](https://www.draw.io/)
* [Tower of Hanoi - Math is Fun](https://www.mathsisfun.com/games/towerofhanoi.html)
* [Online Markdown Editer](https://hackmd.io/Ij7BgiLES4mySTY7B4V9Vw)

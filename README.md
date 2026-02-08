# Java 2D Arrays
https://shreemahor.github.io/java-2d-arrays
## Java 2D Arrays & Tic Tac Toe and more!
***This is my collection of games and simulations on Java 2D Arrays or Matrices. They are just arrays of arrays, and are really useful for tabular data. I coded in Java and then converted to js using my custom converter for this website. Tic Tac Toe is a great example of what 2D arrays can do and its super fun. There is also multiplying, summing, mirroring, randomizing, and more with matrices!***
<img width="1103" height="933" alt="image" src="https://github.com/user-attachments/assets/597a67ce-3c07-4625-bc78-2afe6e02d7a1" />

## List of Apps
- Tic Tac Toe
- Mirror & Sum
- Row, Column, Diagonal
- Latin Square
- Mutliply Matrix
- Random Matrix
- 2D Array

## Why 2D Arrays?

A 2D array is an array whose elements are also *arrays*. It's like a table or a grid with rows and columns, and they are also called matrices. In Java, you can create a 2D array using the syntax: `dataType[][] arrayName = new dataType[rows][columns];`. For example, `int[][] myArray = new int[3][3];` creates a 3x3 array of integers. You can access elements in a 2D array using **two indices**: `arrayName[row][column]`. For example, `myArray[0][1]` would access the element in the first row and second column of `myArray`. 2D arrays are useful for representing data in a structured way, such as in games like Tic Tac Toe or for sorting tabluar data. They are also *immutable in size*, meaning once you create one you cannot change its dimensions, but they are **faster than ArrayLists** and other dynamic data structures. They are an essential part of Java and I couldn't make these apps without them!

<img width="327" height="538" alt="image" src="https://github.com/user-attachments/assets/b23bd607-10c2-484d-8bcd-63d02f1990d6" />

## How does it work?

### Core

***JAVA*** I coded the main logic in Java by myself (10 hours). I needed to deciede between using normal for loops or enhanced ones and decide how to print out my arras and how to handle the columns and rows and when to set htem equal and how to iterate over them in the least steps and create specialized functions for them and change their values at specific indices and manipulate them in all sorts of ways.

### HTML and Javascript

Unfortunately, Java can't be displayed in the browser by itself, so **HTML and Javascript** are reuquired. The js is linked to the HTML and it is a direct conversion of the Java I made. The html follows a simple color palette and has a 'Back to Menu' button on each app and each app as a 'card' to pick.

### Other

##### Converting

I converted the java to js using *an ai model that I programmatically called*. The model is gemini lite and the provider is Pollinations.ai. I made all of the java being converted myself, and I custom coded the converter logic, and I needed to organize the outputs and manually enter them and fix them 
when the ai messed up, so by no means was this gemini's project, and I did not expect this in the first place - this was the last resort because there cheerpj was not working.

##### Old Try

Cheerpj is a library to display java directly in the browser. But due to licensing restrictuions and a line:1920 problem with Scanner, I couldn't use it. This forced me to code the ai model to convert it, since I am not an expert at frontend.

<img width="532" height="551" alt="image" src="https://github.com/user-attachments/assets/74808e68-da92-4f37-a00c-8f73d240ade0" />

## Limitations & Future

I could always add more games that played more like games using 2d arrays. But, I did learn lots of Java, a little bit of html, js, and python here and there. Additionally, the UI could use a makeover. But in conclusion, this project was very fun to make and I learned a lot!

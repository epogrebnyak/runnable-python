# Student Checklist

Below is a checklist for the minimal Python syntax and 
some key ideas in programming. 

## Basic data types

### Numbers

- Integers and floats represent quantities and measurements.
- Arithmetic and math operations work on integers and floats.
- Integers are easier to represent than floats for a computer.

### Strings

- Strings contain text and represent information like words, sentences, text
  as well labels, titles and names.
- In code strings are characters that are enclosed in single (`'`) or double (`"`) quotes.
- Strings are iterable by character. Exercises: print a string by character, reverse a string, count characters in a string.
- Operations with strings include concatenation, splitting, extracting parts, and modifying strings.
- Operators (`+` and `*`), functions (like `len()`), and methods (like `.lower()`) work on strings.
- Multiline strings are enclosed in triple quotes and contain newlines as escape characters. They are good to make a string that is a poem.

### Booleans

- Comparison operations result in a boolean value. These values are used as flags 
  for decisions.
- A boolean can only be `True` or `False`.
- `and` and `or` operators combine booleans into logical expressions athat are 
  useful for checking several conditions.

<!--
- A list of boolean values may be evaluated using built-in `all()` and `any()` 
  functions.   
-->

### Conversion between types

- The `str()`, `int()`, `float()`, and `bool()` constructors allow conversion   
  between types.
- Python automatically coerces types to minimize the conversions required 
  but sometimes a programmer must do it. Example: `input()` returns a string, but you need a number.

## Data structures

- Values of basic data types can be assembled into compound data types such as lists, tuples, and dictionaries.
- A list is a sequence of values of the same type: `[7.5, 6.2, 5.1]`, `['Joe', 'Jane', 'Jim']`. 
  Python allows you to join different types of values in a list but you shouldn't. 
- Tuple joins together several values of the same or different types: `(25.5, 10.3)` (2D coordinates),
  `(7, "B")` (airplane seat). 
- Dictionaries are collections of key-value pairs. Using a dictionary you can look up of a value by its key.

Common operations on collections include:
  - creating a collection,
  - accessing an element (by an index in a list or a tuple or by key in a dictionary),
  - subset or a slice of a collection,
  - reusing a collection to create a new one.

- Collections can be nested. For example, a list can contain tuples: `[(1, 2), (5, 5)]`.

## Values and expressions

- A value is a small piece of data of a specific data type. `5` is an integer value, `0.33` is a float value, and `"Life is wonderful"` is a string value.
- Operations on values form an expression. An expression evaluates to a resulting value.
- Operations have order of precedence that you can clarify with parenthesis `()`. 
- You can use [Python REPL](https://pyodide.org/en/stable/console.html) 
  to write out and evaluate expressions.

## Variables

### Concept

- A variable is a named storage for a value that can be accessed throughout the program.
- You can _bind_ a name to a value and refer to this value by that name later.

### Assignment operation

- Another way of saying the same is that you _assign_ a value to a variable with a specific name. 
- Assignment operator `=` takes an expression on the right right, evaluates it and assigns a value to a variable on the left. 

```python 
language = "Python"
message = language + " " + "is great!"
final_grade = (85+90+93)/3
```
- When unpacking tuples you can assign values to several variables at once: `a, b = (3, 8)`.

### Mutability

- In Python, all variables are mutable — you can change or reassign new values to them. `x = 5; x = x + 1` works and `x` value becomes `6`. 

### Naming

- There are requirements about what a valid variable name can be. `my_age` is ok. 
- Choosing good variable names is not trivial and can be very subjective.

### Comments

- Unlike in mathematics the value of the variables in programming are always known, they are not to be   
  discovered by solving equations.
- Few other programming langiages use `:=` or `<-` as assignment operator to highlight assignment 
  is not equality.


## Statements and code blocks

- Command to do something in a Python program is called a statement. 
- A statement can occupy one line or span many lines.
- A program in Python is a series of statements that are executed as a sequence.
- A code block is a group of statements. They are used to create functions, loops, and conditional statements.
- In Python code blocks are defined by indentation (spaces at the start of a line).

## Flow of programs

### Conditions

- A condition is a check or comparison that evaluates to a boolean value.
- If a condition is true, it triggers one course of action; if it is false, other action will be taken. Conditions are used in `if` statements and `while` loops.

### Conditional statements

- An `if` statement instructs the program to execute a code block only if a specified condition is true.
- `if-else` statements allow you to execute one block of code if a condition is true and another block if 
  it is false.
- The `elif` keyword can be used to add multiple conditions. It is easy to overlook some condition in
  
### `while` loops

- `while` loops repeat a code block as long as a condition remains true.
- They are useful for repeating actions until a certain condition is met. 
- The actions inside the loop body usually affect the condition.
  (for example a counter or a user input).
- You can make an iternal loop with `while True:` and also exit the loop with `break` statement. 

### `for` loops

- `for` loops repeat a code block by choosing elements from a collection of items.
- They are often used to iterate over lists, tuples, or strings.
- You can also use `for` loop with `range()` function if you know 
  a specific number of times to run the loop.

```python 
for i in range(3)
   print(i)
```

## Functions

What is it?

- Functions are reusable blocks of code that may take inputs (also called 
  arguments), perform computations and actions, and can return an output value or return nothing.

Where is it?

- You define a function in one place of a program and run it later in one or more 
  places. Running a function is also called 'invoking', or 'calling' a function.    
- Function can be defined in a different file, then you have to import it.
- You are likely to use built-in functions, stardard library functions
  and third party library functions and also write your own functions.

What else about it?

- Functions can call other functions.
- Functions may have default parameter values.
- Function may have a short text description called a docstring.
- Function arguments and return value may be annotated to tell about types of variables used.

Good practice: 

- You can start programming with a script and make own functions when you need 
  to reuse some code block. 
- Make a function that does one thing, clearly named and is easy to test.  
- You can also separate functions that do calculations and the ones that 
  communicate with outer world (printing, taking inputs, saving or reading files).  

## Input and output (IO)

### Console

- `print()` prints text to the screen for the user to read.
- `input()` receives input from the user as a string.

### Files

- Files are pieces of text or binary information stored on a computer disk.
- Files can be opened, read, and written using Python's built-in functions `open()`,
  `read()`, and `write()`.
- There is also a modern `pathlib` library in Python that makes handling files easier. 

### Reading from internet

- Not possible in the Pyodide programming enviroment that we use inthis course,
  but easy with `httpx` or `requests` libraries.

<!--

## Code organisation 

- Parts of code may reside in other modules or packages for better organization and reusability.

### Scripts and modules

- Scripts and modules are just files with Python code. File names can be very generic like `my_code.py` but naming files well is similar in difficulty to naming a variable.
- Scripts have runnable code that is executed right away.
- Modules include functions and classes that will not run immediately but will be reused by other modules and scripts.
- Using the code written in another file is called import.
- You often start some task by writing a script then changing it to a module. 

### Packages and package manager

- Packages are collections of modules organized in directories and subdirectories.
- Every programming language has a package manager - a utitlty that fetches a package from internet 
  and installes on your system. Package manager needs to be smart to resolve which version of the package 
  to install. Python package manager is called `pip`.

### Notebooks

- A notebook is an interactive environment that allows you to write and execute code in a step-by-step manner. Notebooks are often used for data analysis, visualization, and educational purposes. Jupyter Notebook is a popular tool that supports multiple programming languages, including Python.

!-->

## Errors and tests

### Error handling

- Sometimes a program will encounter an impossible condition and stop its execution.
  These situations are called exceptions. 
- Exception provide a message that tries to explain you what went wrong.
- Some errors would not cause exceptions, and you will need tests to add more guarantees your program is 
  correct.

## Unit testing

- Testing ensures that code behaves as expected. 
- You can write simple assertions in code with `assert` followed by condition 
  and convert them to tests later.
- A small test for a part of the code is called a 'unit test'.
- As experienced programmer you may write the test for you code before the code.
  This technique is called test driven development (TDD).

## Comments

- Comments in code provide extra information to the reader and do no affect how code runs.
- Comments in Python start with `#`
- Do not overcomment — let you code speak clearly for itself.
- Also do not leave too much commented code in program to clean up later.

## Not covered

### Can survive without

Several things that usually show up in the beginner courses but you can catch up later:

- `None`,
- sets.

### Worth a look

Several topics that do not show up often as but are quite useful, consider researching them:

- dataclasses,
- enums,
- working with dates, time and timezones,
- `asc()` and `ord()` for ASCII character codes.

<!--
- Pure functions have no side effects and always return the same output for the same inputs.
- Effectful functions may have side effects, such as modifying performing I/O operations.
-->

## Glossary

- **Boolean**: A data type with two possible values: `True` or `False`.
- **Condition**: An expression that evaluates to a boolean value used to control the flow of a program.
- **Data type**: A classification of data that tells the interpreter how to use the data.
- **Expression**: A combination of values, variables, operators, and functions that are evaluated to produce a new value.
- **Function**: A reusable block of code that performs a specific task.
- **Loop**: A code block that is repeated until some condition is reached.
- **Variable**: An identifier for a stored value. 

See also [Python orginal glossary](https://docs.python.org/3/glossary.html).

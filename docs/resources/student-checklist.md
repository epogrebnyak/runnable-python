# Checklist

[[TOC]]

## Basic data types

### Numbers

- Integers and floats represent quantities and measurements.
- Arithmetic and math operations work on integers and floats.
- Integers are easier to represent than floats for a computer.

### Strings

- Strings contain text and represent information like words, sentences, text
  as well labels, titles, and names.
- In code strings can be enclosed in single (`'`) or double (`"`) quotes.
- Strings are iterable by character.
- Operations with strings include concatenation, splitting, extracting parts, and modifying strings.
- Operators (`+` and `*`), functions (like `len()`), and methods (like `.lower()`) work on strings.
- Multiline strings are enclosed in triple quotes and contain newlines as escape characters.

### Booleans

- Comparison operations result in a boolean value. These values are used as flags for 
  decisions.
- A boolean can only be `True` or `False`.
- `and` and `or` operators combine booleans into logical expressions. They are 
  useful for checking several conditions.
- A list of boolean values may be evaluated using built-in `all()` and `any()` 
  functions.   

### Conversion between types

- The `str()`, `int()`, `float()`, and `bool()` constructors allow conversion between types.
- Python automatically coerces types to minimize the conversions required from the   
  programmer.

## Data structures (compound data types, collections)

- Values of basic data types can be assembled into compound data types. Lists, tuples, and dictionaries are useful built-in compound data types.
- A list is a sequence of values of the same type: `[7.5, 6.2, 5.1]`, `['Joe', 'Jane', 'Jim']`. 
- Tuple joins together several values that can be of different types: `(25.5, 10.3)`, `(24, "B")`. 
- Dictionaries are collections of key-value pairs. Using a dictionary you can look up of a value by its key, add new key-value pairs.

Common operations on collections include:
  - creating a collection,
  - accessing an element (by an index in a list or a tuple or by key in a dictionary),
  - subset or a slice of a collection,
  - reusing a collection to create a new one (list comprehension).

- Collections can be nested. For example, a list can contain tuples: `[(1, 2), (3, 4)]`.

## Values and expressions

- A value is a small piece of data of a specific data type. `5` is an integer value, `0.33` is a float value, and `"Life is wonderful"` is a string value.
- Several operations on values form an expression. An expression evaluates to a resulting value.
- Longer defnition: An expression is a combination of values, variables, operators, and calls to functions that are evaluated to produce another value.
- Operations have order of precedence that you can clarify with parenthesis `()`. 
- You can use Python REPL to write out and evaluate expressions.

## Variables

Concept: 

- A variable is a named storage for a value that can be accessed throughout the program.
- You can _bind_ a name to a value and refer to this value by that name later.

Assignment:

- Another way of saying the same is that you _assign_ a value to a variable with a specific name. 
- Assignment operator `=` takes an expression on the right right, evaluates it and assigns a value to a   
  variable on the left. 

```python 
language = "Python"
message = language + " " + "is great!"
final_grade = (85+90+93)/3
```
- When unpacking tuples you can assign to several variables: `a, b = (3, 8)`.

Mutability: 

- In Python, all variables are mutable — you can change or reassign new values to them.
  `x = 5; x = x + 1` works. 

Naming: 

- There are requirements about what a valid variable name can be `my_age` is ok. 
- Choosing good variable names is not trivial and can be very subjective.

Extra:

- Unlike in mathematics the variables values in programming are always known, not something you have to    
  derive by solving equations.
  
## Statements and code blocks

- Command to do something in a Python program is called a statement. 
- A statement can occupy one line or span many lines.
- A program in Python is a series of statements that are executed as a sequence.
- A code block is a group of statements. They are used to create functions, loops, and conditional statements.
- In Python code blocks are defined by indentation (spaces at the start of a line).

## Conditions

- A condition is a check or comparison that evaluates to a boolean value.
- If a condition is true, it triggers one course of action; if it is false, other action will be taken. Conditions are used in `if` statements and `while` loops.

## Flow of programs

### Conditional statements

- An `if` statement instructs the program to execute a code block only if a condition is true.
- `if-else` statements allow you to execute one block of code if a condition is true and another block if it is false.
- The `elif` keyword can be used to add multiple conditions.

### `while` loops

- `while` loops repeat a code block as long as a condition remains true.
- They are useful for repeating actions until a certain condition is met. 
- The actions inside the loop body usually affect the condition (for example a counter or a user input).
- You can make an iternal loop with `while True:` and also exit the loop with `break` statement. 

### `for` loops

- `for` loops repeat a code block by choosing elements from a collection of items.
- They are often used to iterate over lists, tuples, or strings.
- You can also use `for` loop with `range()` function you know a specific number of times to run the loop.

```python 
for i in range(3)
   print(i)
```

## Functions

- Functions are reusable blocks of code that may take inputs, perform computations and actions, and can return an output.
- Pure functions have no side effects and return the same output for the same inputs.
- Effectful functions may have side effects, such as modifying global variables or performing I/O operations.
- Functions can have default parameter values and return multiple values.

### IO

### Console

- `print()` prints text to the screen for the user to read.
- `input()` receives input from the user as a string.

### Files

- Files can be opened, read, and written using Python's built-in functions.
- File operations include opening a file with `open()`, reading with `read()`, and writing with `write()`.

<!--

### Reading from internet

- Not possible 

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

## Error handling

- Sometimes a program will encounter an error or impossible condition and stop its execution.
- Errors are also called exceptions. An exception has a message that tries to explain you what was wrong.
- You can "catch" exception and change the program behavior, for example print "Division by zero is fine"    
  instead of stopping and continue the program.
- However, if a program to terminates near the point of error, it is easier to debug and fix an error.
- Some errors would not cause exceptions, you will need tests to prove your program is correct.

## Testing

- Testing ensures that code behaves as expected. 
- You can write simple assertions in code with `assert` followed by condition and conver them to tests later.

## Short Glossary

- **Boolean**: A data type with two possible values: `True` or `False`.
- **Condition**: An expression that evaluates to a boolean value, used to control the flow of a program.
- **Data type**: A classification of data that tells the compiler or interpreter how to use the data.
- **Expression**: A combination of values, variables, operators, and functions that are evaluated to produce a new value.
- **Function**: A reusable block of code that performs a specific task.
- **Loop**: A code block that is repeated until a certain condition is reached.
- **Variable**: An identifier for a stored value that can be accessed or changed during program execution.


# Programming concepts and principles for Python 

---

> Skip this section until you accumulate enough questions about how to programs work, what that thing is called or how that is even possible. 

> The section is very inclined towards imperative programming languages, we do no provide overview of programming paradigms or any computation theory.

> Nice is we can add more about what is CS, SWE. Maybe add Novig, ACM Curriculum, few theormins and a System Design Premier.

---

**What is a program?** A Python program is a sequences of commands that accepts data as inputs, makes computations and performs actions, and produces data as an output.

**What makes a programming language?** A programming language is a set of 
rules and thier implementations that allow to define and run programs. 

At the very core of a programming language there should be two at least mechanisms that  
equip you to represent data and to define steps in program executions. The smallest 
piece of data is a _value_ and the smallest step in a program is a _statement_.
A statement may contain a value, but not other way around. _Variables_ help to address and modify values.

```python
# This is a statement with a value inside.
print("Now I understand.")
# Another statement with an expression inside.
assert 100 > 90
```
Values are grouped into _types_ so that Python would know what operations are possible with to do witha a value. Some types are build in but you can also create new user-defined types.

Operations on values make _expressions_ and a sequence of commands makes up a _code block_. There are statements, or commands, that let you choose between code blocks or repeat them. 
A code block that accepts incoming values and produces a resulting value is called a _function_. 

Situation where there is an error in program instructions is called an _exception_
that you can handle. Program code may be in different files and you can _import_ 
the part of code you need from one file to another. One file with a Pytnon 
program is called a module and many files are make  _package_.

The described programming language mechanisms are presented in a chart below
and a more detail explaination follows.

 |    | Concept                           | Description                                                            |
 |----|-----------------------------------|------------------------------------------------------------------------|
 | 1  | Values and expressions            | Represent data in formats suitable for calculations                    |
 | 2  | Variables                         | Bind names to values, access and modify the values using those names   |
 | 3  | Statements, code blocks and flow  | Define the steps and their order to complete the program               |
 | 4  | Functions and classes             | Create reusable pieces of code with clear logic                        |
 | 5  | Input and output (IO)             | Interact with the external world - the user, files, or the internet    |
 | 6  | Exceptions                        | Stop program execution on an error or unexpected condition             |
 | 7  | Import, modules, and packages     | Organize code across multiple files and reuse code written by others   |

Thses concepts are illustated on a chart below.

```     
Data Types                        
   |                                                              
Values + Operations = Expressions                  
   |                      ||
Variables             Statements  ->  Code blocks
                                      |  
                                      + Conditional statements
                                      + Loops
                                      + Functions
                                        (name + args + body + output)
                                          |
                                          +  Pure calculations
                                          +  Functions with effects
                                             (IO)
```

## Values and data types

- **Value** is a unit of information, or some fact.
- A **type** refers to a set of similar values. The primitive types in Python are integers, floats, strings, and booleans.
- **Compound types** represent collections of primitive types or nested data structures, such as lists, tuples, and dictionaries.

## Variables

- **Variables** act as identifiers for values and allow you to reuse or modify values throughout the program.

## Expressions 

- Values can be modified with operators, function calls and element access for compound data types. Together these operations on values make up **expressions.**
- Expression evaluates to a resulting value.

## Statements and code blocks

- Each line in a program is typically a **statement** — a command or an instruction to perform an action or run a calculation. Statements may span multiple lines.

- **Code block** is a group of statements. Python uses **indentation** with extra spaces to define code blocks.

- **Statements and code blocks**: Statements indicate commands. Code blocks, defined by indentation in Python, group statements together.

## Control flow

- **Control flow**: Conditional statements and loops allow choosing or repeating code blocks.

- **Conditional statements** control program execution by evaluating conditions and executing corresponding code blocks.

- **`while` loops**: `while` loops repeat actions as long as a condition remains true, facilitating repeated execution based on dynamic conditions.

- **`for` loops**: `for` loops iterate over collections, enabling repeated actions for each item in a sequence.

## Functions

- **Functions** are reusable blocks of code that perform specific tasks. They allow you to organize and maintain program code in a modular and logical fashion.

- Functions may have input **arguments**, perform actions or calculations inside a code block called the function **body**, and may **return** an output value.

- Functions are **called** in other parts of the program, including calls from inside other functions.

- Some functions handle calculations (**"pure"** functions), while others manage interactions with the outside world (**"effectful"** functions) or may do both.

## Input/Output (IO)

- `print()` outputs data to the console, and `input()` captures user input.
- Python's built-in functions enable file operations, allowing reading and writing with various modes for data persistence.
- The `json` module handles serialization, transforming data structures into JSON format for storage and transmission.

## Error Handling

- `try`, `except`, and `raise` statements manage exceptions, facilitating error recovery.

## Packages

- Code is organized with scripts, modules, and packages, using imports to enable code reuse and modularity.
- `pip` manages Python packages, simplifying installation and dependency management.


See also:

- [Additional Resources](https://docs.google.com/document/d/1WP7J31_EisyVtqTQ8fPDzRpqr29EWrY2datGpiUo8cs/edit?tab=t.0)

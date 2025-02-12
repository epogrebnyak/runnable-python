# Primitive data structures

## Numbers

- What is a number - you know when you see it.
- Should I use an integer or a float?
- Arithmetic (`+`, `-`, `*`, `/`) and math operations.
- Operation precedence and using ().

Extra topics:

- Generating random numbers.
- Floor division and remainder.
- Twists in float point arithmetic.

## Strings

Where strings are useful?

- propram messages to and from the user;
- saving information about objects;
- processing natural language;
- prompts to large language models (ChatGPT);
- special place for docstrings in code.

Basics:

- Define a string with double ("") or single ('') quotes.
- Concatenate or repeat a string with `+` and `*` operators.
- String operations and methods: len(), lower(), upper(), strip(), replace(), split(), join(), find(), count().
- Access individial charactes by zero-based index or parts by slices.
- Strings are immutable in Python.
- Emojis are strings too!
- Combine text and variables using f-strings.

Where can I get a new string from?

- Hardcoded in source code: string written in program code.
- User input at prompt: get a strings from the user with input() function.
- Read from a local text file: use `Path("somefile.txt").read_text()`. Write to a file.
- Read from the internet: use `httpx` or `requests` to fetch web page content.
- Extra option: get command line arguments through `sys.argv`.

Extra topics:

- Docstrings in code.
- Escape characters and multiline strings.
- Character sets: ASCII and utf-8.
- Wildcards and regular expressions.
- Options for output formatting.

## Comparisons and boolean values

- Equality and other comparison operators.
- Boolean values `True` and `False`.
- Using to branch brogram execution.

## Converting between types

# Compound data structures

## List

Mind model:

- A collection of many values of the same type
- Mutable
- Provide examples of a list

Basic operations:

- Syntax to create using [] and commas
- Refer an item by zero-based index
- Refer to items using slices
- Add an new item to list
- Change an item on the list

More operations:

- List comprehensions
- Generating number sequences with range() function

## Tuple

Mind model

- A few values of the same or different types
- Immutable
- What is a tuple useful for?

Operations

- Syntax to create using () and commas
- Access to items and unpacking

Extra questions

- To we want to name fields in a tuple?
- Is a list of tuples useful?

## Dictionary

Mind model:

- Mapping of keys to values
- Significance - an extremely useful data structure
- So many things are represented as dictionary!

Operations:

- Syntax to create using {}, : and commas
- Adding, changing and dropping elements

## Review: operations with compound data structures

- Using `list`, `tuple` and `dict` constructor
- Access an element by an index or key
- Iterate over the elements
- Concatenate or join two data structures
- Using in comprehensions
- Nested data structures

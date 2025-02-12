# Basic Data Structures in Python

Python provides integers, real numbers, strings, and booleans as built-in data types.

Examples: `1`, `-5`, or `450` are values of integer type. `36.6` or `0.05` are float values. `"This is some text"` is a string.

::: details Which types? An exercise in logic.

What objects around you can be represented by integers, floats, and strings? Pick a value and describe what it means—what kind of information does it contain, what object is it related to, and why is this information important?

Fill in the table below with your own examples of values and what they mean. Explore an answer by Aisha from Nigeria but think of other values and their meanings.

| Value Type | Value                 | Meaning                                                               |
| ---------- | --------------------- | --------------------------------------------------------------------- |
| String     | `"Things Fall Apart"` | Famous book by [Chinua Achebe][achebe].                               |
| Float      | `28.5`                | [Average temperature][temp] in Lagos in February.                      |
| Integer    | `5`                   | Number of cities with over 2 million [inhabitants][urban] in Nigeria. |

[temp]: https://en.wikipedia.org/wiki/List_of_cities_by_average_temperature
[achebe]: https://drloisjeremygreene.substack.com/p/book-review-10
[urban]: https://population.un.org/wup/downloads?tab=Urban%20Agglomerations

::: details Got stuck? More clues about types here.

Sometimes the question seems too trivial, and no quick answer pops to mind.

- Floats are usually something you can measure with precision or the result of a calculation, such as taking an average. What do people measure with precision?
- Integers relate to countable objects, like the number of people in a room or the students enrolled in a class. Integers are good for counting something that is not separated into parts.
- Strings are pieces of text, either just a word, a sentence, or a name for something. You can find a great deal of specific labels for objects that are represented by strings.

Think in terms of scenarios and extract what values will be integers, floats, or strings in each situation.

1. **University courses**. You are taking several courses this semester. A company recruiter would like to sort out students in your class by achievement. The university recently updated an exam retake policy to make it more flexible for the students, but not all students will make it to the next semester, and some will be expelled unfortunately.

2. **Trip planning**. You are planning a journey that involves flying to a country's capital, then hiring a car that you need to pay by distance traveled in local currency. You are in charge of a small group and need a car where everyone fits. The airline you fly allows you to sum up the bags in your group but will charge above limits.

3. **Gardening**. Some vegetable are definitely better if you grow them yourself. Consider the land area, yield and
   resources needed to grow some food yourself.  

You can also make a scenario of your own that can be described with integers, floats, and strings, and write out the short text and value descriptions. Alternatively, write the values first and [make an LLM compose][llm] a short story around them. Check if it makes sense or sounds ovel. You can also adjust the prompt to make it more fun to read and work on.

[llm]: /before-code/use-LLM

:::

## Printing values

Your Python programs can show information on a screen using `print()` fucntion.

### Say hello

The mother of all programs is [printing `"Hello, world!"`][hello]
to show your that programming environment finally works.

We will do the same using [several major Nigerian languages][ng-post].

[hello]: https://rosettacode.org/wiki/Hello_world/Text#Python

[ng-post]: https://nln.gov.ng/news-details.php?title=National%20Library%20Introduces%20Map%20of%20Nigerian%20Languages%20%20&post_Id=94

Run the code below by pressing the :arrow_forward: button. Delete and change some code to print a greeting in another
language of your choice and write a comment what that language is.

```python
# Nigerian Pidgin
print("How far, world!")

# Hausa
print("Sannu, duniya!")

# Yoruba
print("Kaabo, aye!")

# Igbo
print("Ndewo, uwa!")
```

<Editor id="i-pidgin" />

### Print several things

`print()` will accept one or several values to print
and display them on a screen when you run the program.

You can combine numbers and strings separated by commas
for printing.

```python
print("There are", 5, "very big cities in Nigeria. They are:")
print("Lagos")
print("Kano")
print("Ibadan")
print("Abuja")
print("Port Harcourt")
```

<Editor id="i-big-5" />

We will soon learn how to make this code more compact and reusable with lists and a `for` loop.

### Add extra information

The code below prints a book name. Add extra infromation to the program output:

- state if it is a book, a novel, a textbook or another type of work,
- who is the author,
- the year it was published or released.

Use commas to print several values on one line together or add
a new `print()` call if you choose to print something on a new line.
Consult the excercises above and below when in doubt 
about modifying this code.

```python
print("Things Fall Apart")
# is it a book?
# author?
# year?
# memorable fact? quote? character?
```

<Editor id="i-fall" />

### Display exchange rate

We haven't printed any float numbers yet
and we can practice with currency exchange rates 
as precision there is very important.

Make the following changes in the code below:

1. Add more messages explaining what the printed number means.
2. Find latest exchange rate using information from 
   [the Central Bank of Nigeria](https://www.cbn.gov.ng/rates/ExchRateByCurrency.html)
   and copy it into the program code.
3. Write a comment in code about the change you introduced, mention the date. 

```python
print("Naira is the currency in Nigeria, NGN for short.")
# This is a NGN per 1 USD exchange rate 
print(1508.7017)
```

<Editor id="i-naira" />

::: details More experiments with currencies.

1. Change the currency pair — for example, 
   provide naira to South African rand exchange rate.
2. Change code to work with a different national currency:
   - choose a domestic (base) currency,
   - pick another currency for the exchange pair,
   - find the ticker of symbols for the two currerncies,
   - find exchange rate information,
   - make sure you understand the terms of exchange,
   - update the program code.
3. Read about the [Polish zloty Google glitch][zloty]
   and demonstrate you can find and use official exchange rate 
   statistics for currency conversion.
4. Print an advertisement for an exchange rate outlet
   and state "we buy" and "we sell" rates as complete sentences.
   Make sure the outlet stays profitable.
5. Think of ways to make this program even more useful. 
   What kinds of new information and features can it provide?

[zloty]: https://www.barrons.com/news/google-glitch-undervalues-poland-s-zloty-by-a-fifth-b4d695e7

::: details A bigger dive into foreign exchange (FX) market.

First, consider if the currency exchange rates provided by local banks are favorable to clients.
Look for information to support your opinion. What do the banks make money from in exchange rate operations?

Second, explore fintech startups similar to [Wise](https://wise.com/gb/currency-converter/ngn-to-usd-rate?amount=1) 
or [Paytm](https://paytm.com/tools/currency-converter/amount-1-from-usd-to-ngn/). 
What services for foreign exchange do they offer? Are their exchange rates different?

Third, think of a fictional strategy involving free trades on any published exchange rates and calculate your profits.
You can trade with a central bank, commercial banks and fintech startups on any rate they advertise in Internet.

:::

## Knowledge areas

### Numbers

- Should I use an integer or a float?
- Arithmetic (`+`, `-`, `*`, `/`) and math operations.
- Operation precedence and using ().

Extra topics:

- Generating random numbers.
- Floor division and remainder.
- Float point arithmetic.

### Strings

Where strings are useful:

- messages to and from the user,
- saving and loading text information,
- making prompts to large language models,
- comments and docstrings in program code.

How to define:

- Define a string with double ("") or single ('') quotes.

Operations:

- Concatenate or repeat a string with `+` and `*` operators.
- String operations and methods: len(), lower(), upper(), strip(), replace(), split(), join(), find(), count().
- Access individial charactes by zero-based index or parts by slices.
- Strings are immutable in Python.
- Combine text and variables using f-strings.

Where can I get a new string from?

- Hardcoded in source code: a string written in program code.
- User input at prompt: get a strings from the user with input() function.
- Read from a local text file: use `Path("somefile.txt").read_text()`. Write to a file.
- Read from the internet: use `httpx` or `requests` to fetch web page content.
- Extra option: get from command line arguments through `sys.argv`.

Extra topics:

- Escape characters and multiline strings.
- Character sets: ASCII and utf-8.
- Emojis are strings too!
- Wildcards and regular expressions.
- Output formatting.

### Comparisons and boolean values

Topics:

- Equality and other comparison operators.
- Boolean values `True` and `False`.
- Using to branch brogram execution.

Examples:

`360 > 270` is an expression that will
evaluate to a boolean value `True`, and
`0 == 1` will evaluate to a `False`

## Converting between types

Python is a dynamically typed programming language which means it tries to handle type conversions for you.
However, there are some situations where you need to convert between types yourself.

One example is the `input()` function that always returns a string even if you might have wanted a number.
Run the code below of a very basic addition script and see if it works as intended.
Try entering words instead of numbers and see how the script behaves.

```python[Needs fix]
a = input("Enter the first number: ")
b = input("Enter the second number: ")

# FIXME: must convert a and b types.
print(f"The sum of {a} and {b} is:", a+b)
```
<Editor id="i-add-broken" />

::: details A calulator that actually adds up (solutions and jumps across topics)

A quick way to fix the calulator behaviour is to add a `float()` constructor:

```python[Quick fix]
a = float(input("Enter the first number: "))
b = float(input("Enter the second number: "))
print(f"The sum of {a} and {b} is:", a+b)
```
<Editor id="i-add-fixed" />

The code above is short but not very streamlined. You might want to control 
where an error may happen on invalid string, and choosing to coerce type 
to an `int` instead of `float` where you can. 

The refactored code is below. It is longer but will tell you which of inputs is wrong
and a `"3"` will will convert to a `3`, not `3.0`.

```python[Refactored]
def to_number(s: str) -> int | float | None:  
  if s.isnumeric():
    return int(s)
  try:
    return float(s)
  except ValueError:
    return None    

u1 = input("Enter the first number: ")
u2 = input("Enter the second number: ")
a = to_number(u1) 
b = to_number(u2)

if a and b:
    print(f"The sum of {a} and {b} is:", a+b)

for (u, x) in ((u1, a), (u2, b)):
    if not x:
       print("Not a number:", u) 
```
<Editor id="i-add-refactored" />

Next, we can make a calculator sum the numbers until the user presses `q` and `Enter`. 
This will require some form a `while` loop. We encourage you to write this code as an excercise. 

The `while` loop we wrote ourselves was rather cluncky. As an alternative we thought the numbers 
we are obtaining can be grouped in a list data structure using a custom class. 
In code below the `Series` class takes away some of the logic from inside the `while` loop and makes the iteration cleaner.
`Series` also overrides the `__str__` method and inherits the `__sum__()` method that makes printing more concise. 
Note that `.accept()` method is pure which means we can put it under a good unit test. 
All of `print()` and `input()` work is still kept inside the loop.
It makes sense to grouped the impure part together in one place. 
User messages are also easier to access and modify if they are in one code block.

However do treat this code as a demonstration, not a paramount goal as we did make some tradeoffs. 
You have to be confortable writing code with classes and be familiar with `UserList` 
as well as favour OOP in general to settle on this version of the code.
You can also write OOP code that will be less useful and readable,
so the change of paradigm alone is no guarantee of a good coding solution.

```python[Perpetual]
from collections import UserList

def to_number(s: str) -> int | float | None:  
  if s.isnumeric():
    return int(s)
  try:
    return float(s)
  except ValueError:
    return None

class Series(UserList):
   def accept(self, text: str) -> bool:
    """Append a number to the list if input is valid."""
    x = to_number(text)
    if x is not None:
       self.data.append(x)
       return True
    return False

   def __str__(self):
    return ", ".join(map(str, self.data))

s = Series()
print("Enter numbers for addition, enter q to quit.")  
while True:
  text = input("Enter a number: ")
  if text.startswith("q"):
    break
  if not s.accept(text):
    print("Not a number:", text)
print("Numbers:", s)
print("    Sum:", sum(s))
 ```

<Editor id="i-add-perpetual" />

We now have a software verson of an [adding machine](https://www.computerhistory.org/collections/catalog/X535.84).
As follow-up excercises you can:

- make `accept_many()` method of `Series` class that will encapsulate the loop,
- write similar code with `while` but no classes,
- stop iteration when input is `0` or is an empty string and adjust messages for the user accordingly,
- think of a strategy to define and pass on user messages if you want a calculator to talk in Spanish or German,
- do other arithmetic or math operations taking note of operation precedence and brackets which should take you to a classic "Write a calculator" excercise.

:::
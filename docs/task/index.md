# Say hello with emojis

## Your first `print()`

You can run simple code snippets on this site without leaving the browser. 
Run the code below using the :arrow_forward: button. 
You are welcome to change the code, run it again and see how it worked. 

```python
print("This line will get printed after you run the code.")

```

<Editor id="i-hprint" />

::: details What can I change in this code?

1. Convert code above to [a classic "Hello, world!" program](https://en.wikipedia.org/wiki/%22Hello,_World!%22_program).  
2. Assign the greeting text to a variable `message` and print its value.
3. Pick a different meaningful message to print — a slogan, a motto or
   [a quote](https://www.cs.yale.edu/homes/perlis-alan/quotes.html)
   you may want to share. 
4. Make `message` a [dictionary](https://docs.python.org/3/tutorial/datastructures.html#dictionaries) where `en`, `kz` and `ru` are keys   
   and greeting text are values. Print message in a different language.
5. Make an [LLM]() extend your code to other spoken languages. Check if LLM
   output is correct.  

:::

## Pick a random emoji

The symbols you can print or not just letters, numbers or punctuation
marks, but also emoji symbols. You need copy and paste them to 
your code from somewhere on the internet like
[this list](https://unicode.org/emoji/charts/full-emoji-list.html).

There several new additions in code that allow 
choosing a random item from a list and reusing the print statement.
Run the code several times to see the different emojis.

```python
from random import choice

emojis = ["😊", "🎈", "🌟", "🐍", "👩‍💻", "👨‍💻"]

def hprint(message):    
    """Print a message with a random emoji."""
    print(message, choice(emojis))

hprint("I can write and run Python code")
hprint("I can do programming")
```

<Editor id="i-hprint" />


Proceed to the exercises below, but note that code you write will not be saved
after you close the broswer — treat these excercises as a quick sketch.

::: details Change some code

1. Modify the emoji list — shorten or extend it with more symbols. 
2. Add more text:
   - an additional message in plain text,
   - new text followed by a new emoji,
   - some text preceded by an emoji.
3. Print several emojis together instead of one per line.
4. Write comments in code about the changes you made.

:::

::: details Research the code

1. Identify language constructs used:
   - functions,
   - variables,
   - expressions and values,
   - a function docstring.
2. Look for the official documentation for the standard library modules and functions:
   - `random.choice`,
   - `datetime.date`,
   - `sys.version`.
3. Think of new ways to change the behaviour of this small program.

::: details More exercises

1. Add today's date to the printed messages. Start with code below.

```python 
# starting example
from datetime import date
dt = date.today()
```

2. Optional: change the date format to `DD.MM.YYYY`.
3. Refactor `hprint` to accept emoji list as a function argument.
4. Make each of the messages display different sets of emoji,
   for example happy and sad or day and night emoji sets.
5. Print the Python version number (like `3.12.1`)
   that was used. Retrieve it with `sys.version` or `sys.version_info`. 
```python
# starting example
from sys import version
print("My Python version is", "...")
```
:::

::: details Data science unexpected

1. When running original code did you get the two emojis often?
   What is the theoretic probability of displaying two same emojis?
2. Can you estimate this probability using a simulation?
   Write some code that geneates many emoji pairs
   and count the number and proportion of occurences
   when two emojis are the same.
3. What is the probability to encounter two emojis of a shape 🎈
   when running the original code? 
   Prove your claim with theory or simulation.

:::

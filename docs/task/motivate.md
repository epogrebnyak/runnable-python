# Motivate

> Want to learn Python? Will not accept "No" as an answer.

Run the code below using the :arrow_forward: button, 
and see if you can finish the conversation by agreeing to learn Python. 
Press `Enter` after typing your answer each time.

```python
def motivate(language="Python"):
  while True:
    answer = input(f"Would you like to learn {language}?\n")
    if answer.lower().startswith("yes"):
      print("Full support and good luck to you!")
      break
    else:
      print("Sorry, I cannot accept that as an answer.")

motivate()
```

<Editor id="i-motivate" />

::: details Exercise: Modify existing code

1. Make a small change in line 10 to motivate learning C or Rust instead of Python.
2. Add some [emojis](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.mjs) ⛳ to program messages.
3. Add a counter of attempts:
   - print current attempt number,
   - print total number of attempts at program end,
   - limit number of attempts allowed.
4. Make the program work for a human language:
   - accept 'yes' in a different language (for example, 'oui' in French),
   - print a few additional messages in this new language,
   - add motivational quotes to the program messages.
5. Change line 4 to make sure an answer like
   `You win, yes!` also stops the program.
   (Hint: look for `yes` anywhere in the `answer`.)
6. Accept the letter `Q` or `q` as a command to quit
   the program without extra message.
7. Can the program use different messages on first and other attempts?
8. Suggest alternatives like "learn in depth", "make acquaintance", etc.,
   and provide some useful fact depending on the answer.

:::

::: details Exercise: Talk about code

1. Explain in plain words what the program above does.
2. What are the main steps in this program?
3. Identify in the code:
   - infinite `while` loop with `True` condition
   - `break` command,
   - conditional statements with `if`,
   - a new function definition with a default argument
   - a function call,
   - `print` and `input` for user interaction,
   - an f-string, and
   - a chain of string operations on the `answer` variable.

:::

::: details Exercise: Reuse the code for a different app

How about making a really useful, but minimal programming
reference that compares Python to other programming languages?

You can reuse the `motivate(language)` approach from above.
Make sure you change the data structures and allow extending 
the reference to even more programming languages.

You can make this a reference for textbooks, songs, paintings, 
travel destinations, or other objects or matters that interest you most. 

Things list for a programming language reference 
are listed below. Pick just a few items that are most spectacular. 
Same approach applies if you make a reference in other subject - juggle with just a few categories first.  

- How old is this programming language?
- How popular is it, and how is it measured?
- What is the latest version?
- Most popular software written in this language.
- Trending package on Github this week.
- A package with most stars on Github.
- Programming paradigms used.
- Ancestors and competitors.
- Link to official docs or a distribution.
- Where to download it from.
- Is there a language standard (there is for C and SQL).
- Best references or free books.
- Sets of exercises and exercise sections. 
- Code example (but please not a "Hello, World").
- An example from [Rosetta Code](https://rosettacode.org/wiki/Rosetta_Code).
- Other cool things that differentiate programming languages that you can think of.

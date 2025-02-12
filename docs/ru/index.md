# Добро пожаловать!

Это руководство на русском языке.

Python должен быть легким для изучения и позволять вам приобретать хорошие навыки программирования и рассуждения, присоединяться к сообществам или создавать их, определять, где программирование делает вас более продуктивным, и применять свои новые навыки на практике.

## Your Journey Begins

Before starting a big journey, [remember that](https://www.gutenberg.org/cache/epub/49965/pg49965-images.html):

> A tree too big to embrace is created from the tiniest shoot.  
> A terrace of nine stories rises from a pile of dirt.  
> A journey of a thousand miles begins from under the feet.

You may want to use parts of this quote for your next exercise.

## Task One

Run the code below and see if you can finish the conversation
by agreeing to learn Python.

```python
def motivate(language="Python"):
  while True:
    answer = input(f"Would you like to learn {language}?\n")
    if answer.lower().startswith("yes"):
      print("Full support and good luck!")
      break
    else:
      print("Sorry, I cannot accept that as an answer.")

motivate()
```

<Editor id="i-motivate" />

::: details Exercises: Modify the code

1. Make a small change in line 10 to motivate learning C or Rust instead of Python.
2. Add some [emojis](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.mjs)⛳ to program messages.
3. Add a counter of attempts:
   - print current attempt number,
   - print total number of attempts at program end,
   - limit number of attempts allowed.
4. Make the program work for a human language:
   - accept 'yes' in different language (for example 'oui' in French),
   - print a few additional messages in this new language,
   - add motivational quotes to program messages.
5. Change line 4 to make sure an answer like
   `You win, yes!` also stops the program.
   (Hint: accept `yes` anywhere in the `answer`.)
6. Can the program use different messages on first and other attempts?

:::

::: details Exercises: Talk about code

1. Explain in plain words what the program above does.
2. What are the principal steps in this program?
3. Indentify in code:
   - infinte `while` loop with `True` condition
   - `break` command,
   - conditional statements with `if`,
   - a new function definition with default argument
   - a function call,
   - `print` and `input` for user interaction,
   - an f-string, and
   - a chain of string operations on `answer` variable.

:::

::: details An expert exercise

How about making a really useful, but minimal programming
reference that compares Python to other programming languages.

You can reuse `motivate(language)` approach from above
and provide some extra information about the selected programming language.

Make sure you change data structures used and allow extending the
reference to more programming languages.

Things to consider for the reference (pick just a few items):

- How old is the programming language?
- How popular is it and how to measure it?
- What is the latest version?
- Most popular software written in this language.
- Programming paradigm.
- Ancestors and competitors.
- Link to official docs.
- Where to download it from.
- Best references or free books.
- Code example (but please not a "Hello, World").
- An example from [Rosetta Code](https://rosettacode.org/wiki/Rosetta_Code).
- Other cool things you can think of.

:::

## Happy Number

A school bus issues random number tickets from 1 to 9999.
If the sum of first two digits on the ticket is equal
to the sum of last two digits it is a lucky number.

Example:

- `3544` is lucky because both `3+5` and `4+4` equal `8`, and
- `0005` is ordinary.

See if you can fix the code below. Follow the comments
in code to find out what is critically wrong and needs
urgent change and what can be an improvement later.

```python
from random import randint

def issue_ticket():
    return randint(1, 9999)

def is_lucky(ticket_number):
    # TODO: it's broken here -
    # the ticket never considered lucky
    return False

# IDEA: iterate 5 time or until a happy number
for _ in range(5):
    ticket_number = issue_ticket()
    # FIXME: adjective can be a seprate function
    if is_lucky(ticket_number):
      adjective = "lucky"
    else:
      adjective = "ordinary"
    print(ticket_number, "is", adjective)
```

<Editor id="i-happy" />

::: details Data science where it's least expected

1. Can you estimate how many happy numbers are there in total?
   If I take a 100 rides, what is the typical number of
   happy tickets I can get?
2. Make your rewards point system and increase the rewards
   if the ticket is _superlucky_ under your own definition.
3. Can you run some lottery using these tickets?

:::

## Care about PM?

Imagine you are a person who is not ready yet for coding but you really like the idea of helping to design new programs that do something differently.

Use the steps below to practice specifying and prioritizing your ideas.

This is an exercise in product management (PM) where we hope psychology and pedagogy students can come up with even deeper insights about a product hypothesis and user behaviors.

::: details Motivation and product management

1. Is there any theory where motivation to do something comes from?
2. How can this theory be applied in for this programming example?
3. Write out things you might want to implement with in code
   in a short format that is easy present and understand (e.g. one idea
   = one sticker).
4. Discuss with peers and prioritize ideas. The best ones that
   are the ones that are easy to implement and have most impact.
5. What idea gained most support? Was this something you expected?
6. If you had this idea implemented how would you measure it
   worked. What data would you needed to collect?
7. What existing computer programs or apps help you manage your motivation?

:::

## Use AI Wisely

In short, the first step is to pick any language model with unrestricted access, like [Deepseek](https://www.deepseek.com/) or [Mistral](https://www.mistral.ai/), and start chatting with them about code. Further steps are a choice: **cheating** or **building**.

**Cheating** is asking an LLM to do the exercises and presenting them as your own work. Unless you are under any special pressure to do so, this is a waste of everyone's resources
— yours, the course authors' and instructors, and even the LLM's load and tokens.

**Building** involves making an LLM to work on the code you wrote and were able to run.
You can use an LLM to:

- challenge and enhance your programming decisions;
- evaluate code quality and provide refactoring suggestions;
- create extra tasks and exercises for you.

Your next step would be moving from chat LLMs to code assistants like
[GitHub Copilot](https://github.com/features/copilot),
[Cursor](https://cursor.sh/),
[zed](https://zed.dev/) and
[Replit Ghostwriter](https://replit.com/site/ghostwriter), among others.

Also pay attention to identifying tasks that an LLM cannot handle well, such as higher-level planning, getting feedback from people, making specifications, designing experiments and evaluations, customization, and handling uncertainty in general.

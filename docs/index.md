# Your journey begins

<img src="/elevated_tree2.png" alt="Tree Image" style="float: right; margin: 10px;">

Before starting a big journey, remember:

> A tree too big to embrace is created from the tiniest shoot.  
> A terrace of nine stories rises from a pile of dirt.  
> A journey of a thousand miles begins from under the feet.

You may want to use parts of this [quote](https://www.wussu.com/laotzu/laotzu64.html) for your first exercise.


**The Guessing Game**

Finally, you can make a guessing game by supplying some facts about a programming language and make the user guess which one it is. It would be nice if you can compare [R](https://www.r-project.org/), [Python](https://www.python.org/), [Julia](https://julialang.org/), [MATLAB](https://www.mathworks.com/products/matlab.html), [Mojo](https://www.modular.com/mojo), [SQL](https://www.w3schools.com/sql/), [C](https://www.open-std.org/jtc1/sc22/wg14/), [Ruby](https://www.ruby-lang.org/en/), and [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) for example.

A simple guessing game may supply facts about a programming language 
and accept an answer about which language it is after each fact. You can also 
split the facts into less obvious ones and more direct hints, providing harder clues first
to make the game more challenging. You can extend this game to spoken human languages too.

:::

## Happy Number

A local bus company, in collaboration with city authorities, aims to enhance passengers' math skills. 
Next month they will offer rewards for solving simple arithmetic problems.

The company adopted a "happy number" policy: Tickets will have a random four-digit number stamped on them, ranging from 1001 to 9999. If the sum of the first two digits equals the sum of the last two digits, it is considered a lucky number.

Example:

- `3544` is lucky because both `3+5` and `4+4` equal `8`, and
- `1275` is ordinary because `1+2` equals `3` and `7+5` is `12`.

The company hasn't decided on the rewards yet and left it to the community college to determine the next steps.
The college had a plan, but the final code was lost, leaving only an intermediate draft.
Review the comments in the code to identify urgent changes and potential improvements.

```python
from random import randint

def issue_ticket():
    return randint(1, 9999) # FIXME: should start with 1001.

def is_lucky(ticket_number):
    # TODO: we did not know how to implement it
    #       ticket is always ordinary
    return False

# Iterate 5 times and print the numbers 
print("Sample numbers:")
for _ in range(5):
    ticket_number = issue_ticket()
    # FIXME: text message can be a separate function
    if is_lucky(ticket_number):
      adjective = "lucky"
    else:
      adjective = "ordinary"
    print(ticket_number, "is", adjective)
```

<Editor id="i-happy" />

::: details How to proceed with this excercise 

**Does it work?**

`is_lucky()` should check if the number fits the definition of a lucky number.
Obviously it not working in draft code - for any given number it will return `False` and never return `True`. 

**Think of programming steps without writing code**
 
Implementing `is_lucky()` involves several steps -- accept a number, split it properly 
it into two parts and digits, sum up the digits in pairs and compare the sums.  
   
**Difficulty level**

While trivial for an established programmer, this task may be a challenge for a newbie. 
Your best result is not to guess what magic lines 
of code hopefully do the proper work but to be able to reason about 
the steps, their start and finish, and the point where you can check
the results are correct.
   
**Is there just one solution?**

Depending on the style of programming, your solution for `is_lucky()` may differ.

The solution may also vary in detail; for example, does it work on other 
number formats like `123321` or even bigger sequences, or is it
just a quick check for four digits.

**Does the solution generalize to future needs?**

The extended solutions may have a resolution rule 
for a number like `45890`, where the count of digits is odd or even, 
or work on alphanumeric sequences like `A3D5`. While these extensions 
are out of scope for the original task, they will be useful if you work 
on a larger class of similar problems. 
   
**Next steps**

Practice describing the algorithm on paper and write some parts of it in code 
and submit for review.
If you are stuck, please try to be specific about which part of the algorithm 
you have problems with and what have you tried so far.

::: details Sets of happy excercises with numbers

1. Fix the lucky number generator:

- Does the `issue_ticket()` function work up to the specification? What needs a fix? Can you do it?

::: Advanced excercises

2. Alter the ticket number generator:

- Can you make a list of all ticket numbers that can be issued?
- Does a number like `7777` seem rather unique? Is it useful 
  for practicing an addition operation? Make a list of ticket numbers
  that excludes the very easy tasks like `2002`. Write a new 
  function `issue_smart_ticket()`.

3. Alternative rules

- Think of the original objective of enhancing math skills. What other 
  arithmetic operations you can have practiced with numbers?
- Add reward points based on the difficulty of the arithmetic operation. 

4. Deeper quest for happiness


5. Language interfaces

- The city speaks two official languages. Can you make the program speak them both? 
- Imagine the city is a tourist center, and you want to add even more 
  languages to the system. How would this alter your code?     

6. Probabilities with tickets

- Can you estimate how many happy numbers there are in total? 
  If I take 100 rides, what is the typical number of happy tickets I can get?

- Under the initial set of rules what is the probability to get 
  a happy number with a random ticket?

- What is the minimum number of rides to get a happy ticket with 
  a 95% guarantee?

7. Rewards and "gas" for calculations 

- How much "gas" would you need to calculate the probability of getting a happy ticket?
- Make your rewards point system and increase the rewards
  if the ticket is _superlucky_ under your own definition.
- Can you run some lottery using these tickets? What would make a lottery solvent?

:::


<!--
Make functions that will do the following:

- draw a line of `n` characters using a default 
-->

## Care about PM?

Imagine you are a person who is not yet ready for coding
but really likes the idea of helping to design new programs 
that will do something differently.

Use the steps below to practice specifying and prioritizing your ideas.

This is an exercise in product management (PM), 
where psychology and pedagogy students, in particular, 
can come up with even deeper insights 
about a product hypothesis and user behaviors.

::: details Motivation and product management

1. Is there any theory about where motivation to do something comes from?
2. How can this theory be applied to this programming example?
3. Write out things you might want to implement in code
   in a short format that is easy to present and understand (e.g., one idea
   = one sticker).
4. Discuss with peers and prioritize ideas. The best ones 
   are those that are easy to implement and have the most impact.
5. What idea gained the most support? Was this something you expected?
6. If you had this idea implemented, how would you measure its success?
   What data would you need to collect?
7. What existing computer programs or apps help you manage your motivation?

:::

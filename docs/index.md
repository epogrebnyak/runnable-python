# Start Python Practice

**Start from printing to screen to a grade**. 
Our exercises start from printing text to screen and asking 
for the user input and lead to making a program that 
can give you a test for this course and evaluate your final grade
(hopefully an A+).

**Make building blocks**. Each exercise is a building block 
for the final testing application and at each step we learn 
some new useful part of the Python syntax and programming concepts.

**Read the docs**. For preparation visit the Python 
[official documentation](https://docs.python.org/3/#) 
including the *Tutorial* and the *Python Standard Library* sections.
There is also [a course checklist](/resources/student-checklist)
that you can use for navigation by topic.

**Use LLMs wisely**. We will also use modern large language models
(LLMs) to judge how they help to learn programming and if they are
really smarter than us. We will use 
[Deepseek](https://www.deepseek.com/),
[Mistral](https://www.mistral.ai/),
[Gigachat](https://giga.chat/) and
[OpenAI](https://openai.com/)
models, check them out before the course start.

## Run code now

**All in your browser**. Your points of work will be the small boxes 
where you can edit the provided code examples or write you own code.

The code is runnable too - you do not need to leave your browser
or install anything on your computer for this course!

Run the code below using the ▶️ button.
Press `Enter` after typing your answer.
Make any edits to the code and run it again.

```python
# This is a demo program
print("Your course begins soon... Are you ready to start?")
answer = input("Type your answer and press Enter: ")
print("Proceeding with your", answer, "answer.")
```

<Editor id="i-start" />

::: details Ready for some excercises?

Depending on your level of programming experience 
you may be able to do the following tasks.

1. Translate the printed messages to other spoken language.
2. Can you spot where the variable `answer` is used?
   Change the variable name `answer` to `response`. 
   and make sure the program runs again.
3. Print a message `Your answer was` followed by 
   the provided answer.  
4. Evaluate if the answer was short or long. Use different
   criteria for length (eg number of characters or words).
   Ask a broader question and insist on a longer answer.
5. Ask if the student visited the Python docs and which
   LLMs the student prefers. Print it is a good choice 
   if LLM name is real.

::: INFO 

The in-broswer Python editor functionality is possible through the [Pyodide project](https://pyodide.org/en/stable/) and [the VitePress add-on](https://github.com/zqianem/vitepress-python-editor) created by Em Zhan.

:::

## Course structure

The course proceeds with creating small building blocks that 
you should be able to reuse for the final program:

| Block           | Description                          | Link                          |
|-----------------|--------------------------------------|-------------------------------|
| `greet()`       | Hello and get the user name          | [Link](/task/greet)           |
| `randomize()`   | Pick a random emoji from a list      |                               |
| `motivate()`    | Try escape the `while` loop          | [Link](/task/motivate)        |
| `quote()`       | Fetch a quote from a list or dictionary             |                |
| `decorate()`    | Print ornaments or underline headers                |                |
| `fill()`        | Fill in the blanks test              |                               |
| `count()`       | Offer a `2+2` excercise              |                               |
| `verify()`      | True or false test                   |                               |
| `score()`       | Calculate a score and give a letter grade (A-F)     |                |
| `run_test()`    | Provide a random set of questions as a final test   |                |
| `delay()`       | Make a user wait for the results but not too long   |                |
| `stamp()`       | Put a date, sign and save            |                               |
| Real or not?    | Simplifications we made              |                               |
| What next?      | Ideas about program enhancements     |                               |

The final set of blocks will appear on the sidebar menu.

## Motivational quote

<img src="/elevated_tree2.png" alt="Tree Image" style="float: right; margin: 10px;">

Before starting a big journey, remember:

> A tree too big to embrace is created from the tiniest shoot.  
> A terrace of nine stories rises from a pile of dirt.  
> A journey of a thousand miles begins from under the feet.

You may want to use this [quote](https://www.wussu.com/laotzu/laotzu64.html)
as part of your [exercises](/task/quote).

## More information 

- **Who is this course for?** Anyone who wants to 
  practice Python coding excercises without setting 
  up a programming environment.

- **Can I study it myself?** The excercises are fit for
  self-study but you will have better progress if
  you get feedback on your solutions.
  For a guided course with an instructor or mentor,
  check out our [open events](/events).

- **Can I use your excercises in my class?** As a teacher
  in a school or university you may
  [freely use this material](/terms-of-use)
  for your own course.

- **Are there any translations?** Soon coming for the Kyzgyz
  and Russian languages.

<!--

The tasks inside the course are quite short but each has own focus.

Part       | Slogan                             | Focus 
-----------|------------------------------------|------------------------------------
**Greet**    | But be discreet                    | `random.choice` with a list.
**Motivate** | Never accept 'no' as an answer     | Function, `while True` loop.
**Count**    | Formulas + an adding machine       | Accrue `input()` to a list of numbers. 
**Write a text** | Make it a contract or a poem   | Multiline, f-strings and `date`.
**Print**    | Ornaments, shapes, and a maze      | Repeated sequences.
**Guess**    | An educated one                    | Narrow search width. 
**Assess**   | Your own 'true or false' finals    | Booleans and dictionaries.

-->
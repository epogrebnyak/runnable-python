# All exercises

What makes a good excercise?

- starts short and can evolve;
- does quite a bit with less code;
- needs different skills to complete it (research, copy, try, change, debug etc.);
- relates to real-world tasks;
- you know when it's finished, an excercise has an end.

---

An excercise may involve several of the following steps:

- code: run and explain how it works or why does not work,
- talk: identify Python language constructs and idioms in provided code,
- code: change the code slightly or refactor under given directions,
- talk: plan for bigger change,
- code: reuse the code for a new project,
- talk and code: tackle a data science questions (un)related to code.

Python Editor excercises with highlights:

- [I can code (with emojis)](/before-code/run-python#run-it-in-this-window)
  - print two text messages and random emoji,
  - change emoji printing rules,
  - estimate probability to see a specific emoji. 
  
- [You must agree to learn Python](/#task-one)
  - `motivate()` function with user input;
  - small changes in script behavior;  
  - recycle to make a reference app about other programming languages or other topics.

- [Happy Number Challenge](/#happy-number)
  - generate random ticket numbers;
  - implement `is_lucky()` function;
  - explore probability and statistics.

- [Shapes and Lines](/#shapes-and-lines)
  - create string with patterns using loops;
  - change provided code with `itertools` into pure Python code; 
  - design custom ornament patterns.

- [Console Input and Output](/#console-io)
  - practice using `print()` and `input()` functions;
  - handle user input and output effectively;
  - explore formatting and string manipulation.

- [File Operations](/#file-operations)
  - read from and write to local files;
  - use `pathlib.Path` for file handling;
  - manage file paths and directories.

- [Web Requests](/#web-requests)
  - make HTTP requests using `httpx` or `requests`;
  - fetch and process data from the web;
  - handle JSON and other response formats.

- [Command Line Arguments](/#command-line-arguments)
  - parse command line arguments in Python;
  - create scripts that accept user input from the command line;
  - automate tasks using command line tools.

  

## The logic of excercises 

The excercises have three parts to them, starting from a minimal example 
and paths to go back to prerequisites or go forward 

```
       Minimal example  
(runnable, short, somewhat motivating)     
     /               \  
    v                 v 
Prerequsite          Follow up tasks
excercises           1. Change or fix a little bit of code
(if needed)          2. Look for edge cases or generalisations 
and links            3. Add more data and richer detail
to own language      4. Productize:
reference             - move to solving more real problems 
                      - package in more useable form (eg library)   
                     5. Reuse the code in:
                       - other examples
                       - other domains or tasks
```                       
-----------

1. A minimal (and hopefully motivating) example that exposes a working but unfinished code. The three front page examples are unfinished in different ways:
   - "Do you want to learn Python" example is complete but easily configurable and extensible.
   - "Happy Number" is incompete and has a stub for a key logic component, the `is_happy()` function. 
   - Ornaments is implemented with `itertools` and suggest a rewrite in pure Python with more simple constructs.

   All examples are organised in functions with parameters a student may want to change
   and see the effects. The miniaml examples are short under 10-15 lines long, some
   care taken to separate the possible logic into several fucntions.

2. Even at a minimal example a new learner may get stuck and needs some help. This 
   help may from come links to the specofoc parts of our own language reference
   or sets of prerequisite excercises akin to sketches for the painting, smaller moves, or _pas_, that will make up a dance composition or [skating eights](https://en.wikipedia.org/wiki/Compulsory_figures) in figure skating. Beware the prequisite excercises 
   take years of training in other fields and may also take long time and focus in programming but everyone seems to be in a rush to skip them because they seem 
   a bit unfulfilling and didactic. 

3. Follow-up tasks start with small modifications to the code, such as running a function with different arguments to see how it behaviour changes. These tasks also offer space to think about how the code may develop further - through generalizing solutions or tackling edge cases. Even without writing code, one evaluate some paths that lead from an example to a product by asking how would this code apply in a real system or real situation? These shots into product space in frontend examples are:

    - make a expert system or a fact-check guessing game based on `motivate()` function;
    - what it takes to run happy number calculations in a smart contract and make it a lottery;  
    - can you assort ASCII-based ornaments by style or can you design a blueprint for a  tic-tac-toe type of a game?

   Finally, an acquired skill may transfer to other areas or neighboring examples, which we may call a "Look, we can use this code here too" moment.


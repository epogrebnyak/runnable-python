# Where do I run Python?

## Run it in this window

You can run simple code snippets on this site without leaving the browser. 
Run the code below using the :arrow_forward: button. You can rerun 
the code several times.

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

::: details Exercises with emojis and randomness

Proceed to the exercises below, but note that code you write will not be saved —
treat these excercises as a quick sketch.

**Change some code:**

1. Modify the emoji list — shorten or extend it. 
2. Add more text:
   - an additional  message in plain text,
   - some text followed by a new emoji,
   - text followed or preceded by an emoji.
3. Print several emojis instead of one per line.
4. Write comments in code about the changes you made.

**Research the code:**

1. Identify language constructs used (functions, variables, expressions, values).
2. Look for the official documentation for the standard library modules and functions:
   - `random.choice`,
   - `datetime.date`,
   - `sys.version`.
3. Think of creative ways to change the behaviour of this small program.

**More exercises:**

1. Add today's date to the printed messages. Start with code below.

```python 
# starting example
from datetime import date
dt = date.today()
```
2. Change the date format to `DD.MM.YYYY`.
3. Refactor `hprint` to accept emoji list as a function argument.
4. Make each of the messages display different sets of emoji.
5. Print the Python version number (like `3.12.1`)
   using `sys.version` or `sys.version_info`. 
```python
# starting example
from sys import version
print("My Python version is", "")
```

**Unexpected data science:**

1. In original code what is the probability of displaying two same emojis?
2. Can you estimate this probability using a simulation?
3. What is the probability to encounter two emojis of a shape 🎈
   when running the original code?

:::

See also:

- [JupyterLite](https://jupyterlite.readthedocs.io/en/stable/#try-it-in-your-browser) and [Marimo](https://marimo.io/) in-browser notebooks.
- [Pyodide](https://pyodide.org/en/stable/) provides an [online REPL](https://pyodide.org/en/stable/console.html) where you can run short commands.

## Remote environments

There are free programming environments where you edit, run and save your Python code,
either as [Jupyter notebooks](https://jupyter.org/) or an IDE to work with plain code.

### Jupyter notebooks

Notebooks are an excellent interface where you run by the cell and you can 
see the outputs. Notebooks are often used for scientific computations.

- [Google Colab](https://colab.research.google.com/) is an environment where you can run and store your Python notebooks.
- There is a whole industry of notebooks providers including [Kaggle Notebooks](https://www.kaggle.com/notebooks) for machine learning competitions, [Yandex DataSphere](https://datasphere.yandex.com/) and [many others](https://deepnote.com/compare). 

### Plain code

A more traditional way of programming is working with plain code.
There are free environments for this, often  based on 
a popular [VS Code][code] editor.

- Microsoft's [GitHub Codespaces](https://github.com/features/codespaces) is a computing   
  environment to run plain code files using [VS Code][code] editor and a terminal window.
- Startups like [repl.it](https://replit.com/) or [GitPod](https://www.gitpod.io/) 
  provide environments similar to Codespaces.

[code]: https://code.visualstudio.com/

## Local installation

Eventually, you'll want to have Python on your own computer. This will let you try out more complex tasks and have full control over your programming setup.

To start, go to the [Official Python Downloads page](https://www.python.org/downloads/) or try the [Anaconda Distribution](https://www.anaconda.com/products/distribution), which includes many useful packages.

After you install Python, you can check it by opening your terminal and typing:

```console
python --version
```

You'll also need to pick a [text editor or an IDE](before-code/editors) to write your code. Installing Python is usually straight-forward, but sometimes you might run into issues like having multiple Python versions, Python not being found in your `PATH`, or missing dependencies.
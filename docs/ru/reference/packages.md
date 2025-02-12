# Packages

## Overview

The program code can reside in plain text files or **notebooks**.

A file that has commands to do some job right away is called **a script**.  
A **module** has code that will be used, or **imported**, by other modules or scripts.

Many modules together constitute a **package**. Packages created by other people
need a help of separate program – **a package manager** – to appear on your system.

## Source Code

- A Python program code (source code, listing) is a plain text file with a `.py` extension.

- The code editors apply language-specific syntax highlighting to simplify reading and writing code.

## Scripts and Modules

- A **script** is a program file containing commands to perform a specific task. A **module** is a program file with functions, classes, or predefined variables that can be imported and reused by other modules or scripts.

- In small projects, a program file can serve as both a module and a script. The `if __name__ == "__main__":` idiom often helps to achieve this. It is similar to the `main()` entry point in other programming languages.

- When programming, you often start by making a script with runnable code, and
  then write some functions or classes that may be shared as module or a package.
  Python started as a scripting language but grew so much bigger!

## Packages

- A **package** is a folder containing several Python files (modules). For older versions of Python, the folder should have included a mandatory empty `__init__.py` file to be recognized as a package.

- Packages range from small individual projects to very large projects with many contributors and eveb sponsors. They are distributed and installed through the Python package manager, `pip`.

- Packages may depend on other packages and sometimes these dependencies break. `pip`'s mission is to keep packages on your computer or at least in a specific project in sync whenever possible.

- The terms "library" and "package" often used interchangeably.

## Distributions

- You can get access to many popular packages at once by installing a Python **distribution** like [Anaconda](https://www.anaconda.com/download/success) where packages with proper versions are already pre-installed.

::: details Excercise in open source strategy

Two companies have an interesting story and big impact on R and Python
ecosystems, they are RStudio (now [Posit](https://posit.co/about/analyst-reports/))
and [Anaconda](https://www.anaconda.com/why-anaconda).

Compare and contract their initial role in these ecosystems and strategy
where they moved next. Check out a strategy of a new company called
[Astral](https://astral.sh/blog), the maker of `uv` and `ruff` tools.

:::

## Notebooks

- [Jupyter](https://jupyter.org/) **notebooks** save both code and its output in a single file with a `.ipynb` extension. Under the hood they are JSON files with parts of code and saved outputs.

- Notebooks allow you to create and share documents that contain code, text, equations, charts, and visualizations. Notebooks are widely used in data science, machine learning, and scientific computing due to their interactive and visual nature.

- Coding in notebooks is similar to scripts, rather than modules. Notebooks do have an internal state that depends on which cells where executed. They are harder to manage in version control systems and to apply code formatting and testing (but data scientists would not care much and use them anyways for everything).

- Your choice between plain text code and notebooks depend on nature of programming work you will be doing but great if you can master both.

## Remote Programming Environments

- [Google Colab](https://colab.research.google.com/) is an environment where you can run and store your Python notebooks.

- Microsoft's [GitHub Codespaces](https://github.com/features/codespaces) is a computing environment to run plain code files using a popular VS Code editor and terminal window.

- Startups like [repl.it](https://replit.com/) or [GitPod](https://www.gitpod.io/) are similar to Codespaces, and there are some alternative notebook providers with free starting plans as well.

- All these services provide you a free and rather capable remote machines, great if you can learn to use them for learning and making good projects!

import{_ as a,c as o,o as t,a2 as r}from"./chunks/framework.CvwbFZHS.js";const g=JSON.parse('{"title":"Packages","description":"","frontmatter":{},"headers":[],"relativePath":"ru/reference/packages.md","filePath":"ru/reference/packages.md"}'),n={name:"ru/reference/packages.md"};function s(i,e,l,c,d,p){return t(),o("div",null,e[0]||(e[0]=[r('<h1 id="packages" tabindex="-1">Packages <a class="header-anchor" href="#packages" aria-label="Permalink to &quot;Packages&quot;">​</a></h1><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><p>The program code can reside in plain text files or <strong>notebooks</strong>.</p><p>A file that has commands to do some job right away is called <strong>a script</strong>.<br> A <strong>module</strong> has code that will be used, or <strong>imported</strong>, by other modules or scripts.</p><p>Many modules together constitute a <strong>package</strong>. Packages created by other people need a help of separate program – <strong>a package manager</strong> – to appear on your system.</p><h2 id="source-code" tabindex="-1">Source Code <a class="header-anchor" href="#source-code" aria-label="Permalink to &quot;Source Code&quot;">​</a></h2><ul><li><p>A Python program code (source code, listing) is a plain text file with a <code>.py</code> extension.</p></li><li><p>The code editors apply language-specific syntax highlighting to simplify reading and writing code.</p></li></ul><h2 id="scripts-and-modules" tabindex="-1">Scripts and Modules <a class="header-anchor" href="#scripts-and-modules" aria-label="Permalink to &quot;Scripts and Modules&quot;">​</a></h2><ul><li><p>A <strong>script</strong> is a program file containing commands to perform a specific task. A <strong>module</strong> is a program file with functions, classes, or predefined variables that can be imported and reused by other modules or scripts.</p></li><li><p>In small projects, a program file can serve as both a module and a script. The <code>if __name__ == &quot;__main__&quot;:</code> idiom often helps to achieve this. It is similar to the <code>main()</code> entry point in other programming languages.</p></li><li><p>When programming, you often start by making a script with runnable code, and then write some functions or classes that may be shared as module or a package. Python started as a scripting language but grew so much bigger!</p></li></ul><h2 id="packages-1" tabindex="-1">Packages <a class="header-anchor" href="#packages-1" aria-label="Permalink to &quot;Packages&quot;">​</a></h2><ul><li><p>A <strong>package</strong> is a folder containing several Python files (modules). For older versions of Python, the folder should have included a mandatory empty <code>__init__.py</code> file to be recognized as a package.</p></li><li><p>Packages range from small individual projects to very large projects with many contributors and eveb sponsors. They are distributed and installed through the Python package manager, <code>pip</code>.</p></li><li><p>Packages may depend on other packages and sometimes these dependencies break. <code>pip</code>&#39;s mission is to keep packages on your computer or at least in a specific project in sync whenever possible.</p></li><li><p>The terms &quot;library&quot; and &quot;package&quot; often used interchangeably.</p></li></ul><h2 id="distributions" tabindex="-1">Distributions <a class="header-anchor" href="#distributions" aria-label="Permalink to &quot;Distributions&quot;">​</a></h2><ul><li>You can get access to many popular packages at once by installing a Python <strong>distribution</strong> like <a href="https://www.anaconda.com/download/success" target="_blank" rel="noreferrer">Anaconda</a> where packages with proper versions are already pre-installed.</li></ul><details class="details custom-block"><summary>Excercise in open source strategy</summary><p>Two companies have an interesting story and big impact on R and Python ecosystems, they are RStudio (now <a href="https://posit.co/about/analyst-reports/" target="_blank" rel="noreferrer">Posit</a>) and <a href="https://www.anaconda.com/why-anaconda" target="_blank" rel="noreferrer">Anaconda</a>.</p><p>Compare and contract their initial role in these ecosystems and strategy where they moved next. Check out a strategy of a new company called <a href="https://astral.sh/blog" target="_blank" rel="noreferrer">Astral</a>, the maker of <code>uv</code> and <code>ruff</code> tools.</p></details><h2 id="notebooks" tabindex="-1">Notebooks <a class="header-anchor" href="#notebooks" aria-label="Permalink to &quot;Notebooks&quot;">​</a></h2><ul><li><p><a href="https://jupyter.org/" target="_blank" rel="noreferrer">Jupyter</a> <strong>notebooks</strong> save both code and its output in a single file with a <code>.ipynb</code> extension. Under the hood they are JSON files with parts of code and saved outputs.</p></li><li><p>Notebooks allow you to create and share documents that contain code, text, equations, charts, and visualizations. Notebooks are widely used in data science, machine learning, and scientific computing due to their interactive and visual nature.</p></li><li><p>Coding in notebooks is similar to scripts, rather than modules. Notebooks do have an internal state that depends on which cells where executed. They are harder to manage in version control systems and to apply code formatting and testing (but data scientists would not care much and use them anyways for everything).</p></li><li><p>Your choice between plain text code and notebooks depend on nature of programming work you will be doing but great if you can master both.</p></li></ul><h2 id="remote-programming-environments" tabindex="-1">Remote Programming Environments <a class="header-anchor" href="#remote-programming-environments" aria-label="Permalink to &quot;Remote Programming Environments&quot;">​</a></h2><ul><li><p><a href="https://colab.research.google.com/" target="_blank" rel="noreferrer">Google Colab</a> is an environment where you can run and store your Python notebooks.</p></li><li><p>Microsoft&#39;s <a href="https://github.com/features/codespaces" target="_blank" rel="noreferrer">GitHub Codespaces</a> is a computing environment to run plain code files using a popular VS Code editor and terminal window.</p></li><li><p>Startups like <a href="https://replit.com/" target="_blank" rel="noreferrer">repl.it</a> or <a href="https://www.gitpod.io/" target="_blank" rel="noreferrer">GitPod</a> are similar to Codespaces, and there are some alternative notebook providers with free starting plans as well.</p></li><li><p>All these services provide you a free and rather capable remote machines, great if you can learn to use them for learning and making good projects!</p></li></ul>',18)]))}const u=a(n,[["render",s]]);export{g as __pageData,u as default};

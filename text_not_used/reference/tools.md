# Tools

## Modern Python Toolchain

The ["Hypermodern Python Packaging"](https://cjolowicz.github.io/posts/hypermodern-python-01-setup/) blog series by Claudio Jolowicz 
nicely depicts the Pyhton packaging and productivity toolchain. 
The blog was originally published in 2020 and now made it into a 
[book](https://www.oreilly.com/library/view/hypermodern-python-tooling/9781098139575/).

A table below summarizes the current Python toolchian. 

| Area          | Newer             | Established      |
| ------------- | ----------------- | ---------------- |
| Formatting    | [ruff]            | [black], [isort] |
| Linting       |                   | [flake8]         |
| Testing       |                   | [pytest]         |
| Type checker  | [pyright]         | [mypy]           |
| Packaging     | [uv]              | [poetry], [pipx] |
| Documentation | [mkdocs-material] | [sphinx]         |

[black]: https://black.readthedocs.io/en/stable/
[ruff]: https://github.com/astral-sh/ruff
[isort]: https://pycqa.github.io/isort/
[flake8]: https://flake8.pycqa.org/en/latest/
[pyright]: https://microsoft.github.io/pyright/
[mypy]: https://mypy-lang.org/
[uv]: https://github.com/astral-sh/uv
[poetry]: https://python-poetry.org/
[pipx]: https://pipx.pypa.io/stable/
[pytest]: https://docs.pytest.org/en/stable/
[sphinx]: https://www.sphinx-doc.org/en/master/
[mkdocs-material]: https://squidfunk.github.io/mkdocs-material/

::: info Сhanges since the blog (in _Newer_ column)

- [uv](https://github.com/astral-sh/uv) and [ruff](https://github.com/astral-sh/ruff) from Astral are very fast and useful.
- [mkdocs-material] is a vibrant project that offers a great documentation and static sites theme.
- For type checking [pyright] is a good supplement to [mypy].

:::

## Tools used for this site

- [Vite Press](https://vitepress.dev/guide/what-is-vitepress) is a modern static site generator by Evan You and the Vite team with a nice look and a pleasure to work with as a developper.
- [VitePress Python Editor](https://github.com/zqianem/vitepress-python-editor) 
  by Em Zhan makes the interactive Python snippets possible through [Pyodide](https://pyodide.org/) integration.
- [Prettier](https://prettier.io/) cleans up the markdown formatting.
- [Aider](https://github.com/paulfitz/aider) with OpenAI 4o and Deepseek (with mixed experiences).


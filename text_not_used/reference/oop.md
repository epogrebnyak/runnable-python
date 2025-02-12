# Classes and OOP

Classes object-oreinted programming in Python has two traits of bad reputation:
(a) being difficult to learn and (b) being superior to other programming paradigms.
Combined with a fact everything is fundimentally a class in Python this makes a
dangerous mix: I need them but they are hard to me. Let's disentangle that.

Functions take some data structures on input and provide a way to modify these
input values, right? Classes declare the data structures first and add specific way
to modify them called methods. That simple.

Another point is that you are already using classes. `Path("myfile.txt")` is an instance of a class. Also `date`, `Decimal`, `Counter` are all classes that you probably usied or heard of.

Every other tutorial has a dog-bark example for classes, but we shall use a very academic case of finding bibliographic data about favourite books on Python.

::: warning

Cannot import modules using VitePress Editor

:::

```python
from dataclasses import dataclass
from manubot.cite.isbn import get_isbn_csl_item

class Book:
    def __init__(self, isbn: str):
        self.csl = get_isbn_csl_item(isbn)

    @property
    def title(self):
        return self.csl["title"].title()

    @property
    def authors(self):
        return [a["given"] + " " + a["family"] for a in self.csl["author"]]

    @property
    def isbn(self):
        return self.csl["ISBN"]

    @property
    def about(self):
        return ", ".join(self.authors) + ". " + self.title + "."


print("Great books about Python are:")
for isbn in ["9781098155438", "9781593279929", "9781718502703"]:
    print(" -", Book(isbn).about)
```

<Editor id="i-oop-book" />

::: details Excercises for OOP using the `Book` class.

1. Run the code to see which books are suggested.
2. Find different ISBNs and run again.
3. Create a standalone function `about(isbn)` that returns bibliographic data.
4. Add a publisher property to the Book class and include it to `about` attribute.
5. Research the `manubot` library and explain how it fetches bibliographic data.
6. Think of a strategy to avoid repeated requests for the same ISBN.
7. Suggest ideas to extend or refactor `Book` class or add new classes.

:::

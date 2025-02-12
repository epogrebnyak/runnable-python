# Functions

Functions group together related code, take input arguments,
perform calculations or actions, and return an output.
Functions are essential for Python and other programming languages.

## Example: Pig Latin with Functions

These three functions that take different responsiblities
in a chain of computations that obsucate incoming English text into
[Pig Latin](https://en.wikipedia.org/wiki/Pig_Latin) slang.

Run the code below and proceed to excercises.

```python
def is_vowel(letter: str) -> bool:
    """Return True for a vowel."""
    return letter.lower() in "aeiou"

def piggify(word: str) -> str:
    """Convert word using 'way' or 'ay' suffix."""
    first_letter = word[0]
    if is_vowel(first_letter):
        return word + 'way'
    else:
        return word[1:] + first_letter + 'ay'

def to_argot(text: str) -> str:
    """Convert a sentence to Pig Latin."""
    words = text.split()
    words = [piggify(word) for word in words]
    return " ".join(words).capitalize()

print(to_argot("Life is beautiful"))
```

::: details Excercises

1. Run this code to find out the result.
2. Change incoming text and run again.
3. Change the suffices 'way' and 'ay' to your liking.
4. How about we leave very short words unchanged?
5. Does this code work in every language?
   Which part would break first?
   Ideas to fix it?
6. Dare to write code to decipher Pig Latin back to English?
7. Other similar ideas to explore? Maybe [Caesar Cipher](https://stackoverflow.com/questions/8886947/caesar-cipher-function-in-python)?

:::

## Checklist

- Definition and naming
- Arguments
- Body
- Return value
- Calling funcitons in code
- Testing a function
- Type annotation
- Docstring

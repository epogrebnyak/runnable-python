# Print shapes, lines, and a maze

To keep us busy in primary school, the teachers gave us an assignment 
to draw an ornament line that separated our hard work in class 
and our homework in the paper notebooks.

Most of my peers were really creative with beautiful ornaments, 
while I was fascinated by the regularity of sequences like `/‾/_/‾/_/‾/_`
which I was drawing in huge quantities in the paper notebook squares.

Use the code provided below to experiment with printing different lengths and patterns of ornaments. 
This code below uses `cycle` and `islice` functions from the `itertools` package.
You do not have to learn these functions; instead, you can replicate existing code 
with simpler Python and create your own version of `make_ornament()`.

```python
from itertools import cycle, islice

def make_ornament(n_chars, pattern):
    forever = cycle(list(pattern))
    segment = islice(forever, n_chars)
    return ''.join(segment)

def print_ornament(n_chars=16, pattern="/‾/_"):
    print(make_ornament(n_chars, pattern))
    
print_ornament(n_chars=80)
```

<Editor id="i-draw" />

# Control flow

In Python the commands, or **statements**, are executed in order, one after another. You can think of a Python program as a series of instructions that runs as a sequence. In addition to that the program may have **branches** and **loops**. These constructs are fundamental to expressing the logic of a program.

Both branches and loops operate over **code blocks**, some parts of the program that you may want to choose from or repeat.

##

A minimal visual picture for control flow concepts is the following.

## Conditional execution and branching

```
  Sequence  --> --> --> --> --> --> One code block.

  Branch          / --> --> --> -->  Will run this part.
                 /
            --> (?) Check condition
                 \  here
                  \ ==> ==> ==> ==>  Condition not met,
                                     this part will not run.
```

- Logic of a code block
  - achives some task with a boundary
  - has distinct variables available within block
  - may be reused or repeated
- Whitespace and identation in Python
- Code blocks in other languages

## `if` for conditional execution and branching

Also known as conditional execution.

- `if... elif... else...`
- `case` and pattern matching

## `for` loop: iterate over some sequence

```
  for loop

      Repeat this code block 3 times.
            --> --> --> --> --> -->
      Ok!
            --> --> --> --> --> -->
            --> --> --> --> --> -->
            --> --> --> --> --> -->
```

## `while`: do something while a condition is met

```
                                            # Initial value
  Enter the while loop                      temp = 15
          |
          v                                 # Let's increase until 18.
  +------------------+                      # Here is the codintion:
  | Is the condition |                      while temp < 18:
  |     true?        | <--------------+
  +------------------+                |
          |                           |        # Code block start
   Yes ---+---> +------------------+  |        print(temp)
          |     | Run the code     |  |        print("Increasing by one!")
          |     | block            |--+        temp = temp + 1
          |     | (may change the  |           # Code block end
          |     | condition)       |
          |     +------------------+
          |
   No ----+--> +--------------------------+
               | Skip code block, we are  |
               | getting out of the loop. |
               +--------------------------+
                         |
                         v                  # After loop
                  Continue program          print("Now it is", temp)
```

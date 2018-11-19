# Functional Programming

## What is Functional Programming

Functional programming is a style of programming where solutions are simple, isolated functions which no side-effects outside their scope.

> `input -> process -> output`

Functional programming is about:

1. Isolated functions - there is no dependence on the state of the program, which includes global variables that are subject to change

2. Pure functions - the same input always gives the same output

3. Functions with limited side effects - any changes, or mutations, to the state of the program outside the function are carefully controlled

### First Class Functions

A first class function is a function that gets passed in as an argument to another function, saved to a variable or returned from another function.

In `javascript` all functions are `first class` functions.

### Higher Order Functions

Higher order functions are functions that recieve other functions as arguments or return other functions as return values.

### Lambdas

A function that is passed as arguments into a `HOC` or gets returned from another function is known as a `lambda`

## Hazards of using imperative code

An imperative style in programming is one that gives the computer a set of statements to perform a task.

Functional programming is a form of declarative programming. You tell the computer what you want done by calling a method or function.

Functional programming helps to avoid mutations and side-effects.

One of the core principle of functional programming is to not change things. Changes lead to bugs. It's easier to prevent bugs knowing that your functions don't change anything, including the function arguments or any global variable.

In functional programming, changing or altering things is called `mutation`, and the outcome is called a `side effect`. A function, ideally, should be a `pure function`, meaning that it does not cause any side effects.

Another principle of functional programming is to always declare your dependencies explicitly. This means if a function depends on a variable or object being present, then pass that variable or object directly into the function as an argument.

There are several good consequences from this principle. The function is easier to test, you know exactly what input it takes, and it won't depend on anything else in your program.

The function would always produce the same output for the same set of inputs, no matter what part of the code executes it.

### Principles

1. Don't alter a variable or object - create new variables and objects and return them if need be from a function.

2. Declare function arguments - any computation inside a function depends only on the arguments, and not on any global object or variable

#### Examples

```js
function add (arr, bookName) {
  let newArr = [...arr];  // Copy the bookList array to a new array.
  newArr.push(bookName);  // Add bookName parameter to the end of the new array.
  return newArr; // Return the new array.
}

function remove (arr, bookName) {
  let newArr = [...arr];  // Copy the bookList array to a new array.
  if (newArr.indexOf(bookName) >= 0) {   // Check whether the bookName parameter is in new array.
    /.
    newArr.splice(newArr.indexOf(bookName), 1); // Remove the given paramater from the new array.
    return newArr; // Return the new array.
    }
}
```

```js
function add (list,bookName) {
  return [...list, bookName];
}

function remove (list,bookName) {
  if (list.indexOf(bookName) >= 0) {
    return list.filter((item) => item !== bookName);
    }
}
```
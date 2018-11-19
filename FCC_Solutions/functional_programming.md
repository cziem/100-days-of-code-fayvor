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
# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @sonder03/lotide`

**Require it:**

`const _ = require('@sonder03/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

## Documentation

The following functions are currently implemented:

* `function1(assertArraysEqual)`: Function that prints an appropriate message after comparing the two arrays.
* `function2(assertEqual)`: takes in 2 values and returns true if they are equal and false otherwise. Function that uses template literals.
* `function3(assertObjectsEqual)`: function that takes in 2 objects and returns true if they are equal and false otherwise.
* `function4(countLetters )`: function that takes in a sentence and returns a count of each of the letters in the sentence.
* `function5( countOnly)`: function that takes in a collection of items and returns a specific subset of those items.
* `function6(eqArray )`:takes in 2 arrays and returns true if the arrays are equal and false otherwise.
* `function7(eqObjects )`: function that takes in 2 objects and return true if they are equal and false otherwise.
* `function9(findKey )`: Function that takes in an object and callback and returns the first key that meets the criteria specified in callback.
* `function10(findKeyByValue )`: function that takes in an object and a value and returns the first key that corresponds to that value.
* `function11(flatten )`: unction that takes in an array that contains elements including nested array of elements and returns a flattened version of the array.
* `function12(head )`: Takes in an array and returns the first element in the array.
* `function13(letterPositions)`: function that takes in a string and returns all indices of letter positions in the string.
* `function14(map)`: function that takes in an array and a callback and returns a new array based on the results of the callback on each item in the array.
* `function15(middle )`:function that takes in an array and returns middle most element of the array.
* `function16(findKey )`:
* `function17(tail )`: takes in an array and returns everything except the first element of the array.
* `function18(takeUntil)`: function that takes in an array and callback and returns a slice of the array based on the criteria specified in the callback.
* `function19(without )`: unction that takes in a source array and an itemsToRemove arrays and returns only the items from the source array that are not in the itemsToRemove array.
*
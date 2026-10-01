---
title: JavaScript Fundamentals - Building a Movie Database
type: exercise
---

In this exercise you will explore the core features of modern JavaScript using Deno. Starting with simple variables and console output, you will gradually build a small movie database application that can display reports, search data, calculate statistics, and organise code across multiple modules.

<!--more-->

## Learning Outcomes

By completing this exercise you should be able to:

- Use [`const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const) 
and [`let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let) to store values.
- Create and manipulate [objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects) and [arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).
- Use [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) to build formatted strings.
- Use [`for...of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loops to process collections.
- Write reusable [functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions).
- Apply object and array [destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring).
- Use the array methods 
[`find()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find), 
[`filter()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter), 
[`map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map), and 
[`reduce()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce).
- Split a program across multiple [modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules).
- [Import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import/with) JSON data files.
- Produce useful console output from structured data.

## Introduction

JavaScript is commonly associated with websites, but it is a general-purpose programming language that can be used for many different tasks. In this exercise we will use Deno as a runtime environment and focus entirely on console applications.

Our goal is to build a simple movie database system. Along the way we will gradually introduce new language features and refactor our code into a more maintainable structure.

Create a new directory for the exercise and create a file called `main.js`.

To run examples in Deno:

```bash
deno main.js
```

## Step 1: Variables and Console Output

Create the following program:

```JavaScript
const title = "Interstellar";
const year = 2014;

console.log(title);
console.log(year);
```

Run the program.

### Exercise

Add a variable containing the movie's genre and display it.

## Step 2: Template Literals

Multiple calls to `console.log()` can become repetitive.

Instead, we can combine values into a single string.

```JavaScript
const title = "Interstellar";
const year = 2014;

console.log(`${title} was released in ${year}.`);
```

The `${...}` syntax inserts a value into a string.

### Exercise

Include your genre variable in the message.

## Step 3: Objects

Related values are often grouped together in a single object.

```JavaScript
const movie = {
    title: "Interstellar",
    year: 2014,
    rating: 8.7,
};
```

Object properties are accessed using dot notation:

```JavaScript
console.log(movie.title);
console.log(movie.year);
```

### Exercise

Upgrade your code to display the properties of an object using a template literal.

## Step 4: Destructuring Objects

Often we need several values from the same object.

Instead of repeatedly writing:

```JavaScript
console.log(movie.title);
console.log(movie.year);
```

or

```JavaScript
console.log(`${movie.title} was released in ${movie.year}.`);
```

we can extract properties into variables:

```JavaScript
const { title, year } = movie;
console.log(`${title} was released in ${year}.`);
```

This process is known as destructuring.

### Exercise

Extract the genre and display it.

## Step 5: Arrays

A collection of values is often stored in an array.

```JavaScript
const movies = [
    {
        title: "Interstellar",
        year: 2014,
        rating: 8.7,
    },
    {
        title: "Arrival",
        year: 2016,
        rating: 7.9,
    },
    {
        title: "Dune",
        year: 2021,
        rating: 8.0,
    },
];
```

Access items using an index:

```JavaScript
const { title, year } = movies[0];
console.log(`${title} was released in ${year}`);
```

### Exercise

Display the second movie.

## Step 6: Processing Arrays with for...of

Rather than writing separate statements for each movie, we can loop over the collection.

```JavaScript
for (const movie of movies) {
    const { title, year } = movie;
    console.log(`${title} was released in ${year}`);
}
```

We can even destructure as part of the for...of statement.

```JavaScript
for (const { title, year } of movies) {
    console.log(`${title} was released in ${year}`);
}
```

### Exercise

Add decorative separators between movies.

Example:

```plaintext
--------------------
Interstellar (2014)
Rating: 8.7
--------------------
Arrival (2016)
Rating: 7.9
--------------------
Dune (2021)
Rating: 8.0
--------------------
```

> try [toFixed](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) to format a number

## Step 7: Building Reusable Functions

Suppose we repeatedly display movie information.

A function helps us avoid duplication.

```JavaScript
function printMovie({title, year, rating}) {
    console.log(`${title} (${year})`);
    console.log("Rating:", rating.toFixed(1));
}
```

> Destructuring becomes especially useful inside functions.

Use it like this:

```JavaScript
for (const movie of movies) {
    console.log("-".repeat(20));
    printMovie(movie);
}
console.log("-".repeat(20));
```

### Exercise

This style is common in modern JavaScript.

Discuss with a partner whether you understand destructuring.
Do you like it?

## Step 8: A Better Report Layout

We can also create simple rating bars.

```JavaScript
function createRatingBar(rating) {
    return "*".repeat(Math.round(rating));
}
```

Example output:
```plaintext
*********
```

### Exercise

Display a rating bar beneath each movie.

## Step 9: A Ratings Dataset

Real systems often store related data in multiple collections.

Move the ratings into an array and add more ratings so each movie has multiple ratings.

```JavaScript
const movies = [
    {
        id: 1,
        title: "Interstellar",
        year: 2014,
    },
    {
        id: 2,
        title: "Arrival",
        year: 2016,
    },
    {
        id: 3,
        title: "Dune",
        year: 2021,
    },
];

const ratings = [
    { movieId: 1, score: 10 },
    { movieId: 1, score: 9 },
    { movieId: 1, score: 8 },
    { movieId: 2, score: 8 },
    { movieId: 2, score: 8 },
    { movieId: 3, score: 7 },
    { movieId: 3, score: 9 },
];
```

Notice that this structure resembles the relationships you previously encountered in SQL.

> Your code is now broken.
We will fix it.


## Step 10: Filtering Records

We often need all ratings belonging to a movie.
To do this, we can filter the list.

```JavaScript
const movieRatings = ratings.filter(rating => rating.movieId === 1);
console.log(movieRatings);
```

> We are passing a callback function as an argument
The callback must return true or false

Using this approach, we can find ratings within our loop and pass them into our function.

```JavaScript
for (const movie of movies) {
    console.log("-".repeat(20));    
    const movieRatings = ratings.filter(rating => rating.movieId === movie.id);
    printMovie(movie, movieRatings);
}
console.log("-".repeat(20));
```

### Exercise

We are passing the ratings into the printMovie function.
However, it is ignoring the second argument. 
Update it to take a second argument and display all the ratings for each movie.

> Something like this:
> ```JavaScript
> function printMovie({title, year}, ratings) {
>     ...
> }
> ```

## Step 11: Manipulating data with map()

The movies and ratings currently contain linked data.

Sometimes we might want to join the data together, merging the scores and the movies array.

```JavaScript
const moviesWithRatings = movies.map(movie => {
    const movieRatings = ratings
        .filter(rating => rating.movieId === movie.id)
        .map(rating => rating.score);
    return {...movie, ratings: movieRatings};
});
console.log(moviesWithRatings);
```

> This is using nested mapping and the [spread](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) syntax.
Mapping converts one array to another by transforming each element. 
The spread syntax expands the movie variable into multiple arguments (one per property) so they can be combined into a new object with the addition of the ratings. 
It's a bit like anonymous destructuring.

Result:

```JavaScript
[
  { id: 1, title: "Interstellar", year: 2014, ratings: [ 10, 9, 8 ] },
  { id: 2, title: "Arrival", year: 2016, ratings: [ 8, 8 ] },
  { id: 3, title: "Dune", year: 2021, ratings: [ 7, 9 ] }
]
```

### Exercise

Make sure you understand the above code. 
Discuss it with a partner until you can see what is going on.

Integrate the new data into your loop (loop over the new `moviesWithRatings` array rather than the original `movies` array).
Update your `printMovie` function to accept the new data format.

## Step 12: Calculating an Average with reduce()

Reduce allows array values to be accumulated.

To calculate a total and average we can add each value to the total, beginning with zero:

```JavaScript
const total = scores.reduce((sum, score) => sum + score, 0);
const average = total / scores.length;
```

### Exercise

Display the average rating for each movie.

## Step 13: Highest and Lowest Ratings

Finding extremes gives us more useful information.

```JavaScript
const highest = scores.reduce((max, score) => Math.max(max, score), scores[0]);
const lowest = scores.reduce((min, score) => Math.min(min, score), scores[0]);
```

Display all three statistics:

```plaintext
Average Rating: 9
Highest Rating: 10
Lowest Rating: 8
```

## Step 16: Creating a Statistics Function

Let's package this behaviour into a reusable function.

```JavaScript
function getRatingStatistics(scores) {
    const total = scores.reduce((sum, score) => sum + score, 0);
    const average = total / scores.length;
    const highest = scores.reduce((max, score) => Math.max(max, score), scores[0]);
    const lowest = scores.reduce((min, score) => Math.min(min, score), scores[0]);
    return {
        average,
        highest,
        lowest,
    };
}
```
Use destructuring when retrieving the result:

```JavaScript
const {
    average,
    highest,
    lowest,
} = getRatingStatistics(scores);
```

## Step 17: Creating Modules

As programs grow, we split code into multiple files.

Create:
```plaintext{linenos=false}
main.js
statistics.js
```

Move the statistics function into statistics.js:

```JavaScript
export function getRatingStatistics(scores) {
    // ...
}
```

Import it into main.js:

```JavaScript
import { getRatingStatistics } from "./statistics.js";
```

Run the program and confirm that it still works.

## Step 18: Loading JSON Data

Create a file called movies.json.

```json
[
    {
        "id": 1,
        "title": "Interstellar",
        "year": 2014
    },
    {
        "id": 2,
        "title": "Arrival",
        "year": 2016
    }
]
```

Import it:

```JavaScript
import movies from "./movies.json" with { type: "json" };
```

Do the same for `ratings.json`.

Now your application separates data from code.

## Step 19: Search Functionality

Create a new module: `search.js`

Add a function:

```JavaScript
export function searchByTitle(movies, searchTerm) {
    return movies.filter(
        movie => movie.title
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
    );
}
```

Use prompt():

```JavaScript
const searchTerm = prompt("Search for a movie:");
```

Display any matches.

## Step 20: Bringing Everything Together

Create separate modules:
```plaintext
main.js
search.js
statistics.js
report.js
movies.json
ratings.json
```

The application should be able to:

- Display all movies.
- Search by title.
- Calculate movie statistics.
- Produce formatted reports.
- Load data from JSON files.

Example output:

```JavaScript
========================================
MOVIE REPORT
========================================

Interstellar
*********

Average Rating: 9.0
Highest Rating: 10
Lowest Rating: 8

Arrival
********

Average Rating: 8.0
Highest Rating: 8
Lowest Rating: 8
```

## Challenge Activities

### Challenge 1

Add a genre property to each movie.

Implement a search that returns every movie belonging to a specified genre.

### Challenge 2

Create a report showing only movies whose average rating exceeds a threshold chosen by the user.

### Challenge 3

Display the number of ratings each movie has received.

Example:

```plaintext
Interstellar (3 ratings)
Arrival (2 ratings)
```

### Challenge 4

Create a "Top Rated Movies" report sorted by average rating.

### Challenge 5

Add a textual visualisation showing the average rating.

Example:
```plaintext
Average Rating: 8.4
[########--]
```

## Conclusion

In this exercise you have used modern JavaScript to build a simple movie database application. 
Along the way you practised object-oriented data structures, destructuring, functions, collection processing,aggregation, modules, and JSON imports. 
These ideas will form the foundation for later exercises where JavaScript is used to build larger
applications.
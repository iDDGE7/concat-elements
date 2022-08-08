# Description

concat-elements is an alternative to concat elements in one array. 

you can concat **strings, number, boolean, arrays and objects** similary to default method **concat of ECMA 262** 

# Installation

### npm

```
npm install concat-elements
```


# Sample

```
const concatElements = require("concat-elements");

let food = ["🍔", "🍕", "🍖", "🍗"];
let animals = ["🐜", "🐅", "🐆", "🦙"];

const array = concatElements(1, "s", food, animals, { name: "test" });

//output:  [ 1, 's', '🍔', '🍕', '🍖', '🍗','🐜','🐅','🐆','🦙', { name: 'test' }]


```

# Syntax

```
concatElements(element1[, element2[, ...[, elementN]]]);
```

# Performance

### concat-elements vs concat ecma

sample of time in 1000 iterations


##### concat-elements:
![Example with concat-elements.](https://drive.google.com/uc?id=1_imslWd5T2azttwupBN4-H72hKKm8Glz "This is a sample image.")


##### concat:
![Example with concat.](https://drive.google.com/uc?id=1nbT1iFc7x2g0O_TzDSirBcaoiGLRGoWv "This is a sample image.")


### Keywords




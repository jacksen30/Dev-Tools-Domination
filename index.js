const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

// Regular
console.log('Hello');

// Interpolated
console.log('Hello Im %s !', 'Jack');  /* Will replace %s with the variable that is declared as second argument - OLD WAY BEFORE ES6  */

const myName = 'Jack '
console.log(`Hello Im ${myName} !`); /* Modern ES6 String Interpolation */

// Styled
console.log('%c I am some great text', 'font-size: 50px; background-color:red; text-shadow: 10px 10px 0 blue;'); // %c will result in been styled according to rules set as second argument

// warning! - shows a warning icon next to the console.log and a stack trace of where it was called
console.warn('OHHH NOOO') 

// Error :|  - shows a error icon next to the console.log and a stack trace of where it was called
console.error('ARGH This is an error');

// Info
console.info('This will display an info icon next to the console log in the dev tools')

// Testing 
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'That is wrong !'); // Will only log to the console if the first argument is false

// clearing
/* console.clear(); */    // Clears the console

// Viewing DOM Elements
console.log(p); // Will show the element - this variable was declared on line 31
console.dir(p); // Will display a drop down with all the available methods of that element

// Grouping together
    // dogs array is declared on line 1
    // groups all information seperately for each dog.name looped over, if you wish for it to be initially collapsed swap console.group() for console.groupCollapsed()

dogs.forEach(dog => {
    console.group(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd(`${dog.name}`);
});

// counting
    // Keeps a count of how many times that same string, element ect has been called
console.count('Jack');
console.count('Jack');
console.count('Jo');
console.count('Jo');
console.count('Jack');
console.count('Sam');
console.count('Jack');
console.count('Jo');

// timing

console.time('fetching data');    // This is to start the timer
    fetch('https://api.github.com/users/wesbos')
      .then(data => data.json())
      .then(data => {
        console.timeEnd('fetching data'); // This will end the timer and console.log the time in milliseconds that it took to execute function / recieve response
        console.log(data);
      });


// table - displays data in a table best for arrays that contain objects with the same properties
console.table(dogs);
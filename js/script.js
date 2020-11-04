// let firstName = 'Uche';
// let lastName = 'Kelvin';

// console.log(`${firstName} ${lastName}`.split(''));

// fullName challenge

// numbers in javascript
// let example = 7.77;

// console.log(parseInt(example));

// let example = '7.77';

// console.log(parseFloat(example));

// let example = 7.77;

// console.log(example.toFixed(5)); decimal place

// challenge two
let example1 = parseInt("Hello 33 World 22");
let example2 = parseFloat('44 Dylan 33');
let example3 = 55.3333.toFixed(0);
let example4 = 200.0.toFixed(2);

console.log();
console.log();
console.log();
console.log();

let example1 = parseInt("33 World 22");
let example2 = parseFloat('44 Dylan 33');
let example3 = 55.3333.toFixed(0);
let example4 = 200.0.toFixed(2);

console.log(typeof example1); number
console.log(typeof example2);number
console.log(typeof example3);string
console.log(typeof example4);string

Boolean in js

let example1 = 666;

console.log(Boolean(example1))

Boolean challenge
let example1 = false;
let example2 = true;
let example3 = null;
let example4 = undefined;
let example5 = '';
let example6 = NaN;
let example7 = -5;
let example8 = 0;

// console.log(Boolean(example1));
// console.log(Boolean(example2));
// console.log(Boolean(example3));
// console.log(Boolean(example4));
// console.log(Boolean(example5));
// console.log(Boolean(example6));
// console.log(Boolean(example7));
// console.log(Boolean(example8));

Array in js
let example1 = [5, 7, 6];

console.log(example1.length)

let example1 = [5, 7, 6];

console.log(example1[1])


let example1 = [5, 7, 6];

example1.push(8, 9, 10);
example1.pop();

example1[0] = 1;

example1.forEach((element) => {
    console.log(element)
});

console.log(example1)

Array challenge what do you think the value of the output will Be
let example1 = ['Dylan', 5, true];

let example2 = example1;

example2.push(11);

// console.log(example1);
// console.log(example2);

// spread operator
let example1 = ['Dylan', 5, true];

let example2 = [...example1];

example2.push(11);

console.log(example1);
console.log(example2);

map functionality

let example1 = ['Dylan', 5, true];

let example2 = example1.map((element) => {
   return element; 
});

example2.push(11);

console.log(example1);
console.log(example2);


Objects in js
let example1 = {};

console.log(example1);

let example1 = {
    firstName: 'Dylan',
    lastName: 'Israel'
};

console.log(example1.firstName);

let example1 = {
    firstName: 'Dylan',
    lastName: 'Israel',
    address: {
        city: 'Austin',
        state: 'Texas'
    },
    age: 30,
    cats: ['Milo', 'Tito', 'Achieles']
};

console.log(example1.address.city);

let example1 = {
    firstName: 'Dylan',
    lastName: 'Israel',
    address: {
        city: 'Austin',
        state: 'Texas'
    },
    age: 30,
    cats: ['Milo', 'Tito', 'Achieles']
};

console.log(example1.address.city);

let example1 = {
    firstName: 'Dylan',
    lastName: 'Israel',
    address: {
        city: 'Austin',
        state: 'Texas'
    },
    age: 30,
    cats: ['Milo', 'Tito', 'Achieles']
};

example1.age = 31;

console.log(Object.keys(example1));

let example1 = {
    firstName: 'Dylan',
    lastName: 'Israel',
    address: {
        city: 'Austin',
        state: 'Texas'
    },
    age: 30,
    cats: ['Milo', 'Tito', 'Achieles']
};

example1.age = 31;

console.log(Object.values(example1));

let example1 = {
    firstName: 'Dylan',
    lastName: 'Israel',
    address: {
        city: 'Austin',
        state: 'Texas'
    },
    age: 30,
    cats: ['Milo', 'Tito', 'Achieles']
};

example1.age = 31;

console.log(example1.hasOwnProperty('firstName'));


Object challenge what do you think will happen here
let example1 = {
    firstName: 'Dylan'
};

let example2 = example1;

example2.lastName = 'Israel';

// console.log(example1);
// console.log(example2);

let example1 = {
    firstName: 'Dylan'
};

let example2 = Object.assign({}, example1);

example2.lastName = 'Israel';

console.log(example1);
console.log(example2);


arithemetic operator

let example1 = 5 % 2;

console.log(example1)

relational operator

let example1 = 10;
let example2 = 15;

console.log(example1)

let example1 = 10;
let example2 = 15;

console.log(example1 >= example)
let example1 = 10;
let example2 = 15;

console.log(example1 == example2)
let example1 = 10;
let example2 = 10;

console.log(example1 === example2)
let example1 = 10;
let example2 = 10;

console.log(example1 != example2)
let example1 = 10;
let example2 = 12;

console.log(example1 !== example2)
let example1 = 10;
let example2 = '10';

console.log(typeof example1);
console.log(typeof example2);
console.log(example1 == example2);
let example1 = 10;
let example2 = '10';

console.log(typeof example1);
console.log(typeof example2);
console.log(example1 == example2);
console.log(example1 === example2);

let example1 = 10;
let example2 = '10';

challenge

let example1 = 5 === 5;
let example2 = 5 == '5';
let example3 = 6 != '6';
let example4 = 7 !== '7';

console.log(example1);
console.log(example2);
console.log(example3);
console.log(example4);

increment and decrement

let example1 = 1;

example1 = example1 + 1;

console.log(example1);

let example1 = 1;

example1++;

console.log(example1);

let example1 = 1;

example1--;


console.log(example1);

let example1 = 1;

example1 += 5;
// example1 = example1 + 5

console.log(example1);

let example1 = 13;

example1 %= 5;

console.log(example1);

challenge 

let example1 = 5;
example1++;

//console.log(example1);

let example2 = 5;
++example2;

// console.log(example2);

let example1 = 5;


console.log(example1++);

let example2 = 5;


console.log(++example2);

control flow if and or 

let example = 5;

if (example === 5) {
    console.log('Runs');
}

let example = 5;

if (example === 5) {
    console.log('Runs');
} else if ( true ) {
    console.log('else if')
} 

let example = 5;

if (example === 6) {
    console.log('Runs');
} else if ( false ) {
    console.log('else if')
} else {
    console.log('else')
}

let example = 5;

if (example === 5 && true === true) {
    console.log('Runs');
} else if ( false ) {
    console.log('else if')
} else {
    console.log('else')
}

let example = 5;

if (example === 6 || true === true) {
    console.log('Runs');
} else if ( false ) {
    console.log('else if')
} else {
    console.log('else')
}

challenge

console.log(10 === 10 && 5 < 4);

console.log(10 === 10 || 5 < 4);
console.log((5 >= 5 || 4 > 4) && 3 + 2 === 5);


switch statement
let studentAnswer = 'A';

let studentAnswer = 'D';

switch(studentAnswer) {
    case 'A': 
        console.log('A is wrong.');
        break;
    case 'B' :
        console.log('B is wrong.');
        break;
    case 'C':
        console.log('C is correct.');
        break;
    default: 
        console.log('Not a real answer.');

        for loop
        let total = 0;

        for (let i = 0; i < 5; i++) {
            console.log(i);
        }
 
        let total = 0;

        for (let i = 0; i < 5; i++) {
            total += i;
        }
        
        console.log(total);

        let total = 0;

let numArray = [10, 20, 30, 40, 50, 60, 70, 80];

for (let i = 0; i < numArray.length; i++) {
    total += numArray[i];
}

console.log(total); //360

let total = 0;

let numArray = [10, 20, 30, 40, 50, 60, 70, 80];

for (let i = 0; i < numArray.length; i++) {
    console.log(numArray[i])
    total += numArray[i];
}


while loop and do while
let count = 0;

while (count > 20) {
    
    count++;
}

console.log(count);

let count = 0;

while (true) {
    count++;
    
    if(count >= 20) {
        break;
    }
}

console.log(count);

let count = 0;

do {
    count++;
    
    if(count >= 20) {
        break;
    }
}
while (false)

console.log(count);

function

function add() {
    console.log('add');
}

add();

function add() {
    console.log('add');
}

add();
add();
add();
add();

function add() {
    return 5;
}

console.log(add()

function add(num1) {
    return num1;
}

console.log(add(10));
console.log(add(15));
console.log(add(20));

function add(num1, num2) {
    return num1 + num2;
}

console.log(add(10, 6));
console.log(add(15, 7));
console.log(add(20,2));


// (<li>) with anything in them you want.

// HINTS:
// import the libraries you need first
// use one of the libraries to render some JSX to the page
import React from react;
import ReactDOM from react-dom;

ReactDOM.render(<div><li>yam</li><li>beans</li><li>water</li></div>, document.getElementbyId('root'));
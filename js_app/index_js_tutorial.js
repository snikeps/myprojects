

let person = {
    name: "aaa",
    age: 33
};
console.log(person);

console.log('type of person is',typeof(person));


// Dot Notation
person.age = 11;
console.log('dot notation',person);

// Bracket notation
person['name'] = 'wwww';
console.log('bracket notation',person);


// array literal
let selectedColors = ['red', 'blue'];
console.log(selectedColors[0]);
console.log('type of selectedColors is',typeof(selectedColors));

selectedColors[2] = 'green';
console.log(selectedColors);

selectedColors[3] = 777;
console.log(selectedColors);
console.log('lengh of array is ',selectedColors.length);

console.log('type of selectedColors is',typeof(selectedColors));


// Pefroming a task
function greet(name, lastname = 'Smith') {
    console.log('Hello ' + name + ' ' + lastname + '!');
}

greet('user1');
greet('user2', 'Simpson');


// Calculates a value
function square(number) {
    return number * number;
}

console.log('square of 432 is', square(432));

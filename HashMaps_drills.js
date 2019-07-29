'use strict';
const HashMap = require('./hashmap.js');

/*
 * 2. WhatDoesThisDo
 * DO NOT run the following code before solving the problem.
 * What is the output of the following code? explain your answer.
 */
const WhatDoesThisDo = function() {
  let str1 = 'Hello World.';
  let str2 = 'Hello World.';
  let map1 = new HashMap();
  map1.set(str1, 10);
  map1.set(str2, 20);
  let map2 = new HashMap();
  let str3 = str1;
  let str4 = str2;
  map2.set(str3, 20);
  map2.set(str4, 10);

  console.log(map1.get(str1)); // Hello World: 20
  console.log(map2.get(str3)); // Hello World: 10
};

function main() {
  const hashMap = new HashMap();
  hashMap.MAX_LOAD_RATIO = 0.5;
  hashMap.SIZE_RATIO = 3;

  hashMap.set('Hobbit', 'Bilbo');
  hashMap.set('Hobbit', 'Frodo');
  hashMap.set('Wizard', 'Gandolf');
  hashMap.set('Human', 'Aragon');
  hashMap.set('Elf', 'Legolas');
  hashMap.set('Maiar', 'The Necromancer');
  hashMap.set('Maiar', 'Sauron');
  hashMap.set('RingBearer', 'Gollum');
  hashMap.set('LadyOfLight', 'Galadriel');
  hashMap.set('HalfElven', 'Arwen');
  hashMap.set('Ent', 'Treebeard');

  /* print and notice the notice the length and items that
  are hashed in your hash map. Have you hashed all the items you were asked to? */
  console.log('hashMap: ', hashMap);

  // format? to get
  // Retrieve the value that is hashed in the key "Maiar" and Hobbit.
  // console.log(hashMap.get('Maiar'));
  // console.log(hashMap.get('Hobbit1'));
  // What are the values of Maiar and Hobbit that you have? Is there a discrepancy? Explain your answer.

  // What is the capacity of your hash table after you have hashed all the above items? Explain your answer.

  // 2.
  WhatDoesThisDo();


  hashMap.set('Hobbit', 'Bilbo');
  hashMap.set('Hobbit', 'Frodo');
  hashMap.set('Wizard', 'Gandolf');
  hashMap.set('Human', 'Aragon');
  hashMap.set('Elf', 'Legolas');
  hashMap.set('Maiar', 'The Necromancer');
  hashMap.set('Maiar', 'Sauron');
  hashMap.set('RingBearer', 'Gollum');
  hashMap.set('LadyOfLight', 'Galadriel');


  // 3. determine which collide... k/
  // 1) insert into idx values below?
  // to insert keys 10, 22, 31, 4, 15, 28, 17, 88, 59 
  // k % m (m = capacity of 11, does not change)
  // [10 % 11, 22 % 11, 31 % 11,...
  // 10, 0, 9,... when collision, insert in next empty spot.
  
  // 2) when collision, insert into next available in linked list

  // 
  const test1 = new Map();
  
}
main();

/*
* 3. Demonstrate understanding of Hash maps
* You don't need to write code for the following two drills. use any drawing 
* app or simple pen and paper *

* 1) Show your hash map after the insertion of keys 10, 22, 31, 4, 15, 28, 17, 88, 59 
* into a hash map of CAPACITY (IS THIS CAPACITY???, YES) m = 11 using open addressing and a hash function k mod m.
* ANSWER: 10 % 11 (10), 22 % 11, (0), 31 % 11 (9), 
* 2) Show your hash map after the insertion of the keys 5, 28, 19, 15, 20, 33, 12, 17, 10 
* into the hash map with collisions resolved by separate chaining. Let the hash 
* table have a length m = 9, and let the hash function be k mod m.
*/


/*
! for 4, 5, and 6, can use built-in map class
*/
/*
 * 4. Remove duplicates
 * Implement a function to delete all duplicated characters in a string and keep only
 * the first occurrence of each character. For example, if the input is string “google”,
 * the result after deletion is “gole”. Test your program with a sentence as well such as
 * "google all that you think can think of".
 */

const stringIter1 = newMap.keys();
const stringIter2 = newMap.keys();

const newString = '';
while(stringIter1.next().value) {
  newString = stringIter2.next().value;
}










// in-class interview question: 
// Imagine you are working on an application that provides movie streaming facility to customers in flights.

// Users on longer flights like to start a second movie right when their first one ends, but they complain that the plane usually lands before they can see the ending. So you're building a feature for choosing two movies whose total runtimes will equal the exact flight length.

// Write a function that takes an integer flight_time (in minutes) and a list of integers movie_lengths (in minutes) and returns a boolean indicating whether there are two movies equal to the flight_time.

// When building your function:

// Assume your users will watch exactly two movies Don't make your users watch the same movie twice Optimize for runtime over memory You are allowed to use any built in functions or class necessary as long as you are optimizing for runtime


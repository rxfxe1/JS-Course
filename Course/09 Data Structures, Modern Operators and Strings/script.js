'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex = 1, mainIndex = 0, address, time = '20:00' }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered at ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
};

/*
//    THE SPREAD OPERATOR

const arr = [7, 8, 9];
const oldWayArr = [1, 2, arr[0], arr[1], arr[2]];
// no good

const newWayArr = [1, 2, ...arr];
// console.log(newWayArr);
// good

// console.log(...newWayArr);
// console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const wholeMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(wholeMenu);

// Iterables are arrays, strings, maps, sets but NOT objects

const str = 'Rafael';
const letters = [...str]; // [...str, '', 'S.']
console.log(letters); // ['R', 'a', 'f', 'a', 'e', 'l']
console.log(...str); // R a f a e l

// Multiple values separated by a comma,
// are usually only expected when we pass arguments 
// into a function, or when we build a new array.


// Real-life example
const ingredients = [prompt("Let's make pasta! Ingredient 1?"), prompt('Ingredient 2?'), prompt('Ingredient 3?')];
console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundedIn: 2023, ...restaurant, founder: 'José' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Cá T'Espero";
console.log(restaurantCopy.name);
console.log(restaurant.name);

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'Via del Sole, 21',
//   starterIndex: 1,
// });

// Destructuring Objects

const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// Changing properties names
const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
// console.log(restaurantName, hours, tags);

// Default values
// since menu doesn't exist it'll create a default value
const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 222;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
// to override a & b we need parenthesis or else JS interprets it wrong
// console.log(a, b);

// Nested objects
const { fri } = openingHours;
// fri is an object, to destructure it we do:
const {
  fri: { open, close },
} = openingHours;
// console.log(open, close);
// this will only log the values of the properties of the object fri
// we could also change the properties names

// Destructuring Arrays
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/

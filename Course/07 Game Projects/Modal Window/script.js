'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btn = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

// show text content for all 3
for (let i = 0; i < btnsOpenModal.length; i++) console.log(btnsOpenModal[i].textContent);

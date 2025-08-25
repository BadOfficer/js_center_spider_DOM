'use strict';

const wall = document.querySelector('.wall');
const spyder = document.querySelector('.spider');

const leftPos = wall.clientWidth / 2 - spyder.clientWidth / 2;
const topPos = wall.clientHeight / 2 - spyder.clientHeight / 2;

spyder.style.left = leftPos + 'px';
spyder.style.top = topPos + 'px';

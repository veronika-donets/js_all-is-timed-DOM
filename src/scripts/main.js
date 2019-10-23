'use strict';

let counter = localStorage.getItem('spentTime') || 0;
const time = document.getElementById('timer');
time.innerHTML = `You spent ${counter} sec on current page`;

setInterval(function() {
  counter++;
  localStorage.setItem('spentTime', counter);
  time.innerHTML = `You spent ${counter} sec on current page`;
}, 1000);

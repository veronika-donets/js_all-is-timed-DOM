'use strict';

if (!localStorage.hasOwnProperty('clickAmount')) {
  localStorage.setItem('spentTime', 0);
}
document.getElementById('timer').innerHTML
  = `You spent ${localStorage.spentTime} sec on current page`;

setInterval(function() {
  localStorage.spentTime++;
  document.getElementById('timer').innerHTML
    = `You spent ${localStorage.spentTime} sec on current page`;
}, 1000);

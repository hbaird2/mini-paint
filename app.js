$(document).ready(function() {

  function changeColor() {
    $(this).addClass(color);
  }

  $('.box').on('click', function() {
    $('.box').on('mouseenter', changeColor);
  })

  $('.box').on('click', function() {
    $('box').off('mouseenter', changeColor);
  })

  $('.box').on('dblclick', function() {
     $(this).removeClass(color);
   })

   var colors = 'white green red blue yellow';

   $('#reset').on('click', function() {
     $('.box').removeClass(colors)
   })

   var color = 'white';

   $('#red').on('click', function() {
     color = 'red';
   })

   $('#blue').on('click', function() {
     color = 'blue';
   })

   $('#green').on('click', function() {
  color = 'green';
   })

$('#yellow').on('click', function() {
  color = 'yellow';
   })

$('#white').on('click', function() {
  color = 'white';
   })

})

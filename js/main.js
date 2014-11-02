$(function() {
   $('header .navbar li.active').removeClass('active');
   $('header .navbar li a[href="' + document.location.pathname + '"]').parent().addClass('active');
});
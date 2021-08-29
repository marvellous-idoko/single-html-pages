$(document).ready(function(){
		$("#link").css("background-color","#ff0012");
		$("#drop0").hide();
	   $('#slick').slick({
		dots:true,
		arrows: true
      });
	 $("#link").hover(function(){
		$("#drop").css("visibility","visible"); 
	 },function(){
		 $("#drop").css("visibility","initial");
	 }
	 );

	  $('#slick0').slick({
		dots:true,
		arrows: true
      });
	$('ul.navbar-nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});
		});
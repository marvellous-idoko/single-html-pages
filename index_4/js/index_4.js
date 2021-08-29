$(document).ready(function(){
	$('#na').hide();
		$('#spa').click(function(){
		
			if($('#navi').is(":visible")) {
				$('#navi').hide();
				$('#na').show();
			} else {
				$('#navi').show();
				$('#na').hide();
			}
		if($('#div').css('background-color','#be3231'))
			$('#div').css('background-color','#bebe34');
		else
			$('#div').css('background-color','#be3231');
		});
	
		
      $('#slicky').slick({
		  "infinite":true,
		  "slideToShow":5,
		  "slideToScroll":5	 
      });
    });
	
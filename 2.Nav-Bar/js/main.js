$(document).ready(function() {
    function doneResizing() {
        if(Modernizr.mq('screen and (min-width:768px)')) {
            
	
			
        }
        else if(Modernizr.mq('screen and (max-width:767px)')) {
            
			$(".pull").click(function(){
				$(".mobilemenu").toggle();
				});
				
			$(".click1").click(function(){
				$(".click1 ul").toggle();
				});		
			
        }
    }

    var id;
    $(window).resize(function() {
        clearTimeout(id);
        id = setTimeout(doneResizing, 0);
    });

    doneResizing();
});




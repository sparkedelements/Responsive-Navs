

$(document).ready(function() {
    function doneResizing() {
        if(Modernizr.mq('screen and (min-width:768px)')) {
            
	
			
        }
        else if(Modernizr.mq('screen and (max-width:767px)')) {
            
			$(".pull").click(function(){
				$("nav ul").toggle();
				});
				
				$(".toggle1").click(function(){
				$(".toggle1 ul").toggle();
				});		
				
				$(".toggle2").click(function(){
				$(".toggle2 ul").toggle();
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





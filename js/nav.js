//Responsive Nav Bar //






$(window).resize(function(){	
	if ($(".navmenu").css("display") == "block" ){
	
			$(document).ready(function(){
			
				$(".pull").click(function(){
				$("nav ul").toggle();
				});
				
				$(".toggle1").click(function(){
				$(".toggle1 ul").toggle();
				});		
				
				$(".toggle2").click(function(){
				$(".toggle2 ul").toggle();
				});
				
			});	
	}	
});





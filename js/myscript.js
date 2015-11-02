
/*-----------------------------------------------------------------------------------*/
/*	accordion
/*-----------------------------------------------------------------------------------*/

$(document).ready(function(){			
				$(".accordion h3:first").addClass("");
				$(".accordion ul.menu-body:not(:first)").hide();

				$(".accordion h3").click(function(){
					$(this).next("ul.menu-body").slideToggle("slow")
					.siblings("ul.menu-body:visible").slideUp("slow");
					$(this).toggleClass("active");
					$(this).siblings("h3").removeClass("active");
				});
			});
/*-----------------------------------------------------------------------------------*/
/*	menu
/*-----------------------------------------------------------------------------------*/
$(document).ready(function(){
	var touch = $('#touch-menu');
	var menu = $('.sidebar-inside');

	$(touch).on('click', function(e) {
	  e.preventDefault();
	  menu.slideToggle();
	});
	$(window).resize(function(){

	  if(menu.is(':hidden')) {
	    	menu.removeAttr('style');
	  }
	});
	});


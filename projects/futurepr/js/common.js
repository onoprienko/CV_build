var rellax = new Rellax('.rellax', {
	center: true
});
if(screen.width < 576 && jQuery('.rellax').length !=0) {
	rellax.destroy();
}
(function(jQuery) {
	jQuery('.owl-carousel-cases-holder').owlCarousel({
	    loop:true,
	    margin:20,
	    nav:false,
	    dots: true,
	    autoHeight:true,
	    responsive:{
	        0:{items:1 }, 768:{items:2 }, 1200:{items:3 } } 
	})
	jQuery('.owl-carousel-testimonials-holder').owlCarousel({
	    loop:true,
	    margin:20,
	    nav: true,
	    dots: false,
	    navText: ["<i class='chevron-left'></i>","<i class='chevron-right'></i>"],
	    autoHeight:true,
	    responsive:{
	        0:{items:1 }, 768:{items:1 }, 992:{items:1 } } 
	})
})(jQuery.noConflict());
function open_popup(popup_class){
	jQuery('body').css('overflow', 'hidden');
	console.log('click'+popup_class)
	jQuery('.'+popup_class).slideDown('fast').addClass('opened');
	setTimeout(function(){
		jQuery('.'+popup_class).find('.popup-content').css({opacity: 1});
	}, 200);
}
(function(jQuery) {
	jQuery('body').on('click', '.popup-trigger', function(event){
		event.preventDefault();
		popup_class = jQuery(this).attr('popup');
		open_popup(popup_class);
	});
	jQuery('body').on('click', '.close-popup', function(event){
		event.preventDefault();
		jQuery('body').css('overflow', 'visible');
		jQuery('body').css('overflow-x', 'hidden');
		jQuery('.popup.opened').find('.popup-content').css({opacity: 0});
		jQuery('.popup.opened').slideUp('fast').removeClass('opened');
	});
})(jQuery.noConflict());
(function(jQuery) {
	jQuery('body').on('click','.mobile-nav-trigger',function(event) {
		event.preventDefault();
		jQuery(this).toggleClass('active');
		jQuery('.main-nav').toggleClass('active');
	});
	jQuery('body').on('click','.header-center.active a',function(event) {
		event.preventDefault();
		jQuery('.mobile-nav-trigger').toggleClass('active');
		jQuery('.main-nav').toggleClass('active');
		//console.log('click');
	});
})(jQuery.noConflict());
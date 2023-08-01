var Enterprise = window.Enterprise || {};
Enterprise = (function($) {
	'use strict';
	var common = {
        headerMotion: function(){
            let lastScroll = 0;
            $(window).scroll(function(){
                const curr = $(this).scrollTop();
                if(curr > lastScroll){
                    $('.header').addClass('show');
                } else {
                    $('.header').removeClass('show');
                }
            });
        },
		init: function() {
			common.headerMotion();
		}
	};

	$(document).ready(function() {
		common.init();
	});
})($);


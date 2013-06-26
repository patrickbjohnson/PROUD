function initNavScroll($links) {
	$links.on("click", function(e) {
		var target = this.hash,
			$target = $(target);

		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 1500, 'swing', function() {
			window.location.hash = target;
		});

		e.preventDefault();
	});
}

var zoomer = {
	scale: 1.0,
	wh: 0,
	ww: 0,
	$window: $(window),
	$background: $(".bg-wrapper img"),
	init: function() {

		var self = this;

		this.updateHeights();

		this.$window.on("resize", function() {
			self.updateHeights.call(self);
		});
		this.$window.on("scroll", function() {
			self.zoomEffect.call(self);
		})

	},
	zoomEffect: function() {

		var t = this.$window.scrollTop();

		if (t < 0) {
			this.scale = (1.0 - ( t / this.wh ) ) ;
			this.$background.css({
				"-webkit-transform": "translate3d(0px, 0px, 0px) scale(" + this.scale + ")"
			});
		}
		else if (t + this.wh >= this.dh) {
			this.scale = 1.0 - (this.t / this.wh);
			console.log("scale")
			this.$background.css({
				"-webkit-transform": "translate3d(0px, 0px, 0px) scale(" + this.scale + ")"
			});
		}
		else {
			this.$background.css({
				"-webkit-transform": "translate3d(0px, 0px, 0px) scale(1.0)"
			});
		}

	},
	updateHeights: function() {
		this.wh = $(window).height();
		this.dh = $(document).height();
	}
};

function initScrollZoom() {

	var $background = $(".bg-wrapper img");
	var scale = 1.0;
	var $window = $(window);
	var $wh = 0, dh = 0;


}


$(document).ready(function() {

	initNavScroll($(".nav-primary a"));
	zoomer.init();

});
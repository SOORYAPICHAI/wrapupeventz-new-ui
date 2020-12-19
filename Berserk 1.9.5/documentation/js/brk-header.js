(function($){

	/**
	 * Global var
	 */
	var header_one 		= $('.brk-header'),
			main_bar			= header_one.find('.brk-header__main-bar'),
			main_barData 	= main_bar.data('height-scroll'),
			widthDoc 			= 992,
			stickyHide		= header_one.data('sticky-hide'),
			bodyWidth 		= $('body').width();

	if(header_one.hasClass('brk-header_not-fixed')) {
		var windowWidth = window.innerWidth || $(window).width();
		if(windowWidth > 992) {
			$('body').css('padding-top', main_bar.height());
		}
	}

	/**
	 * Header TOP BAR
	 */
	if($('.brk-header__top-bar').length) {
		var top_bar 				= header_one.find('.brk-header__top-bar_hide'),
				top_bar_scroll 	= header_one.find('.brk-header__top-bar_scroll'),
				dataTop					= header_one.find('.brk-header__top-bar').data('top');

		dataTop = dataTop ? dataTop : 0;

		function topBar(widthDoc) {
			var windowWidth = window.innerWidth || $(window).width();

			if(windowWidth >= widthDoc) {
				if(top_bar.length) {
					var h = top_bar.innerHeight() - dataTop;
					header_one.css('top', '-'+ h +'px');
				}
			} else {
				header_one.css('top', '0');
			}
		}

		function topBarScroll(widthDoc) {
			if(stickyHide !== 1) {
				var windowWidth = window.innerWidth || $(window).width();

				if(windowWidth >= widthDoc) {
					if(top_bar_scroll.length) {
						var hsc = top_bar_scroll.innerHeight() - dataTop;
						if ( $(this).scrollTop() > 0 ){
							header_one.css('top', '-'+ hsc +'px');
						} else if($(this).scrollTop() <= 0) {
							header_one.css('top', '0');
						}
					}
				} else {
					header_one.css('top', '0');
				}
			}
		}

		/* Init Function */
		setTimeout(function() {
			topBar(widthDoc)
		}, 2000);

		topBarScroll(widthDoc);

		$(window).on('resize scroll', function() {
			topBar(widthDoc);
			topBarScroll(widthDoc);
		});
	}
	/**
	 * End Header TOP BAR
	 */

	/**
	 * Header SCROLL
	 */
	//if(header_one.not('.brk-header_vertical')[0]) {
		if(!!main_barData) {
			main_bar.data('height-temp', main_bar.height());
		}
		function headerScroll(widthDoc) {
			var windowWidth = window.innerWidth || $(window).width();

			if(!!main_barData) {
				var height_temp 			= main_bar.data('height-temp');
						//main_barHeightNew	= height_temp - main_barData;
			}

			if(windowWidth >= widthDoc) {
				if ( $(this).scrollTop() > 0 ){
					header_one.addClass("brk-header_scroll");

					if(!!main_barData) {
						main_bar.css('height', main_barData + 'px');
					}
				} else if($(this).scrollTop() <= 0) {
					header_one.removeClass("brk-header_scroll");

					if(!!main_barData) {
						main_bar.css('height', height_temp + 'px');
					}
				}
			}

      /* Header scroll mobile */
      if ( $(this).scrollTop() > 0 ){
        $('.brk-header-mobile').addClass("brk-header-mobile_scroll");
      } else if($(this).scrollTop() <= 0) {
        $('.brk-header-mobile').removeClass("brk-header-mobile_scroll");
      }
      /* End Header scroll mobile */
		}
		headerScroll(widthDoc);
		$(window).scroll(function(){
			headerScroll(widthDoc);
		});
	//}
	/**
	 * End Header SCROLL
	 */


	/**
	 * Sticky Hide
	 */
	if(stickyHide === 1) {
		var scrollPrev 	= 0;

		setTimeout(function(){
			$(window).scroll(function(){
				var scrolled 				= $(this).scrollTop(),
						firstScrollUp 	= false,
						firstScrollDown = false;

				if (scrolled > 0) {

					if (scrolled > scrollPrev) {
						firstScrollUp = false;

						if (scrolled < header_one.height() + header_one.offset().top) {
							if ( firstScrollDown === false ) {
								header_one.addClass('brk-header_sticky-hide');

								firstScrollDown = true;
							}
						}
					} else {
						firstScrollDown = false;

						if (scrolled > header_one.offset().top) {
							if (firstScrollUp === false) {
								header_one.removeClass('brk-header_sticky-hide');

								firstScrollUp = true;
							}
						}
					}
					scrollPrev = scrolled;
				}

			});
		}, 2500);
	}
	/**
	 * End Sticky Hide
	 */


	/**
	 * brk-header-mobile
	 */
	/**
	 * Wrap: .brk-header-mobile-wrap
	 * Wrap header: .brk-header-mobile-wrap__header
	 * Wrap logo: .brk-header-mobile-wrap__logo
	 * Wrap close: .brk-header-mobile-wrap__close
	 */

	var fnlogic = false;
	function headerMobile(widthDoc) {
		var windowWidth 		= window.innerWidth || $(window).width(),
				wrapMobile			= 'brk-header-mobile-wrap',
				wrapMobileBody	= 'brk-header-mobile-wrap__body';

		if(windowWidth < widthDoc && !fnlogic) {
			header_one.wrap('<div class="' + wrapMobile + '"><div class="' + wrapMobileBody + '"></div></div>');

			var wrapMobileClass			= $('.brk-header-mobile-wrap'),
					wrapMobileClassBody	= $('.brk-header-mobile-wrap__body'),
					wrapMobileData			= header_one.data('logo-src'),
					bgMobile						= header_one.data('bg-mobile');

			wrapMobileClassBody.prepend('<div class="brk-before"></div><div class="brk-header-mobile-wrap__header">'+
			'<div class="brk-header-mobile-wrap__close"><span></span></div>'+
			'</div>');

			if(wrapMobileData !== '') {
				$('.brk-header-mobile-wrap__header').prepend('<div class="brk-header-mobile-wrap__logo"><img src="'+ wrapMobileData +'" alt=""></div>')
			}
			if(bgMobile !== '') {
				wrapMobileClass.css('background-image', 'url('+ bgMobile +')');
			}
			wrapMobileClass.before('<div class="brk-header-mobile-wrap-layer"></div>');


			/* ------------------- fnlogic ---------------------*/
			fnlogic = true;
		} else if( windowWidth >= widthDoc && fnlogic ) {
			$('.brk-header-mobile-wrap__header').detach();
			$('.brk-header-mobile-wrap-layer').remove();

			header_one.unwrap();

			/* ------------------- fnlogic ---------------------*/
			fnlogic = false;
		}

		/* Open-Close menu mobile */
		var brkHeaderMobile 			= $('.brk-header-mobile'),
				brkHeaderMobileOpen 	= brkHeaderMobile.find('.brk-header-mobile__open'),
				wrapMobileClass				= $('.brk-header-mobile-wrap'),
				brkHeaderMobileClose 	= wrapMobileClass.find('.brk-header-mobile-wrap__close'),
				mobileWrapLayer 			= $('.brk-header-mobile-wrap-layer');

		if(brkHeaderMobile.length) {
			brkHeaderMobileOpen.click(function () {
				$('body').addClass('modal-open');
				wrapMobileClass.addClass('is-active');
				mobileWrapLayer.addClass('is-active');
			});
		}

		if(wrapMobileClass.length) {
			brkHeaderMobileClose.click(function () {
				$('body').removeClass('modal-open');
				wrapMobileClass.removeClass('is-active');
				mobileWrapLayer.removeClass('is-active');
			})
		}
		/* Open-Close menu mobile */
	}

	headerMobile(widthDoc);
	$(window).resize(function(){
		headerMobile(widthDoc);
	});
	/**
	 * End brk-header-mobile
	 */


	function dropDownEffect( e, s, d ) {
		var e = ( d == 'left' ) ? $( e.get().reverse() ) : e,
				b = ( d == 'left' ) ? {opacity:0,left:10} : {opacity: 0,left:-10};

		e.css( b ).each(function( i ) {
			$( this ).delay( s * i ).animate({opacity:1,left:0});
		});
	}

	$('.brk-nav__drop-down-effect').each(function () {
		var $this = $(this),
				$dd_effect = $this.find('.dd-effect');
		$this.on('mouseenter', function () {
			dropDownEffect($dd_effect, 10);
		});
	});

	/**
	 * quantityProducts
	 */
	(function quantityProducts() {
		$(".brk-quantity").find(".brk-quantity__arrows").click(function () {
			var calc = $(this).parent().find(".brk-quantity__value");
			var calcText = calc.val();
			if ($(this).hasClass("minus") && calcText > 1) {
				calc.val(+calcText - 1);
			} else if ($(this).hasClass("plus")) {
				calc.val(+calcText + 1);
			}
		});
	})();
	/**
	 * End quantityProducts
	 */

	/**
	 * BRK info-menu
	 */
	var infoMenu 	 		= $('.brk-info-menu'),
			infoMenuOpen 	= $('.brk-info-menu-open'),
			infoMenuClose = infoMenu.find('.brk-info-menu__close'),
			windowWidth 		= window.innerWidth || $(window).width();

	infoMenuOpen.on('click', function() {
		infoMenu.toggleClass('active');
		infoMenuOpen.toggleClass('open-active');
		if(windowWidth >= widthDoc) {
			$('body').toggleClass('modal-open');
		}

	});

	infoMenuClose.on('click', function() {
		if(infoMenu.hasClass('active')) {
			infoMenu.removeClass('active');
		}
		if(infoMenuOpen.hasClass('open-active')) {
			infoMenuOpen.removeClass('open-active');
		}
		if(windowWidth >= widthDoc) {
			if($('body').hasClass('modal-open')) {
				$('body').removeClass('modal-open');
			}
		}
	});

	$(document).on('click', function(e) {
		if (!$(e.target).closest(".brk-info-menu").length && !$(e.target).closest(".brk-info-menu-open").length) {
			if(infoMenu.hasClass('active')) {
				infoMenu.removeClass('active');
			}
			if(infoMenuOpen.hasClass('open-active')) {
				infoMenuOpen.removeClass('open-active');
			}
			if(windowWidth >= widthDoc) {
				if($('body').hasClass('modal-open')) {
					$('body').removeClass('modal-open');
				}
			}
		}
		e.stopPropagation();
	});
	/**
	 * End BRK info-menu
	 */


	/**
	 * element mobile
	 */
	function elementMobile(parentId, openEl, contentEl, widthDoc) {
		var parentId 	= $(parentId),
				openEl 		= parentId.find(openEl),
				contentEl = parentId.find(contentEl),
				windowWidth 		= window.innerWidth || $(window).width();

		if(windowWidth < widthDoc) {
			openEl.click(function() {
				contentEl.slideToggle(400);
			});
		}
	}

	elementMobile('.brk-mini-cart', '.brk-mini-cart__open, .brk-mini-cart__info-open', '.brk-mini-cart__menu', widthDoc);
	elementMobile('.brk-social-links', '.brk-social-links__open', '.brk-social-links__block', widthDoc);
	elementMobile('.brk-search', '.brk-search__open', '.brk-search__block', widthDoc);
	/**
	 * End element mobile
	 */


	/**
	 * Mobile menu
	 */
	function mobileMenu(widthDoc) {
		var $brkNav 				= $('.brk-nav'),
				$brkNavChildren = $brkNav.find('.brk-nav__children'),
				$link						= $brkNavChildren.children('a'),
				windowWidth 		= window.innerWidth || $(window).width();

		if(windowWidth < widthDoc) {
			$brkNavChildren.prepend('<div class="brk-nav__link-open"><i class="fa fa-angle-right"></i></div>');
		} else if($('.brk-nav__link-open').length > 0) {
			$('.brk-nav__link-open').detach();
		}

		if(windowWidth < widthDoc) {
			var $openLink = $('.brk-nav__link-open');

			function heightOpen() {
				$brkNavChildren.each(function () {
					var $this = $(this),
							$open = $this.children('.brk-nav__link-open'),
							$link = $this.children('a'),
							$linkHeight = $link.outerHeight();

					$open.css('height', $linkHeight);
				});
			}

			heightOpen();

			if ($openLink.length > 0) {
				$openLink.on('click', function () {
					var $this = $(this),
							$parent = $this.parent(),
							$thisDropDown = $parent.children('.brk-nav-drop-down');

					$parent.toggleClass('children-active');
					$this.toggleClass('is-active');
					$thisDropDown.slideToggle(400);

					heightOpen();
				});
			}

			// linck #
			$link.each(function () {
				var $this = $(this),
						$linkHref = $this.attr('href');

				if ($linkHref == '#' || $linkHref == '') {
					$this.on('click', function (e) {
						e.preventDefault();
						var $this = $(this),
								$parent = $this.parent(),
								$thisDropDown = $parent.children('.brk-nav-drop-down'),
								$linkOpen = $parent.children('.brk-nav__link-open');

						$parent.toggleClass('children-active');
						$linkOpen.toggleClass('is-active');
						$thisDropDown.slideToggle(400);

						heightOpen();
					})
				}
			});
		}
	}

	mobileMenu(widthDoc);
	/**
	 * End Mobile menu
	 */


	/**
	 * brk-search
	 */
	(function () {
		var windowWidth 		= window.innerWidth || $(window).width();

		if(windowWidth >= widthDoc) {
			$('.brk-search_interactive').each(function () {
				var $this 			= $(this),
						$parent 		= $this.parents('.brk-header__main-bar'),
						$container 	= $parent.children('.container-fluid, .container'),
						$open				=	$this.find('.brk-search__open'),
						$close			= $this.find('.brk-search__close'),
						$block			= $this.find('.brk-search__block'),
						$form				= $block.find('[type="text"]'),
						$item				=	$parent.find('.brk-header__item:not(.brk-search_interactive)'),
						$col				= $item.parents('[class*="col"]'),
						delay				= 0;

				$open.on('click', function () {
					$block.addClass('active');
					$container.addClass('position-relative');
					$item.hide(delay);
					$(this).hide(delay);
					if(!$('div').is('.brk-overlay')) {
						$('body').append('<div class="brk-overlay"></div>');
					}
					setTimeout(function () {
						$form.focus();
					}, 150);
					$col.css('border', '0');
				});

				$close.on('click', function () {
					$block.removeClass('active');
					$item.show(delay);
					$open.show(delay);
					$container.removeClass('position-relative');
					if($('div').is('.brk-overlay')) {
						$('.brk-overlay').remove();
					}
					$col.css('border', '');
				});

				$(document).on('click', function(e) {
					if (!$(e.target).closest(".brk-header").length) {
						$block.removeClass('active');
						$item.show(delay);
						$open.show(delay);
						$container.removeClass('position-relative');
						if($('div').is('.brk-overlay')) {
							$('.brk-overlay').remove();
						}
						$col.css('border', '');
					}
					e.stopPropagation();
				});
			});
		}
	})();
	/**
	 * End brk-search
	 */

	/**
	 * brk-lang_interactive
	 */
	(function () {
		var windowWidth = window.innerWidth || $(window).width();

		if(windowWidth >= widthDoc) {
			$('.brk-lang_interactive').each(function () {
				var $this 			= $(this),
						$parent 		= $this.closest('.brk-header__top-bar, .brk-header__main-bar'),
						$container	= $parent.find('.container-fluid, .container'),
						$item				=	$parent.find('.brk-header__item:not(.brk-lang_interactive)'),
						$col				= $item.parents('[class*="col"]');

				$parent.css({'height': $parent.outerHeight(), 'transition': 'all .3s ease-in-out'});

				$this.hover(function () {
					$item.css('opacity', '0');
					$container.css('background', 'transparent');
					$parent.addClass('top-bar-bg');
					if(!$('div').is('.brk-overlay')) {
						$('body').append('<div class="brk-overlay"></div>');
					}
					$col.css('border', '0');
				}, function () {
					$item.css('opacity', '1');
					$container.removeAttr('style') ;
					$parent.removeClass('top-bar-bg');
					if($('div').is('.brk-overlay')) {
						$('.brk-overlay').remove();
					}
					$col.css('border', '');
				})
			})
		} else {
			$('.brk-lang').each(function () {
				var $this 	= $(this),
						$open		= $this.find('.brk-lang__open'),
						$option = $this.find('.brk-lang__option');

				$open.click(function () {
					$option.slideToggle(300);
				})
			})
		}

	})();
	/**
	 * End brk-lang_interactive
	 */

	/**
	 * brk-header-popup-menu
	 */
	(function () {
		if ($('.brk-header-popup-menu').length > 0) {
			$('body').append('<div class="brk-header-popup-menu-layer"></div>');

			var $popuMenu 	= $('.brk-header-popup-menu'),
					$openClose	=	$popuMenu.find('.brk-header-popup-menu__open-close'),
					$menu				= $('.brk-header-popup-menu__menu'),
					$layer			= $('.brk-header-popup-menu-layer');

			if($('.brk-header_vertical').length > 0) {
				$('.brk-header').append($menu);
				$menu.addClass('brk-moved-by-js');
			}

			$openClose.click(function () {
				var $this = $(this);

				$this.toggleClass('is-active');
				$menu.fadeToggle(300);
				$layer.fadeToggle(500);
			});

			$layer.click(function () {
				var $this = $(this);

				$openClose.toggleClass('is-active');
				$menu.fadeToggle(300);
				$this.fadeToggle(500);
			})
		}
	})();
	/**
	 * End brk-header-popup-menu
	 */

	$('.brk-totop').on('click', function() {
		$('html, body').stop().animate({ scrollTop : 0 }, 500);
	});

})(jQuery);

/**
 * location on the screen
 */
function locationScreen() {
	(function($){
		var brk_element_header 	= '.brk-mini-cart, .brk-social-links, .brk-search, .brk-lang, .brk-nav__sub-menu',
				windowWidth 				= window.innerWidth || $(window).width();
		$(brk_element_header).each(function () {
			var $this 				= $(this),
					widthOffset  	= windowWidth / 2,
					offset				= $this.offset().left;

			if(offset < widthOffset) {
				$this.removeClass('brk-location-screen-left brk-location-screen-right').addClass('brk-location-screen-left');
			} else {
				$this.removeClass('brk-location-screen-left brk-location-screen-right').addClass('brk-location-screen-right');
			}
		});
	})(jQuery);
}

locationScreen();
/**
 * END location on the screen
 */
$(() => {
	// Основной слайдер на главной
	$('.main_slider .slider').owlCarousel({
		items: 1,
		margin: 0,
		nav: false,
		dots: false,
		loop: true,
		smartSpeed: 750,
		autoplay: true,
		mouseDrag: false,
		autoplayTimeout: 5000,
		onTranslate: event => {
			$(event.target).trigger('stop.owl.autoplay')
		},
		onTranslated: event => {
			$(event.target).trigger('play.owl.autoplay', [4250, 0])
		}
	})


	// Видео
	$('.videos .slider').owlCarousel({
		nav: true,
		dots: false,
		loop: true,
		smartSpeed: 500,
		margin: 20,
		mouseDrag: false,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			1024: {
				items: 3
			}
		}
	})


	// Нам доверяют
	$('.partners .slider').owlCarousel({
		nav: true,
		dots: false,
		loop: true,
		smartSpeed: 500,
		margin: 20,
		mouseDrag: false,
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 2
			},
			768: {
				items: 3
			},
			1024: {
				items: 4
			},
			1180: {
				items: 5
			}
		}
	})


	// Товары
	$('.products .slider').owlCarousel({
		nav: true,
		dots: false,
		loop: true,
		smartSpeed: 500,
		margin: 20,
		mouseDrag: false,
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 2
			},
			768: {
				items: 3
			},
			1024: {
				items: 4
			}
		}
	})


	// Вакансии - Откликнуться
	$('.vacancies .item .send_btn').click(function (e) {
		e.preventDefault()

		let vacancy_name = $(this).data('vacancy_name'),
			html = new String()
				+ '<div class="item">'
				+ '<button type="button" class="remove"></button>' + vacancy_name
				+ '</div>'

		$('.send_resume .form .items').append(html)
	})

	$('body').on('click', '.send_resume .form .items .remove', function (e) {
		e.preventDefault()

		$(this).closest('.item').remove()
	})


	// Подсказки у поиска
	$('.search form .input').keydown(function () {
		let _self = $(this)

		setTimeout(() => {
			_self.val().length > 1
				? $('.search form .tips').fadeIn(300)
				: $('.search form .tips').fadeOut(200)
		})
	})


	// Отправка форм
	$('body').on('submit', '.form.custom_submit', function (e) {
		e.preventDefault()

		$.fancybox.close()

		$.fancybox.open({
			src: '#success_modal',
			type: 'inline',
			touch: false
		})
	})
})



$(window).on('load', () => {
	// Отзывы
	$('.reviews .wheelSlider-container').wheelSlider({
		controls: true,
		dots: false,
		items: 3,
		startSlide: 1
	})


	// Фикс. шапка
	headerInit = true,
		headerHeight = $('header').outerHeight(),
		mobHeaderHeight = $('.mob_header').outerHeight()

	$('header').wrap('<div class="header_wrap"></div>')
	$('.mob_header').wrap('<div class="mob_header_wrap"></div>')

	$('.header_wrap').height(headerHeight)
	$('.mob_header_wrap').height(mobHeaderHeight)

	headerInit && $(window).scrollTop() > 0
		? $('header, .mob_header').addClass('fixed')
		: $('header, .mob_header').removeClass('fixed')
})



$(window).resize(() => {
	// Фикс. шапка
	headerInit = false
	$('.header_wrap').height('auto')
	$('.mob_header_wrap').height('auto')

	setTimeout(() => {
		headerInit = true
		headerHeight = $('header').outerHeight()
		mobHeaderHeight = $('.mob_header').outerHeight()

		$('.header_wrap').height(headerHeight)
		$('.mob_header_wrap').height(mobHeaderHeight)

		headerInit && $(window).scrollTop() > 0
			? $('header, .mob_header').addClass('fixed')
			: $('header, .mob_header').removeClass('fixed')
	}, 100)
})



$(window).scroll(() => {
	// Фикс. шапка
	typeof headerInit !== 'undefined' && headerInit && $(window).scrollTop() > 0
		? $('header, .mob_header').addClass('fixed')
		: $('header, .mob_header').removeClass('fixed')
})
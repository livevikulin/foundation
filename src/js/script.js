import "jquery";
import "slick-slider";

$(document).ready(function() {
	
	//Навигация
	$('.nav > ul > li > a').click(function (e) {
		e.preventDefault();
		var curLink = $(this);
		var scrollPoint = $(curLink.attr('href')).position().top;
		$('body,html').animate({
			scrollTop: scrollPoint
		}, 500);
	})

	$(window).scroll(function () {
		onScrollHandle();
	});

	function onScrollHandle() {
		var currentScrollPos = $(document).scrollTop();

		$('.nav > ul > li > a').each(function () {
			var curLink = $(this);
			var refElem = $(curLink.attr('href'));
			if (refElem.position().top <= currentScrollPos && refElem.position().top + refElem.height() > currentScrollPos) {
				$('.nav > ul > li').removeClass("nav-active");
				curLink.parent().addClass("nav-active");
			}
			else {
				curLink.parent().removeClass("nav-active");
			}
		});
	};

	//Калькулятор
	

	$('.btn-form').on('click', function(e) {
		let calc = $('[data-calc="calc"]').prop('checked'),
			calcOne = $('[data-box="1"]'),
			calcTwo = $('[data-box="2"]'),
			calcThree = $('[data-box="3"]'),
			calcFour = $('[data-box="4"]'),
			calcFive = $('[data-box="5"]'),
			calcSix = $('[data-box="6"]');


		e.preventDefault();
		console.log(calc);
		if (calc == 111) {
			calcOne.removeClass('non-active');
		}
	});

	//Range slider
	$('.rs-range').on("input", showSliderValue);
	
	function showSliderValue(e) {
		const $el = $(e.target);
		const $label = $el.closest('.js-choice').find('.js-label');
		$label.text($el.val());
		const bulletPosition = ($el.val() / $el.attr('max'));
		$label.css('left', (bulletPosition * 428) + "px");
	};

	//Маска
	$("#phone").mask("+7 (999)-999-9999", {autoclear: false});

	//Табы в блоке с примерами работ
	$('.tabs-box').hide();
	$('.tabs-box:first').show();
	$('.tabs-nav li:first').addClass('tab-active');

	$('.tabs-nav li a').click(function(e) {
		e.preventDefault();
		$('.tabs-nav li').removeClass('tab-active');
		$(this).parent().addClass('tab-active');
		$('.tabs-box').hide();

		let selectTab = $(this).attr('href');
		$(selectTab).fadeIn();

	});

	//Инициализация слайдера с примерами работ
	let slider = $('#slider_1, #slider_2, #slider_3, #slider_4, #slider_5');
	slider.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		variableWidth: true
	});

	//Анимация для смены слайдов с примерами работ
	slider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
		
		$(this).find('.slick-list').removeClass('next-slide');
		$(this).find('.slick-list').addClass('this-slide');

	});

	slider.on('afterChange', function(event, slick, currentSlide, nextSlide){
		
		$(this).find('.slick-list').removeClass('this-slide');
		$(this).find('.slick-list').addClass('next-slide');

	});
		
	$('.one-time').slick({
		speed: 300  // скорость анимации будет зависить от времени анимирования всех ваших блоков
	});

	//Инициализация слайдера с специалистами
	let specialists = $('#specialists1, #specialists2, #specialists3, #specialists4, #specialists5');

	specialists.slick({
		arrows: false
	});
	$('.specialists__button').on('click', function() {
		specialists.slick('slickNext');
	});

	//Анимация для смены слайдов со специалистами
	specialists.on('beforeChange', function(event, slick, currentSlide, nextSlide){
		
		$(this).find('.slick-list').removeClass('next-slide');
		$(this).find('.slick-list').addClass('this-slide');

	});

	specialists.on('afterChange', function(event, slick, currentSlide, nextSlide){
		
		$(this).find('.slick-list').removeClass('this-slide');
		$(this).find('.slick-list').addClass('next-slide');

	});
	
	//Инициализация слайдера с отзывами
	$('.reviews__slider').slick({
		infinite: true,
		autoplay: true,
		speed: 800,
		centerMode: true,
		variableWidth: true
	});
	
});


import "jquery";
import { range } from "rxjs/observable/range";

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

	//Range slider
	let rangeSlider = document.querySelector(".rs-range");
	let rangeBullet = document.querySelector(".rs-label");

	rangeSlider.addEventListener("input", showSliderValue, false);

	for (let i = 0; i < rangeSlider.length; i++) {
		rangeSlider[i].addEventListener("input") = showSliderValue();
	};

	function showSliderValue() {
		rangeBullet.innerHTML = rangeSlider.value;
		var bulletPosition = (rangeSlider.value / rangeSlider.max);
		rangeBullet.style.left = (bulletPosition * 428) + "px";
	};
	

})
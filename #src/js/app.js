

var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };


$(document).ready(function () {
	document.body.classList.add('is-load');

	// === Проверка, поддержка браузером формата webp ==================================================================

	function testWebP(callback) {

		var webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}

	testWebP(function (support) {

		if (support == true) {
			document.querySelector('body').classList.add('webp');
		} else {
			document.querySelector('body').classList.add('no-webp');
		}
	});


			//==== ADD PADDING-TOP ================================
			{
				let wrapper = document.querySelector('.wrapper');
				if (wrapper) {
					let header = document.querySelector('.header._padding-top');
					if(header) {
						let headerHeight = header.clientHeight;
						wrapper.style.paddingTop = headerHeight + 'px';
					}
					
				}
			}
			//==== AND ADD PADDING-TOP ================================

	@@include('_function.js');
	@@include('files/dynamic_adapt.js');
	@@include('forms.js');
	@@include('../common/burger/burger.js');
	@@include('pages/#home.js');
	@@include('pages/#events-listing.js');
	@@include('blocks/parallax.js');
	@@include('../common/events-slider/events-slider.js');
	@@include('../common/main-slider/main-slider.js');
	@@include('../common/quote-block/quote-block.js');
	@@include('../common/video/video.js');
	@@include('../common/video-block/video-block.js');
	@@include('../common/rating/rating.js');
	@@include('../common/testimonials/testimonials.js');
	


	//=== checkbox-wrap add id for input ======================
	let checkBoxes = document.querySelectorAll('.checkbox-wrap');
	if(checkBoxes.length) {
		checkBoxes.forEach(checkBox => {
			let input = checkBox.querySelector('input[type="checkbox"]');
			let label = checkBox.querySelector('.checkbox-wrap__label');

			let id = label.getAttribute('for');

			input.id = id;
			
			input.addEventListener('change', () => {
				console.dir(input.checked);
				if(input.checked) {
					checkBox.classList.add('_checked')
				} else {
					checkBox.classList.remove('_checked')
				}
			})
			
		})
	}
	//=== // checkbox-wrap add id for input ======================
});

//@@include('plagins/lazy-load.js');

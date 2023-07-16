window.onload = function () {
	let preloader = document.getElementById('preloader');
	preloader.classList.add('preloader--hidden');
};

const asideContent = $('.nav__list');
const asideContentItem = $('.nav__link');

const callback = (entries, observer) => {
	$(entries).each((idx, item) => {
		const navItem = $('#' + item.target.id);

		if (item.isIntersecting) {
			$(asideContentItem).each((i, eachLink) => {
				if ($(eachLink).attr("href") === ('#' + $(navItem).attr('id'))) {
					$(eachLink).addClass('nav__link--active');
				} else {
					$(eachLink).removeClass('nav__link--active');
				}
			})
		}
	})
};

const options = {
	threshold: 0.3
};

const observer = new IntersectionObserver(callback, options);
const container = $('.main');
const targetElements = $('.main__section');

$(targetElements).each((idx, item) => {
	observer.observe(item);
});


// табы

let tabs = document.querySelector('.tabs');
let tabTrigger = document.querySelector('.tab-trigger');
let tabTriggers = document.querySelectorAll('.tab-trigger');
let tabBlocks = document.querySelectorAll('.tab-block');


tabTriggers.forEach((item) => {
	item.addEventListener('click', function (e) {
		e.preventDefault();
		const id = e.target.getAttribute('href').replace('#', '');

		tabTriggers.forEach(
			(child) => child.classList.remove('tab-trigger--active')
		);

		tabBlocks.forEach(
			(child) => child.classList.remove('tab-block--active')
		);

		item.classList.add('tab-trigger--active');
		document.getElementById(id).classList.add('tab-block--active');
	})
});

tabTrigger.click();

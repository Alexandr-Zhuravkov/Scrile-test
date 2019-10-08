document.addEventListener('DOMContentLoaded', function() {
	var targetValue = 15,
		reachedValue = 14,
		targetBox = document.querySelector('.target-val'),
		sliderVal = document.querySelector('.slider-val'),
		sliderBox = document.querySelector('.slider-box'),
		indicatorVal = document.querySelector('.indicator-val'),
		infoBox = document.querySelector('.info-box'),
		percentIndicator = parseInt(reachedValue * 100 / targetValue) + '%',
		lack = targetValue - reachedValue;

	sliderVal.textContent = reachedValue;
	targetBox.textContent = targetValue;
	infoBox.textContent = 'You need $'+ lack +' more to reach your target.'
	indicatorVal.style.width = percentIndicator;
	sliderBox.style.left = 'calc(' + percentIndicator + ' - 13px)';
});
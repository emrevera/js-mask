document.addEventListener('DOMContentLoaded', function(){

	const fixed = document.querySelector('.fixed');
	const mask = document.querySelector('.mask');
	const radious = mask.clientWidth / 2; 
	console.log(mask);

	function createMask(evt){

		const posX = `${evt.clientX - radious}px`;
		const posY = `${evt.clientY - radious}px`;

		if (evt.clientX < radious || evt.clientY < radious) {
			return;
		} else {
			mask.style.transform = `translate(${posX}, ${posY})`;
			mask.style.opacity = 1;
			fixed.style.height = `${window.innerHeight}px`;
			fixed.style.width = `${window.innerWidth}px`;
			fixed.style.transform = `translate(-${posX}, -${posY})`;
		}
	}

	document.addEventListener('mousemove', createMask);

});
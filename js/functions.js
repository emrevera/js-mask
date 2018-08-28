document.addEventListener('DOMContentLoaded', function(){

	const fixed = document.querySelector('.fixed');
	const mask = document.querySelector('.mask');
	const radious = mask.clientWidth / 2; 

	function createMask(evt){

		const posX = `${evt.clientX - radious}px`;
		const posY = `${evt.clientY - radious}px`;

		if (evt.clientX < radious && evt.clientY < radious) {
			mask.style.transform = `translate(0px, 0px)`;
			fixed.style.transform = `translate(0px, 0px)`;
		
		}	else if (evt.clientY < radious){
			mask.style.transform = `translate(${posX}, 0px)`;
			fixed.style.transform = `translate(-${posX}, 0px)`;

		}	else if (evt.clientX < radious) {
			mask.style.transform = `translate(0px, ${posY})`;
			fixed.style.transform = `translate(0px, -${posY})`;

		}	else {
			mask.style.transform = `translate(${posX}, ${posY})`;
			fixed.style.transform = `translate(-${posX}, -${posY})`;
		}

		fixed.style.height = `${window.innerHeight}px`;
		fixed.style.width = `${window.innerWidth}px`;
		mask.style.opacity = 1;
	}

	document.addEventListener('mousemove', createMask);

});
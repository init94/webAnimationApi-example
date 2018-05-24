const ballKeyFrames = [
	{transform: 'translateY(0px)'},
	{transform: 'translateY(-100px)', offset: 0.35},
	{transform: 'translateY(-120px)', offset: 0.6},
	{transform: 'translateY(-120px)', offset: 0.7},
	{transform: 'translateY(0px)'}
];

const shadowKeyFrames = [
	{transform: 'scale(1)'},
	{transform: 'scale(0.5)', offset: 0.35},
	{transform: 'scale(0.35)', offset: 0.6},
	{transform: 'scale(0.35)', offset: 0.7},
	{transform: 'scale(1)'},
];

const config = {
	duration: 800,
	iterations: Infinity,
}

const animation = document.querySelector('.pelota').animate(ballKeyFrames,config);

const shadowAnimation = document.querySelector('.shadow').animate(shadowKeyFrames,config);

animation.pause();
shadowAnimation.pause();

document.addEventListener('click', ()=> {
	animation.play();
	shadowAnimation.play();	
});




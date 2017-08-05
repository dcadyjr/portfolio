$(document).ready(function(){

	var controller = new ScrollMagic.Controller();

	// var pinIntro = new ScrollMagic.Scene({

	// 	triggerElement: '.intro',
	// 	triggerHook: 0.4,
	// 	duration: '90%'
	// })
	// .addIndicators({
	// 	name: 'start pin',
	// 	colorTrigger: 'red',
	// 	colorStart: '#75C695',
	// 	colorEnd: 'green'
	// })
	// .setPin('.intro', {pushFollowers: false})
	// .addTo(controller);

	var projectScene = new ScrollMagic.Scene({
		triggerElement: '.intro',
		duration: '30%',
		triggerHook: 0.1
	})
	.setClassToggle('.projects', 'fade-in')
	.addIndicators({
		name: 'fade scene',
		colorTrigger: 'black',
		colorStart: '#75C695',
		colorEnd: 'pink'
	})

	.addTo(controller);

});

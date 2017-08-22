$(document).ready(function(){

	var controller = new ScrollMagic.Controller();

	var wipeAnimation = new TimelineMax()
		.fromTo('#project1', 100, {x: '-100%'}, {x: "100%", ease: Linear.easeNone})
		.fromTo('#project2', 100, {x: '-100%'}, {x: "100%", ease: Linear.easeNone})
		.fromTo('#project3', 100, {x: '-100%'}, {x: "100%", ease: Linear.easeNone})
		.fromTo('#project4', 100, {x: '-100%'}, {x: "100%", ease: Linear.easeNone});



	var pinIntro = new ScrollMagic.Scene({

		triggerElement: ".projects",
		triggerHook: "onLeave",
		duration: '300%'
	})

	.setPin('.projects')
	.setTween(wipeAnimation)
	.addIndicators({
		name: 'start pin 2',
		colorTrigger: 'red',
		colorStart: '#75C695',
		colorEnd: 'green'
	})
	.addTo(controller);

});

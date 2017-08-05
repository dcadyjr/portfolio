$(document).ready(function(){

	var controller = new ScrollMagic.Controller();

	var wipeAnimation = new TimelineMax()
		.fromTo('#project1', 1, {x: '-100%'}, {x: "0%", ease: Linear.easeNone})
		.fromTo('#project2', 1, {x: '-100%'}, {x: "0%", ease: Linear.easeNone})
		.fromTo('#project3', 1, {x: '-100%'}, {x: "0%", ease: Linear.easeNone});


	// var firstScene = new ScrollMagic.Scene({
	// 	triggerElement: '.intro',
	// 	duration: '10%',
	// 	triggerHook: "onEnter"
	// })
	// .setClassToggle('.projects', 'fade-in')
	// .addIndicators({
	// 	name: 'fade scene 1',
	// 	colorTrigger: 'black',
	// 	colorStart: '#75C695',
	// 	colorEnd: 'pink'
	// })
	// .addTo(controller);


	// var projectsScene = new ScrollMagic.Scene({
	// 	triggerElement: '.projectsTitle',
	// 	duration: '70%',
	// 	triggerHook: "onEnter"

	// })
	// .setClassToggle('#project1', 'fade-in')
	// .addIndicators()
	// .addTo(controller);

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

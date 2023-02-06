$(document).ready(function(){

	var screenHeight = window.innerHeight;
	TweenMax.set($("svg"), {
	  visibility: "visible",
	  height: screenHeight
	});

	TweenMax.set($(".btnContainer"), {
	  visibility: "visible",
	  top: ( screenHeight / 2 - 110)
	});

	var tl = new TimelineMax();

	tl.from("#handAndMobile", 0.3, {
		y: "-200", 
		opacity: 0,
    ease: Power4.easeOut
	}).from("#Mobile", 0.4 , {
		y: "-150", 
		opacity: 0
	}).staggerFrom(".usr", 0.6, {
		cycle: { 
			x:[-100,100], 
			y:[100,-100] 
		}, opacity: 0,
		ease: Elastic.easeInOut.config(1, 0.6)
	}, 0.2).from("#lineMekat3", 0.2, {
		opacity: 0
	}).to("#lineMekat3", 0.4, {
		rotation: 360 , 
		transformOrigin: "50% 50%"
	}).staggerFrom(".icon", 0.2, {
		cycle: { 
			y:[500,-500] 
		}, opacity: 0,
		ease: Elastic.easeInOut.config(1, 0.4)
	}, 0.1).from(".rectInMobile", 0.2, {
		transformOrigin: "50% 50%",
		scale: 0
	}).from(".imgInMobile", 0.2, {
		transformOrigin: "50% 50%",
		scale: 0
	}).staggerFrom(".iconInMobile", 1, {
		cycle: { 
			x:[-100,100] 
		}, opacity: 0,
		ease: Elastic.easeInOut.config(1, 0.1)
	}, 0.2);

	
	// btns animation
	var tl2 = new TimelineMax();
	tl2.staggerFrom(".btnContainer p", 0.5, {
		cycle: { 
			y:[500,-500] 
		}, opacity: 0
	}, 0.3); 
	// end

	document.getElementById('restart').addEventListener('click', function() {
	    tl.restart();
	}, false);

	document.getElementById('reverse').addEventListener('click', function() {
	    tl.reverse();
	}, false);

	document.getElementById('pause').addEventListener('click', function() {
	    tl.pause();
	}, false);

	document.getElementById('resume').addEventListener('click', function() {
	    tl.resume();
	}, false);

});
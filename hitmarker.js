var hmPath = 'IMG/hitmarker.png';
var hmDelay = 125;
var hmLifetime = 1000;
var hmSound; // load on start event

window.addEventListener('load', function(event) {
	var button = document.getElementById('hitmarkerButton');

	hmSound = new Audio('SND/hitmarker.wav');

	button.addEventListener('click', function(event) {
		var go = confirm('Are you sure?');
		setInterval(spawnHitmarker, hmDelay);
	});
});

function spawnHitmarker() {
	var hm = document.createElement('img');
	hm.src = hmPath;

	hm.style.position = 'absolute';
	hm.style.pointerEvents = 'none';
	hm.style.left = random(0, window.innerWidth - 2 * hm.width) + 'px';
	hm.style.top = random(0, window.innerHeight - 2 * hm.height) + 'px';

	setTimeout(elementRemover(hm), hmLifetime);

	document.body.appendChild(hm);

	hmSound.play();
}

// random in [min, max)
function random(min, max) {
	return min + Math.floor(Math.random() * (max - min));
}

// TODO: move to "utility" file
function elementRemover(elem) {
	return function() {
		elem.parentElement.removeChild(elem);
	};
}

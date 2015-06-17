var hmPath = 'IMG/hitmarker.png';
var hmDelay = 125;
var hmLifetime = 1000;
var hmSoundElement; // load on start event

window.addEventListener('load', function(event) {
	var button = document.getElementById('hitmarkerButton');

	hmSoundElement = document.createElement('audio');
	hmSoundElement.src = 'SND/hitmarker.wav';

	button.addEventListener('click', function(event) {
		var go = confirm('Are you sure?');
		setInterval(spawnHitmarker, hmDelay);
	});
});

function spawnHitmarker() {
	var hm = document.createElement('img');
	hm.src = hmPath;

	hm.style.position = 'absolute';
	//hm.style.clear = 'both';
	hm.style.left = random(0, window.innerWidth - 2 * hm.width) + 'px';
	hm.style.top = random(0, window.innerHeight - 2 * hm.height) + 'px';

	setTimeout(elementRemover(hm), hmLifetime);

	document.body.appendChild(hm);

	hmSoundElement.play();
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
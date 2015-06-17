var soundFiles = {
	'Airhorn': 'SND/airhorn.mp3'
};

window.addEventListener('load', function(event) {
	console.log("aiusfdh");
	var buttons = document.getElementsByClassName('soundButton');
	for(var i = 0; i < buttons.length; i++) {
		setupSoundButton(buttons[i]);
	}
});

// TODO: load sounds in background, play when clicked
function setupSoundButton(button) {
	button.addEventListener('click', function(event) {
		var a = document.createElement('audio');
		a.src = soundFiles[button.textContent];
		a.autoplay = 'autoplay';

		a.addEventListener('ended', elementRemover(a));

		document.body.appendChild(a);
	});
}
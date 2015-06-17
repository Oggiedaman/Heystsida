var soundNames = {
	'Airhorn': 'SND/airhorn.mp3'
};

window.addEventListener('load', function(event) {
	var buttons = document.getElementsByClass('soundButton');
	for(var i = 0; i < buttons.length; i++) {
		setupSoundButton(buttons[i]);
	}
});

function setupSoundButton(button) {
	button.addEventListener('click', function(event) {
		var a = document.createElement('audio');
		a.src = soundFiles[button.textContent];
	});
}
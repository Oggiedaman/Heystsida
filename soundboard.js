var sounds = [
	{name: 'Airhorn', fileName: 'SND/airhorn.mp3'},
	{name: 'Smoke Weed', fileName: 'SND/smokeweed.mp3'},
	{name: 'Oh baby a triple', fileName: 'SND/triple.mp3'},
];

window.addEventListener('load', function(event) {
	var buttons = document.getElementsByClassName('soundButton');
	loadSounds();
	for(var i = 0; i < buttons.length; i++) {
		setupSoundButton(buttons[i]);
	}
});

function loadSounds() {
	for(var i = 0; i < sounds.length; i++) {
		var a = document.createElement('audio');
		a.src = sounds[i].fileName;
		sounds[i].element = a;
		document.body.appendChild(a);
	}
}

function setupSoundButton(button) {
	button.addEventListener('click', function(event) {
		//crappy searching...
		for(var i = 0; i < sounds.length; i++) {
			if(button.textContent == sounds[i].name) {
				sounds[i].element.play();
			}
		}
	});
}
var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'yamato.png') {
		myImage.setAttribute ('src','wqhc.jpg');
	} else {
		myImage.setAttribute ('src','wqhc.jpg')
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name',myName);
	myHeading.innerHTML = 'yamato is cool,' + myName;
}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	var storeName = localStorage.getItem('name');
	myHeading.innerHTML = 'yamato is cool, ' + storeName;
}

myButton.onclick = function() {
	setUserName();
}
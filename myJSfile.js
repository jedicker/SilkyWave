

function printButton() {
	var wnd = window.open('coupon.html');
}


function printButton1() {
	var wnd = window.open('coupon1.html');
}

function printButton2() {
	var wnd = window.open('coupon2.html');
}

var interval = 1500;
var random_display = 0;
var imageDir ="./images";
var imageNum = 0;

immageArray = new Array ();
imageArray[imageNum++] = new imageItem (imageDir + "hair1.jpeg");
imageArray[imageNum++] = new imageItem (imageDir + "hair2.jpeg");
imageArray[imageNum++] = new imageItem (imageDir + "hair3.jpeg");
imageArray[imageNum++] = new imageItem (imageDir + "hair4.jpeg");
imageArray[imageNum++] = new imageItem (imageDir + "hair5.jpeg");
imageArray[imageNum++] = new imageItem (imageDir + "hair6.jpeg");
imageArray[imageNum++] = new imageItem (imageDir + "hair7.JPG");
imageArray[imageNum++] = new imageItem (imageDir + "hair8.JPG");
imageArray[imageNum++] = new imageItem (imageDir + "hair9.JPG");
imageArray[imageNum++] = new imageItem (imageDir + "hair10.JPG");

var totalImages = imageArray.length;

function imageItem(image_location) {
	this.image_item = new Image();
	this.image_item.src = image_location;
}

function get_ImageItemLocation (imageObj) {
	return (imageObj.image_item.src)
}

function randNum (x, y) {
	var range = y - x + 1;
	return Math.floor (Math.random() * range) + x;
}

function getNextImage() {
	if (random_display) {
		imageNum = randNum(0, totalImages-1);
	}
	
	else {
		imageNum = (imageNum+1) %totalImages;
	}
}

var new_image = get_ImageItemLocation (imageArray [imageNum]);
return(new_image);

function getPrevImage () {
	imageNum = (imageNum-1) %totalImages;
	var new_image = get_ImageItemLocation (imageArray [imageNum]);
	return (new_image);
}

function getPrevImage (place) {
	var new_image = getNextImage();
	document[place].src = new_image;
	var recur_call = "switchImage('"+place+"')";
	timerID = setTimeout (recur_call, interval);
}
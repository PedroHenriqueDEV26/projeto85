canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

greencar_width = 75;
greencar_height = 100;

greencar_x = 5;
greencar_y = 225;

backgroundImage = "parkingLot.jpg";
greencarImage = "car2.png";

//Defina a posição inicial para uma imagem de carro.

function add() {
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = background_image;

	green_imgTag = new Image();
	green_imgTag.onload = uploadGreenCar
	green_imgTag.src = greencar_image;
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.height);

}

function uploadGreenCar() {
	ctx.drawImage(green_imgTags, greencar_x, greencar_y, greencar_width, greencar_height);

	
}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_y >=0)
	{
		greencar_y = greencar_y - 10;
		console.log("When up arrow is pressed, x = " + greencar_x + "| y =" +greencar_y);
		uploadBackground();
		uploadGreenCar();
	}
}

function down()
{
	if(greencar_y >=0)
	{
		greencar_y = greencar_y - 10;
		console.log("When up arrow is pressed, x = " + greencar_x + "| y =" +greencar_y);
		uploadBackground();
		uploadGreenCar();
	}
}

function left()
{
	if(greencar_y >=0)
	{
		greencar_y = greencar_y - 10;
		console.log("When up arrow is pressed, x = " + greencar_x + "| y =" +greencar_y);
		uploadBackground();
		uploadGreenCar();
	}
}

function right()
{
	if(greencar_y >=0)
	{
		greencar_y = greencar_y - 10;
		console.log("When up arrow is pressed, x = " + greencar_x + "| y =" +greencar_y);
		uploadBackground();
		uploadGreenCar();
	}
}

function setup()
{
    var canvas =  createCanvas(600,500);
    canvas.position(270,120);
    video=createCapture(VIDEO);
    video.position(50, 50);
    video.size(180, 200);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
    cannon_one= loadImage('cannon1.png');
}
function gotPoses(results)
  {
	if(results.length > 0)
	{
	  console.log(results);
	  noseX = results[0].pose.nose.x;
	  noseY = results[0].pose.nose.y;
	}
  }  
function draw() {
	game();
}

function modelLoaded()
{
    console.log("Model Loaded");
}
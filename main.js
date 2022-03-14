function setup(){
    var canvas =  createCanvas(700,600);
    canvas.parent('canvas');
    
    video = createCapture(VIDEO);
    video.size(700, 600);
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    video.hide();
    }
function gotPoses(results)
{
  if(results.length > 0)
  {

    rightWristY = results[0].pose.rightWrist.y;
    rightWristX = results[0].pose.rightWrist.x;
    scoreRightWrist =  results[0].pose.keypoints[10].score;
    console.log(scoreRightWrist);
  }
}
function modelLoaded() {
    console.log('PoseNet Is Initialized');
  }
  function draw(){

    background(0); 
    image(video, 0, 0, 700, 600);
  }
mX = 0;
mY = 0;

function preload() {
    Moustache= loadImage("moustache.png");
}

function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);

    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("Posenet is initialized!")
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        mX = results[0].pose.nose.x-10;
        mY = results[0].pose.nose.y-10;
    }
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(Moustache,mX,mY,40,40)
}

function takesnapshot(){
    save('yourPicture.png');
}
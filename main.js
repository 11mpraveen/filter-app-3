lipX = ""
lipY = ""
function preload(){
lipstick = loadImage("")
}

function setup(){
    canvas = createCanvas(400,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    posenet = ml5.poseNet(video,modeloaded);
    posenet.on('pose',gotposes);
}

function draw(){
    image(video,0,0,300,300); 
    fill("pink");
    stroke("pink");
 image(lipstick,lipX,lipY,30,30);
}

function modeloaded(){
    console.log("ml5 library has been loaded successfully")
}

function gotposes(results){
    if(results.length > 0){
        console.log(results);
        console.log("nosex =" + results[0].pose.nose.x);
        console.log("nosey =" + results[0].pose.nose.y);
       lipX = results[0].pose.nose.x - 20;
        lipY = results[0].pose.nose.y - 20;
    }
}


function pic_download(){
    save('mypicture.png');
}
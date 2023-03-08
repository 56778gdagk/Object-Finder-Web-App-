Status = "";

function setup()
{
    canvas = createCanvas(300,300);
    canvas.position(490,250);
    video = createCapture();
    video.hide();
}
function start()
{
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    object_name = document.getElementById("object").value;
}
function draw()
{
    image(video,490,250,300,300);
}
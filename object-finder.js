Status = "";
objects = [];

function setup()
{
    canvas = createCanvas(300,300);
    canvas.position(490,300);
    video = createCapture();
    video.hide();
}

function start()
{
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status_model").innerHTML = "Status : Detecting Objects";
    object_name = document.getElementById("object").value;
    
    if(objects[i].label == object_name)
    {
        video_webcamLiveView.stop();
        objectDetector.detect(gotResults);
        
        var synth = window.speechSynthesis;
        var speak_data = "The Object found " + object_name;
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }
    else
    {
        document.getElementById("status_whether").innerHTML = object_name + " found";
    }
}

function draw()
{
    image(video,0,0,300,300);
    if(Status != "")
    {
        objectDetector.detect(video, gotResults);
        for(i = 0; i < objects.length; i++)
        {
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            fill("#FF0000");
            noFill();
            stroke("#0a0a0a");
            rect(objects[i].x , objects[i].y, objects[i].width, objects[i].height);
        }
    }
}

function modelLoaded()
{
    console.log("coossd is initialized");
}

function gotResults(error, results)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        objects = results;
    }
}
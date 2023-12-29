Webcam.set({
width: 400,
height: 400,
image_format: 'png',
png_quality: 200
});
 
camera = document.getElementById("camera");
Webcam.attach('camera');

//declare a var named classifier:
var classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/buarviYMJ/model.json', modelLoaded);

//create the modelLoaded function:
function modelLoaded(){
    //display on the console a checkopoint message "model ok!":
    console.log("Model ok!");
}

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="result" src="'+data_uri+'"/>';
    });
}



//create the check function:
function check(){
    //declare the img var
    var img = document.getElementById("result");
    classifier.classify(img, gotResult);
    
    
}

//create the got Result function:
function gotResult(error, results){
    //build if else statement for the 2 diff options (error, results):
    if (error){
        console.log(error);
    } else {
        //display on the console the list of results:
       console.log(results)
        document.getElementById("result_object").innerHTML = results[0].label;
    }
    
    
}
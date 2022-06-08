Webcam.set({
    Width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 verision',ml5.verision);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/sC3Z76FkH/model.json')

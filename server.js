var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();

app.get("/", function(req, res){
    let resText = "<h2>Declaration</h2> <br> <br>";
    resText += "Instructions The rest text is diplayed in the paragraph as shown in the screenshot.<br><br>"; 
    resText += "I declare that this test is done on my own work in accordance with seneca academic policy. No part of this test has been copied manually or electronically from any other source.<br><br>"; 
    resText += "Name: Damanjot Singh<br><br>";
    resText += "Student Number: 148285216";
    resText += "<a href = './pages/test1.html'> Go to Test 1 </a> <br>"; 
    resText += "Instruction test 1 is a link which directs me to test 1 <br>"; 
    res.send(resText);
});

app.listen(HTTP_PORT);
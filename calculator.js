
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
const port = 3000;

app.get("/", function(req, res){
   res.sendFile(__dirname + "/index.html");
});

app.get("/bmicalculator", function (req, res) {
   res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", function(req, res) {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;
   res.send(" Congratulations!!! you have just made it " + result);
});

app.post("/bmicalculator", function (req, res) {
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
   var bmi = Math.round(weight / Math.pow(height, 2));

   var result = bmi;
   res.send("<em><strong> Your BMI is</strong></em> " + result);
});

app.listen(port, function()  {
   console.log(`Example app listening at http://localhost:${port}`);
});
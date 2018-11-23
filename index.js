var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');
    
var todoRoutes = require("./routes/todos");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static("../todosfrontend/build"));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });



app.use('/api/todos', todoRoutes);
var port = process.env.PORT || 3001;
app.listen(port, function(){
    console.log("APP IS RUNNING ON PORT " + port);
})
    
    
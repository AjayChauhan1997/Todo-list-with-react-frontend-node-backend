const express =require('express');
const bodyParser=require('body-parser');
const todoRoutes=require('./Routes/todoRoutes.js')
const mongoose=require('mongoose');
const cors=require('cors');
const app=express();
const port=5000;
const url='mongodb://127.0.0.1:27017/todolistnewDB';
app.use(express.static("public"));
app.use(bodyParser.json({ limit: "20mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));
app.use(cors());
app.use("/todo",todoRoutes);
app.get("/",(req,res)=>{
    console.log(__dirname);
//res.sendFile(__dirname+"./public/html/home.html");
res.send("hello");

});

app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
  });



mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true
}).then(() => app.listen(port, () => {
    console.log("Success!! connection stablish and running on PORT " + port);
})).catch((error) => console.log("Fail!! connection not stablished :"+error));


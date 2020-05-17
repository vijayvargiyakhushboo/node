var express =  require('express');
var app = express();
app.get('/Node',function(req,res) {
    res.send("route on node");
});
app.get('/Ang',function(req,res) {
   res.send("route on ang")
});
app.get('/',function(req,res){
    res.send('Welcome to Guru99 Tutorials');
})
var server = app.listen(4000,function() {});
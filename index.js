var express = require('express');
 
var app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/api/users',require('./routes/api/users'))
// app.get('/',(req,res)=>{
// 	res.send('Hello world');
// })

app.listen(8000,()=>{
	console.log("server running on port : 8000");
})

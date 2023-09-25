
const express = require('express');

//Express app
const app = express();

//register view engine
app.set ('view engine', 'ejs'); //set lets us set some settings it looks into views folder for ejs files



//listen for request
app.listen(3000); //starting the server

// here app responds to get command it has 2 arguments (what app listens to , function(req,res))  req like get or post , res is what the server responds with
app.get ('/' , (req, res) => {
const blogs = [
 {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
 {title: 'Mario finds starts', snippet: 'Lorem ipsum dolor sit amet consectetur'},
 {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
];

    res.render('index' , { title : 'Home' , blogs:blogs}); // no need for the old code now , we are using ejs engine to render a view.// we added tilte home to send it to index file
});                                       // here for blogs as they are the same I can simply write blogs one time and it will undertand.


app.get ('/about' , (req, res) => {  
   res.render('about' , { title : 'About'}); 
});

app.get ('/blogs/create' , (req, res) => {   
   res.render('create' , { title : 'Create a new blog'}); 
});



 // 404 page
 app.use((req, res) => { 
   // res.sendFile('./views/404.html', {root: __dirname});
   res.status(404).render('404' , { title : '404'}); 
});

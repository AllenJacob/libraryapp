const express = require('express');
const app = express();
const nav = [
    {
        link:'/books',name:'Books' 
    },
    {
        link:'/authors',name:'authors'
    },
    {
        link:'/login',name:'Login'
    },
    {
        link:'/signup',name:'Signup'
    }
];
const booksRouter = require("./src/routes/bookRoutes")(nav);
const author = require("./src/routes/authors")(nav);
const loginrouter = require("./src/routes/loginrouter")(nav);
const signuprouter = require("./src/routes/signuprouter")(nav);

app.use(express.static(__dirname+'/public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',author);
app.use('/login',loginrouter);
app.use('/signup',signuprouter);
app.get('/',function(req,res){
    res.render("index",
    {
      nav:[{link:'/books',name:'Books'},{link:'/authors',name:'authors'},{link:'/login',name:'Login'},{link:'/signup',name:'signup'}],
      title:'Library'  
    });
});

    


app.listen(5000);
const express = require('express');
const booksRouter = express.Router();
function router(nav) {
    var books = [
        {
            title:'2 States',
            author:'Chetan Bhagat',
            genre:'Novel',
            img:"2states.jpg"
        },
        {
            title:'3 Musketeers',
            author:'Alexandre Dumas',
            genre:'Novel',
            img:"3musketeers.jpg"
        },
        {
            title:'Sherlock Holmes',
            author:'Arthur Conan Doyle',
            genre:'Detective Novel',
            img:"sherlock.jpg"
        }
    ]
    booksRouter.get('/',function(req,res){
        res.render("books",
        {
          nav,
          title:'Books',
          books  
        });
    });
    booksRouter.get('/:i',function(req,res){
        const i = req.params.i
        res.render('book',{
            nav,
            title:'Book',
            book : books[i]
        });
    });

    return booksRouter;
    
}


module.exports = router;
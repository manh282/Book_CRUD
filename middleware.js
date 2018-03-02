const Book = require('./book');

module.exports = (req, res, next) => {
  let book = new Book(
      req.body.title,
      req.body.author,
      req.body.publisher,
      req.body.price
  );

    if(book.title.length > 40) {
        return res.json({message:"title > 40"});
    } else if(!book.title.length){
        return res.json({message:"title is the not null!!!"});
    } else if(book.author.length > 40) {
        return res.json({message:"author > 100"});
    } else if(!book.author.length){
        return res.json({message:"author is the not null!!!"});
    }

    next();
};
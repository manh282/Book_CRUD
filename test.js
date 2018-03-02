const Book = require('./book');
const BookRepository = require('./book-repository');

const knex = require('knex')({
   client : 'mysql',
   connection : {
       host : 'localhost',
       user : 'root',
       password : ' ',
       database : 'Book'
   }
});


let repository = new BookRepository(knex);



/// TODO test from here

// let book = new Book('Gio thi anh hua de lam cai lol` j`');
// book.setId(1);
// repository.save(book);
// //
// repository.delete(2).then(() => {
//     console.log('success');
// });
repository.all().then( (result) => {
    console.log(result)
});
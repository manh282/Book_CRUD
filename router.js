const express = require('express');
const Router  = express.Router;
const Book    = require('./book');
const Middleware = require('./middleware');
let router = new Router();

/**
 * Create book
 */
router.post('/create', Middleware, (request, response, next) => {

    let repository = request.app.get('books');

    let book       = new Book(
        request.body.title,
        request.body.author,
        request.body.publisher,
        request.body.price
    );

    repository.insert(book)
        .then(() => {
            response.status(200).json({message: 'Success!'})
        })
        .catch(next)
});

/**
 * Read all bopk
 */
router.get('/listBook', (request, response, next) => {

    let repository = request.app.get('books');

    repository.findAll()
        .then( (result) => {
            response.status(200).json(result);
        })
        .catch(next)

});

/**
 * Update book
 */
router.put('/update', Middleware, (request, response, next) => {
    let repository = request.app.get('books');
    let book       = {
        id:        request.body.id,
        title:     request.body.title,
        author:    request.body.author,
        publisher: request.body.publisher,
        price:     request.body.price
    };

    repository.update(book)
        .then(() => {
            response.status(200).json({message: 'Update success!'})
        })
        .catch(next)
});

/**
 * soft delete book
 */
router.patch('/delete',(request, response, next) => {

    let repository = request.app.get('books');
    let idBook     = request.body.id;

    repository.delete(idBook)
        .then(() => {
            response.status(200).json({message: 'Delete success!'})
        })
        .catch(next)

});
/**
 * search id
 */
router.get('/search/:id', (request, response, next) => {
    let repository = request.app.get('books');
    let idBook     = request.params.id;

    repository.condition(idBook)
        .then((result) => {
            response.status(200).json(result)
        })
        .catch(next)
});
module.exports = router;

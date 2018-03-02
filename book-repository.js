class BookRepository {

    /**
     *
     * @param connection
     */
    constructor(connection) {
        this.connection = connection;
    }

    /**
     *
     * @param {Book} book
     * @return {Promise<void>}
     */
    update(book) {
        return this.connection('books')
            .update(book)
            .where('id', book.id)
            ;
    }

    /**
     *
     * @param book
     */
    insert(book) {
        return this.connection('books').insert({
            title     : book.getTitle(),
            author    : book.getAuthor(),
            publisher : book.getAuthor(),
            price     : book.getPrice()
        });
    }

    /**
     * @return {Promise<Book[]>}
     */
    findAll() {
        return this.connection.select().table('books');
    }

    /**
     * @param {int} id
     * @return {Promise<void>}
     */
    delete(id) {
        return this.connection('books')
            .update({delete_at : new Date()})
            .where({id: id})
            ;
    }

    /**
     *
     * @param {int} id
     * @returns {string}
     */
    condition(id) {
        return this.connection('books')
        .select()
        .where({id: id})
    }
}

module.exports = BookRepository;

class Book {
    /**
     *
     * @param {string} title
     */
    constructor(id, title, author, publisher, price) {
        this.title = title;
        this.author = author;
        this.publisher = publisher;
        this.price = price;
    }
    getId(){
        return this.id;
    }
    /**
     *
     * @return {string}
     */
    getTitle() {
        return this.title;
    }

    /**
     *
     * @return {int|null}
     */
    getId() {
        return this.id;
    }

    /**
     *
     * @returns {string}
     */
    getAuthor(){
        return this.author;
    }

    /**
     *
     * @returns {string}
     */
    getPublisher(){
        return this.publisher;
    }

    /**
     *
     * @returns {float}
     */
    getPrice(){
        return this.price;
    }

    /**
     *
     * @param {int} id
     */
    setId(id) {
        this.id = id;
    }

    /**
     *
     * @returns {{id: int, title: string}}
     */
    toJson() {
        return {
            id: this.getId(),
            title: this.getTitle(),
            author: this.getAuthor(),
            publisher: this.getPublisher(),
            price: this.getPrice()
        }
    }
}

module.exports = Book;

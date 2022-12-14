import axios from 'axios';

const WEB_PROJ_API_BOOKS_GET_BASE_URL = 'http://localhost:8080/web_proj_api/books';

const WEB_PROJ_API_BOOK_BASE_URL = 'http://localhost:8080/web_proj_api/book'

class BookService {


    getBooks() {
        return axios.get(WEB_PROJ_API_BOOKS_GET_BASE_URL);
    }

    postBook(book) {
        console.log('book => ' + JSON.stringify(book));
        return axios.post(WEB_PROJ_API_BOOK_BASE_URL, book);
    }

    getBookById(bookId) {
        return axios.get(WEB_PROJ_API_BOOK_BASE_URL + '/' + bookId);
    }

    updateBook(book, bookId) {
        return axios.put(WEB_PROJ_API_BOOK_BASE_URL + '/' + bookId, book);
    }

    deleteBook(bookId) {
        return axios.delete(WEB_PROJ_API_BOOK_BASE_URL + '/' + bookId);
    }

}

export default new BookService()
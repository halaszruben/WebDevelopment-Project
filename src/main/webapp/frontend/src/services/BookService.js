import axios from 'axios';

const WEB_PROJ_API_BOOKS_GET_BASE_URL = 'http://localhost:8080/web_proj_api/books';

const WEB_PROJ_API_BOOKS_POST_BASE_URL = 'http://localhost:8080/web_proj_api/book'

class BookService {


    getBooks() {
        return axios.get(WEB_PROJ_API_BOOKS_GET_BASE_URL);
    }

    postBook(book) {
        console.log('book => ' + JSON.stringify(book));
        return axios.post(WEB_PROJ_API_BOOKS_POST_BASE_URL, book).then
    }
}

export default new BookService()
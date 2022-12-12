import axios from 'axios';

const WEB_PROJ_API_BOOKS_BASE_URL = 'http://localhost:8080/web_proj_api/books';

class BookService {

    getBooks() {
        return axios.get(WEB_PROJ_API_BOOKS_BASE_URL);
    }
}

export default new BookService()
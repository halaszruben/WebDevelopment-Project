package inf.unideb.hu.WebProject.Controller;

import inf.unideb.hu.WebProject.Dto.BookDto;
import inf.unideb.hu.WebProject.Entity.BookEntity;
import inf.unideb.hu.WebProject.Repository.BookRepository;
import inf.unideb.hu.WebProject.Service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/web_proj_api")
@RestController
public class BookController {

    @Autowired
    BookService bookService;

    @Autowired
    BookRepository bookRepository;

    /**
     * In order to be easier to test the CRUD operations, here are some examples.
     *
     * @return The created examples.
     */
    @PostMapping("/booksInitializer")
    public ResponseEntity<List<BookDto>> saveBooks() {

        List<BookDto> books = Arrays.asList(
                new BookDto("The Fellowship of the Ring", "J.R.R. Tolkien", "Fantasy", 5500),
                new BookDto("The Two Towers", "J.R.R. Tolkien", "Fantasy", 5500),
                new BookDto("The Return of the King", "J.R.R. Tolkien", "Fantasy", 5500)
        );

        return new ResponseEntity<>(bookService.saveAll(books),
                HttpStatus.CREATED);
    }

    @GetMapping("/book/{id}")
    public ResponseEntity<BookDto> getBook(@PathVariable Integer id) {

        ResponseEntity<BookDto> bookDtoResponseEntity = new ResponseEntity<>(
                bookService.findById(id)
                , HttpStatus.OK
        );

        return bookDtoResponseEntity;
    }

    @GetMapping("/books")
    public ResponseEntity<List<BookDto>> getBooks() {

        try {
            List<BookDto> books = bookService.listAll();

            if (books.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            } else {
                return new ResponseEntity<>(books, HttpStatus.OK);
            }

        } catch (Exception exception) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/book")
    public ResponseEntity<BookEntity> saveBook(@RequestBody BookEntity book) {

        ResponseEntity<BookEntity> bookEntityResponseEntity = new ResponseEntity<>(
                bookRepository.save(book)
                , HttpStatus.CREATED);

        return bookEntityResponseEntity;
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/book/{id}")
    public ResponseEntity deleteBook(@PathVariable Integer id) {

        bookRepository.deleteById(id);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/book/{id}")
    public ResponseEntity<BookEntity> updateBook(@RequestBody BookEntity book, @PathVariable Integer id) {

        BookEntity bookEntity = bookRepository.getReferenceById(id);

        bookEntity.setName(book.getName());
        bookEntity.setAuthor(book.getAuthor());
        bookEntity.setType(book.getType());
        bookEntity.setPrice(book.getPrice());

        return new ResponseEntity<>(bookRepository.save(bookEntity)
                , HttpStatus.CREATED);
    }



}

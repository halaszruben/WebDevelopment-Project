package inf.unideb.hu.WebProject.Service.Implementation;

import inf.unideb.hu.WebProject.Dto.BookDto;
import inf.unideb.hu.WebProject.Entity.BookEntity;
import inf.unideb.hu.WebProject.Repository.BookRepository;
import inf.unideb.hu.WebProject.Service.BookService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BookServiceImpl implements BookService {

    @Autowired
    BookRepository bookRepository;

    @Autowired
    ModelMapper modelMapper;


    @Override
    public List<BookDto> saveAll(List<BookDto> list) {

        for (BookDto bookDto : list) {
            bookRepository.save(modelMapper.map(bookDto, BookEntity.class));
        }
        return null;
    }

    @Override
    public List<BookDto> listAll() {

        List<BookDto> books = new ArrayList<>();

        for (BookEntity bookEntity : bookRepository.findAll()) {
            books.add(modelMapper.map(bookEntity, BookDto.class));
        }

        return books;
    }

    @Override
    public BookDto save(BookDto book) {

        BookEntity bookEntity = modelMapper.map(book, BookEntity.class);
        bookEntity = bookRepository.save(bookEntity);

        return modelMapper.map(bookEntity, BookDto.class);
    }

    @Override
    public void deleteById(Integer id) {
        bookRepository.deleteById(id);
    }

    @Override
    public BookDto findById(Integer id) {

        BookEntity bookEntity = bookRepository.getReferenceById(id);

        return modelMapper.map(bookEntity, BookDto.class);
    }
}

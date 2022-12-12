package inf.unideb.hu.WebProject.Service;

import inf.unideb.hu.WebProject.Dto.BookDto;

import java.util.List;

public interface BookService {

    List<BookDto> saveAll(List<BookDto> list);

    List<BookDto> listAll();

    BookDto save(BookDto book);

    void deleteById(Integer id);

    BookDto findById(Integer id);
}

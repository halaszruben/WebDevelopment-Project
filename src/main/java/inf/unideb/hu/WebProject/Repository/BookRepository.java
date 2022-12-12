package inf.unideb.hu.WebProject.Repository;

import inf.unideb.hu.WebProject.Entity.BookEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<BookEntity, Integer> {
}

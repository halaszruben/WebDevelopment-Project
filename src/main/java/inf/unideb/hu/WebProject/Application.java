package inf.unideb.hu.WebProject;

import inf.unideb.hu.WebProject.Entity.BookEntity;
import inf.unideb.hu.WebProject.Entity.Role;
import inf.unideb.hu.WebProject.Entity.User;
import inf.unideb.hu.WebProject.Repository.BookRepository;
import inf.unideb.hu.WebProject.Repository.UserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Arrays;
import java.util.List;
import java.util.Set;

@SpringBootApplication
public class Application implements CommandLineRunner {

    @Autowired
    private BookRepository bookRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    PasswordEncoder encoder;

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @Bean
    public ModelMapper modelMapper() {
        return new ModelMapper();
    }

    @Override public void run(String... args) throws Exception {
        initData();
        initSecurity();
    }

    private void initData() {
        List<BookEntity> books = Arrays.asList(
            new BookEntity("The Fellowship of the Ring", "J.R.R. Tolkien", "Fantasy", "5500"),
            new BookEntity("The Two Towers", "J.R.R. Tolkien", "Fantasy", "5500"),
            new BookEntity("The Return of the King", "J.R.R. Tolkien", "Fantasy", "5500")
        );

        bookRepository.saveAll(books);
    }

    private void initSecurity() {
        User admin = new User();
        admin.setUsername("admin");
        admin.setPassword(encoder.encode("admin"));
        admin.setRoles(Set.of(
            new Role("ROLE_ADMIN")
        ));
        admin.setEnabled(true);

        userRepository.save(admin);

        User user = new User();
        user.setUsername("user");
        user.setPassword(encoder.encode("user"));
        user.setRoles(Set.of(
            new Role("ROLE_USER")
        ));
        user.setEnabled(true);

        userRepository.save(user);
    }
}

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class PassWordGenerator {

    public static void main(String[] args) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

        String raw = "admin";

        String encoded = encoder.encode(raw);

        System.out.println("THE CODE IS = ( " + encoded + " )!!!!!!!!!");
    }
}

package inf.unideb.hu.WebProject.Entity;

import jakarta.persistence.*;

@Entity
@Table(name = "roles")
public class Role {

    public Role(String name) {
        this.name = name;
    }

    @Id
    @Column(name = "role_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;

    public Role() {

    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}

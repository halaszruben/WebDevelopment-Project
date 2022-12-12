package inf.unideb.hu.WebProject.Dto;

import java.util.Objects;

public class BookDto {

    private Integer id;

    private String name;

    private String author;

    private String type;

    private Integer price;

    public BookDto() {
    }

    public BookDto(String name, String author, String type, Integer price) {
        this.name = name;
        this.author = author;
        this.type = type;
        this.price = price;
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

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        BookDto bookDto = (BookDto) o;
        return Objects.equals(id, bookDto.id)
                && Objects.equals(name, bookDto.name)
                && Objects.equals(author, bookDto.author)
                && Objects.equals(type, bookDto.type)
                && Objects.equals(price, bookDto.price);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, author, type, price);
    }

    @Override
    public String toString() {
        return "BookDto{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", author='" + author + '\'' +
                ", type='" + type + '\'' +
                ", price=" + price +
                '}';
    }
}

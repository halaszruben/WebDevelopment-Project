import React, { Component } from "react";
import BookService from "../services/BookService";

class ListBooks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
    };
    this.deleteBook = this.deleteBook.bind(this);
  }

  componentDidMount() {
    BookService.getBooks().then((res) => {
      this.setState({ books: res.data });
    });
  }

  deleteBook(id) {
    BookService.deleteBook(id).then(res => {
      this.setState({ books: this.state.books.filter(book => book.id !== id) });
    });
  }

  render() {
    return (
      <div>
        <h2 className="header">Books List</h2>
        <div>
          <a href="/add-book">
            <button style={{ marginBottom: "5px", marginTop: "10px", marginRight: "0px" }} className="btn btn-primary">Add new book</button>
          </a>
        </div>
        <div className="row">
          <table className="nev table table-striped table-bordered">

            <thead className="thead">
              <tr>
                <th> Book ID</th>
                <th> Book Name</th>
                <th> Author Name</th>
                <th> Book Type</th>
                <th> Book Price</th>
                <th> Actions</th>
              </tr>
            </thead>

            <tbody className="tbody" >
              {
                this.state.books.map(
                  book =>
                    <tr className="rows"
                      key={book.id}>
                      <td >{book.id}</td>
                      <td >{book.name}</td>
                      <td >{book.author}</td>
                      <td >{book.type}</td>
                      <td >{book.price}</td>
                      <td>
                        <a href={`update-book/${book.id}`}>
                          <button className="btn btn-info">Edit</button>
                        </a>
                        <button style={{ marginLeft: "10px" }} className="btn btn-danger" onClick={() => this.deleteBook(book.id)}>Delete</button>
                      </td>
                    </tr>
                )
              }
            </tbody>
          </table>
        </div>
      </div >
    );
  }
}

export default ListBooks;

import React, { Component } from "react";
import BookService from "../services/BookService";

class ListBooks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    BookService.getBooks().then((res) => {
      this.setState({ books: res.data });
    });
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Books List</h2>
        <div>
          <a href="/add-book">
            <button className="btn btn-primary">Add new book</button>
          </a>
        </div>
        <div className="row">
          <table className="table table-striped table-bordered">

            <thead>
              <tr>
                <th> Book ID</th>
                <th> Book Name</th>
                <th> Author Name</th>
                <th> Book Type</th>
                <th> Book Price</th>
                <th> Actions</th>
              </tr>
            </thead>

            <tbody>
              {
                this.state.books.map(
                  book =>
                    <tr key={book.id}>
                      <td>{book.id}</td>
                      <td>{book.name}</td>
                      <td>{book.author}</td>
                      <td>{book.type}</td>
                      <td>{book.price}</td>
                    </tr>
                )
              }
            </tbody>

          </table>
        </div>
      </div>
    );
  }
}

export default ListBooks;

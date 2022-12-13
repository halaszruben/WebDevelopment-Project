import React, { Component } from 'react';
import BookService from '../services/BookService';

class CreateBookComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            author: '',
            type: '',
            price: ''

        }

        this.changeBookNameHandler = this.changeBookNameHandler.bind(this);
        this.changeAuthorNameHandler = this.changeAuthorNameHandler.bind(this);
        this.changeBookTypeHandler = this.changeBookTypeHandler.bind(this);
        this.changeBookPriceHandler = this.changeBookPriceHandler.bind(this);

        this.saveBook = this.saveBook.bind(this);
    }

    changeBookNameHandler = (event) => {
        this.setState({ bookName: event.target.value });
    }

    changeAuthorNameHandler = (event) => {
        this.setState({ authorName: event.target.value });
    }

    changeBookTypeHandler = (event) => {
        this.setState({ bookType: event.target.value });
    }

    changeBookPriceHandler = (event) => {
        this.setState({ bookPrice: event.target.value });
    }

    saveBook = (e) => {
        e.preventDefault();

        let book = {
            name: this.state.bookName
            , author: this.state.authorName
            , type: this.state.bookType
            , price: this.state.bookPrice
        };

        console.log('book => ' + JSON.stringify(book));

        BookService.postBook(book);
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className='text-center'>Add Books</h3>
                            <div className='card-body'>
                                <form>
                                    <div className='form-group'>
                                        <label>Book Name</label>
                                        <input placeholder='Book Name' name='bookName' className='form-control'
                                            value={this.state.bookName} onChange={this.changeBookNameHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label>Author Name</label>
                                        <input placeholder='Author Name' name='authorName' className='form-control'
                                            value={this.state.authorName} onChange={this.changeAuthorNameHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label>Book Type</label>
                                        <input placeholder='Drama, Fantasy, Hero, etc' name='bookType' className='form-control'
                                            value={this.state.bookType} onChange={this.changeBookTypeHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label>Book Price</label>
                                        <input placeholder="0 (It's in HUF))" name='bookPrice' className='form-control'
                                            value={this.state.bookPrice} onChange={this.changeBookPriceHandler} />
                                    </div>

                                    <button className='btn btn-primary' onClick={this.saveBook}>Save</button>
                                    <a href='/books'>
                                        <button className='btn btn-secondary btn-sm' style={{ marginLeft: "10px" }}>Reset</button>
                                    </a>
                                </form>
                                <div>
                                    <a href='/books'>
                                        <button className='btn btn-secondary btn-sm' style={{ marginTop: "20px" }}>Back to main page</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateBookComponent;
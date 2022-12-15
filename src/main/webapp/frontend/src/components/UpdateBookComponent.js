import React, { Component } from 'react';
import BookService from '../services/BookService';
import { withParams } from './withParams';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class UpdateBookComponent extends Component {
    constructor(props) {
        super(props)

        let { id } = props.params;

        this.state = {
            id: id,
            name: '',
            author: '',
            type: '',
            price: ''

        }

        this.changeBookNameHandler = this.changeBookNameHandler.bind(this);
        this.changeAuthorNameHandler = this.changeAuthorNameHandler.bind(this);
        this.changeBookTypeHandler = this.changeBookTypeHandler.bind(this);
        this.changeBookPriceHandler = this.changeBookPriceHandler.bind(this);

        this.updateBook = this.updateBook.bind(this);
    }

    componentDidMount() {
        BookService.getBookById(this.state.id).then((res) => {
            let book = res.data;
            console.log('book => ' + JSON.stringify(book));
            this.setState({
                name: book.name,
                author: book.author,
                type: book.type,
                price: book.price
            })
        });
    }

    updateBook = (e) => {
        e.preventDefault();

        let book = {
            name: this.state.name
            , author: this.state.author
            , type: this.state.type
            , price: this.state.price
        };

        console.log('book => ' + JSON.stringify(book));

        BookService.updateBook(book, this.state.id);

        toast.success('Book Updated!', {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

    }

    changeBookNameHandler = (event) => {
        this.setState({ name: event.target.value });
    }

    changeAuthorNameHandler = (event) => {
        this.setState({ author: event.target.value });
    }

    changeBookTypeHandler = (event) => {
        this.setState({ type: event.target.value });
    }

    changeBookPriceHandler = (event) => {
        this.setState({ price: event.target.value });
    }

    render() {
        return (
            <div>
                <div className='container' style={{ marginTop: "10px" }}>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3' style={{ background: "lightgray", border: "solid black 3px" }}>
                            <h3 className='header'>Edit Books</h3>
                            <div className='card-body'>
                                <form>
                                    <div className='form-group'>
                                        <label>Book Name:</label>
                                        <input placeholder='Book Name' name='name' className='form-control'
                                            value={this.state.name} onChange={this.changeBookNameHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label>Author Name:</label>
                                        <input placeholder='Author Name' name='author' className='form-control'
                                            value={this.state.author} onChange={this.changeAuthorNameHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label>Book Type:</label>
                                        <input placeholder='Drama, Fantasy, Hero, etc' name='type' className='form-control'
                                            value={this.state.type} onChange={this.changeBookTypeHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label>Book Price:</label>
                                        <input placeholder="0 (It's in HUF))" name='price' className='form-control'
                                            value={this.state.price} onChange={this.changeBookPriceHandler} />
                                    </div>

                                    <button className='btn btn-primary' style={{ color: "white", border: "solid black 2px" }} onClick={this.updateBook}>Edit</button>
                                    <button className='btn btn-secondary btn-sm' style={{ marginLeft: "10px", color: "white", border: "solid black 2px" }}>Reset</button>
                                    <ToastContainer
                                        position="bottom-center"
                                        autoClose={5000}
                                        hideProgressBar={false}
                                        newestOnTop={false}
                                        closeOnClick
                                        rtl={false}
                                        pauseOnFocusLoss
                                        draggable
                                        pauseOnHover
                                        theme="dark"
                                    />
                                </form>
                                <div>
                                    <a href='/books'>
                                        <button className='btn btn-secondary btn-sm' style={{ marginTop: "20px", color: "white", border: "solid black 2px" }}>Back to main page</button>
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

export default withParams(UpdateBookComponent);
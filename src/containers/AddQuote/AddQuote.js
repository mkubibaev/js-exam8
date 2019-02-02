import React, {Component} from 'react';
import axios from '../../axios-quotes';
import QuoteForm from "../../comonents/QuoteForm/QuoteForm";
import {CATEGORIES} from "../../constants";

class AddQuote extends Component {
    state = {
        text: '',
        author: '',
        category: 'game-of-thrones'
    };

    valueChanged = event => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    };

    submitHandler = event => {
        event.preventDefault();

        if (this.state.text && this.state.author) {

            axios.post('/quotes.json', this.state).then(() => {
                this.props.history.replace('/');
            })
        } else {
            alert('All fields required!');
        }
    };

    render() {
        return (
            <div className="container py-4">
                <h3 className="text-center">Add new quote</h3>
                <QuoteForm
                    text={this.state.text}
                    author={this.state.author}
                    selectedcategory={this.state.category}
                    categories={CATEGORIES}
                    changed={this.valueChanged}
                    submitted={this.submitHandler}
                />
            </div>

        );
    }
}

export default AddQuote;
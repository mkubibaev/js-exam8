import React, {Component} from 'react';
import axios from "../../axios-quotes";
import QuoteForm from "../../comonents/QuoteForm/QuoteForm";
import {CATEGORIES} from "../../constants";

class EditQuote extends Component {
    state = {
        text: '',
        author: '',
        category: ''
    };

    getQuote = () => {
        axios.get('/quotes/' + this.props.match.params.id + '.json').then(response => {
            this.setState({...response.data});
        }).catch(error => {
            console.log(error);
        })
    };

    valueChanged = event => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    };

    submitHandler = event => {
        event.preventDefault();

        if (this.state.text && this.state.author) {

            axios.put('/quotes/' + this.props.match.params.id + '.json', this.state).then(() => {
                this.props.history.replace('/');
            }).catch(error => {
                console.log(error);
            })
        } else {
            alert('All fields required!');
        }
    };

    componentDidMount() {
        this.getQuote()
    }

    render() {
        return (
            <div className="container py-4">
                <h3 className="text-center">Edit quote</h3>
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

export default EditQuote;
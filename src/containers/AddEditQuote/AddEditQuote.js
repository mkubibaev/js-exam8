import React, {Component} from 'react';
import axios from '../../axios-quotes';
import QuoteForm from "../../comonents/QuoteForm/QuoteForm";
import {CATEGORIES} from "../../constants";

class AddEditQuote extends Component {
    state = {
        text: '',
        author: '',
        category: 'game-of-thrones',
        edit: false
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
            const quote = {...this.state};
            delete quote.edit;
            // не смог переделать функуию valueChanged,
            // чтобы она сохраняла в отделный объект внутри стейта

            if (this.state.edit) {
                axios.put('/quotes/' + this.props.match.params.id + '.json', quote).then(() => {
                    this.props.history.replace('/');
                }).catch(error => {
                    console.log(error);
                });
            } else {
                axios.post('/quotes.json', quote).then(() => {
                    this.props.history.replace('/');
                }).catch(error => {
                    console.log(error);
                });
            }

        } else {
            alert('All fields required!');
        }
    };

    componentDidMount() {
        if (this.props.match.params.id) {
            this.setState({edit: true});
            this.getQuote();
        }
    }

    render() {
        return (
            <div className="container py-4">
                <h3 className="text-center">{this.state.edit ? 'Edit' : 'Add new'} quote</h3>
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

export default AddEditQuote;
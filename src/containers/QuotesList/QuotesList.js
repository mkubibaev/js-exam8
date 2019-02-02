import React, {Component} from 'react';
import axios from '../../axios-quotes';
import {CATEGORIES} from "../../constants";
import Quote from "../../comonents/Quote/Quote";
import Categories from "../../comonents/Categories/Categories";

class QuotesList extends Component {
    state = {
        quotes: null
    };

    loadData() {
        axios.get('/quotes.json').then(response => {
            const quotes = Object.keys(response.data).map(id => {
                return {...response.data[id], id}
            });

            this.setState({quotes});
        })
    }

    componentDidMount() {
        this.loadData();
    }

    render() {
        let quotes = null;

        if (this.state.quotes) {
            quotes = this.state.quotes.map(quote => (
                <Quote key={quote.id} quote={quote.quote} author={quote.author}/>
            ))
        }

        return (
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 col-md-4">
                        <Categories list={CATEGORIES}/>
                    </div>
                    <div className="col-12 col-md-8">
                        {quotes}
                    </div>
                </div>
            </div>
        );
    }
}

export default QuotesList;
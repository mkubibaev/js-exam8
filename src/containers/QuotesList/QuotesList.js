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
        let url = '/quotes.json';
        const categoryId = this.props.match.params.categoryId;

        if(categoryId) {
            url += `?orderBy="category"&equalTo="${categoryId}"`
        }

        axios.get(url).then(response => {
            const quotes = Object.keys(response.data).map(id => {
                return {...response.data[id], id}
            });

            this.setState({quotes});
        })
    }

    componentDidMount() {
        this.loadData();
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.categoryId !== prevProps.match.params.categoryId) {
            this.loadData();
        }
    }

    render() {
        let quotes = null;

        if (this.state.quotes) {
            quotes = this.state.quotes.map(quote => (
                <Quote key={quote.id} text={quote.text} author={quote.author}/>
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
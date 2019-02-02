import React, {Component} from 'react';
import axios from '../../axios-quotes';
import {CATEGORIES} from "../../constants";
import Quote from "../../comonents/Quote/Quote";
import Categories from "../../comonents/Categories/Categories";

class QuotesList extends Component {
    state = {
        quotes: null,
        categories: null
    };

    loadData = () => {
        let url = '/quotes.json';
        const categoryId = this.props.match.params.categoryId;

        if(categoryId) {
            url += `?orderBy="category"&equalTo="${categoryId}"`
        }

        return axios.get(url).then(response => {
            if (response.data) {
                const quotes = Object.keys(response.data).map(id => {
                    return {...response.data[id], id}
                });

                this.setState({quotes});
            } else {
                this.setState({quotes: null});
                //обновляю стейт после удалении последнего элемента
            }
        })
    };

    getCategoriesCount = () => {
        const categories = [...CATEGORIES];

        categories.forEach(category => {
            category.count = 0;
        });

        axios.get('/quotes.json').then(response => {
            if(response.data) {
                Object.keys(response.data).forEach(id => {
                    const quote = response.data[id];

                    for (let i = 0; i < categories.length; i++) {
                        if (categories[i].id === quote.category) {
                            categories[i].count++;
                        }
                    }
                });

                this.setState({categories});

            } else {
                this.setState({categories});
            }
        }).catch(error => {
            console.log(error);
        });
    };

    deleteHandler = id => {
        if (window.confirm('Are you sure?')) {
            axios.delete('/quotes/' + id + '.json')
                .then(this.loadData)
                .then(this.getCategoriesCount)
            }
    };

    componentDidMount() {
        this.loadData().then(this.getCategoriesCount);
    };

    componentDidUpdate(prevProps) {
        if (this.props.match.params.categoryId !== prevProps.match.params.categoryId) {
            this.loadData().then(this.getCategoriesCount);
        }
    };

    render() {

        let quotes = <h5>No quotes</h5>;

        if (this.state.quotes && this.state.quotes.length) {
            quotes = this.state.quotes.map(quote => (
                <Quote
                    key={quote.id}
                    id={quote.id}
                    text={quote.text}
                    author={quote.author}
                    onDelete={() => this.deleteHandler(quote.id)}
                />
            ))
        }

        return (
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 col-md-4">
                        {this.state.categories ? <Categories list={this.state.categories}/> : null}
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
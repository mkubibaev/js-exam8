import React, {Component, Fragment} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Header from "./comonents/Header/Header";
import QuotesList from "./containers/QuotesList/QuotesList";
import AddQuote from "./containers/AddQuote/AddQuote";
import EditQuote from "./containers/EditQuote/EditQuote";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Fragment>
                    <Header/>
                    <Switch>
                        <Route path='/' exact component={QuotesList}/>
                        <Route path='/add' component={AddQuote}/>
                        <Route path='/quotes/:categoryId' exact component={QuotesList}/>
                        <Route path='/quotes/:id/edit' component={EditQuote}/>
                        <Route render={() => <h2>Not found</h2>}/>
                    </Switch>
                </Fragment>
            </BrowserRouter>
        );
    }
}

export default App;

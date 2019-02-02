import React, {Component, Fragment} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Header from "./comonents/Header/Header";
import QuotesList from "./containers/QuotesList/QuotesList";
import AddQuote from "./containers/AddQuote/AddQuote";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Fragment>
                    <Header/>
                    <Switch>
                        <Route path='/' exact component={QuotesList}/>
                        <Route path='/add' exact component={AddQuote}/>
                        <Route render={() => <h2>Not found</h2>}/>
                    </Switch>
                </Fragment>
            </BrowserRouter>
        );
    }
}

export default App;

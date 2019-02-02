import React, {Component, Fragment} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Header from "./comonents/Header/Header";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Fragment>
                    <Header/>
                    <Switch>
                        <Route path='/' exact/>
                        <Route path='/add' exact render={() => <h1>add</h1>}/>
                    </Switch>
                </Fragment>
            </BrowserRouter>
        );
    }
}

export default App;

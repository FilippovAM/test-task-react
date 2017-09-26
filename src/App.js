import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Purchases from './pages/purchases'

class App extends Component {
    render() {
        const WrappedPurchases = function() {
            return (<Purchases url="data/goods.json" />);
        };

        return (
            <BrowserRouter>
                    <Route path="/cart" component={WrappedPurchases}/>
            </BrowserRouter>
        )
    };
}

export default App;

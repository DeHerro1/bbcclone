import React from 'react';
import './Layout.css';
import Items from '../Items/Items';
import Images from '../Images/Images';
import {Route, Switch, Link} from 'react-router-dom';
import ProductName from '../ProductName/ProductName';

const Layout = () => {
    return (
        <div className="Layout">
            <div className="links">
                <Link className="product_link"  to="/">Product Category</Link>
                <Link className="item_link" to="/inputs">Items</Link>
            </div>
            <Switch>
                <Route path="/inputs">
                    <Items />
                </Route>
                <Route exact path="/">
                    <ProductName />
                </Route>
            </Switch>
        </div>
    )
}

export default Layout;

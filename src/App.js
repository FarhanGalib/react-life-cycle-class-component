import { useState } from "react";
import "./App.css";
import Products from "./components/Products";
import data from "./data/data";
import ProductDetails from "./components/ProductDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./components/NotFound";

function App() {
    const [products, setProducts] = useState(data);

    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Products products={products}></Products>
                    </Route>
                    <Route exact path="/products">
                        <Products products={products}></Products>
                    </Route>
                    <Route exact path="/product/:key">
                        <ProductDetails products={products}></ProductDetails>
                    </Route>
                    <Route  path="*">
                        <NotFound></NotFound>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;

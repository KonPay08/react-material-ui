import { HomePage } from "src/components/pages/HomePage"
import { ProductPage } from "src/components/pages/ProductPage"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/products" component={ProductPage} />
        <Route path="/" component={HomePage} exact />
      </Switch>
    </Router>
 
  );
};

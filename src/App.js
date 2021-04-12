import React from "react";
import { Nav } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Context from "./context/Context";
import AddInvoice from "./screens/AddInvoice";
import InvoiceDetail from "./screens/InvoiceDetail";
import Main from "./screens/Main";


let App = (props) => {



  return (
    <Context>
        <Router>
      <div>
        {/* <nav  className="nav-link">
          <ul className="ul-style row">
            <li > 
              <Link className="mr-3 li-style" to="/">Main</Link>
            </li>
            <li >
              <Link className="mr-3 li-style" to="/add">Add Invoice</Link>
            </li>
            <li >
              <Link className="mr-3 li-style" to="/invoicedetail">Invoice Detail</Link>
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/detail">
            <InvoiceDetail />
          </Route>
          <Route path="/add">
            <AddInvoice />
          </Route>
          <Route path="/" >
            <Main />
          </Route>
        </Switch>
      </div>
    </Router>

    </Context>
    



  );
}

export default App;



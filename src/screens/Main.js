import { useState } from 'react';
import "../../src/App.css";
import { Button, Col, Form, Table } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import InvoiceDetail from './InvoiceDetail';
import AddInvoice from './AddInvoice';
let Main = () => {


    return (
        <div className="App">
            
            <header className="App-header">
           
                <div className="">Main</div>
            </header>

           


                <Table striped bordered hover responsive >
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>

                    <tbody  >
                        <tr  >
                            <td>GSDAS</td>
                            <td>GSAGA</td>
                            <td>GAS</td>
                            <td>GA</td>
                        </tr>
                    </tbody>


                </Table>

        </div>



    );
}

export default Main;



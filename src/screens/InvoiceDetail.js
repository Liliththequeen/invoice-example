import { useState } from 'react';
import '../../src/App.css';

import { Button, Col, Form, Table } from 'react-bootstrap';

let InvoiceDetail = () => {


    return (
        <div className="App">
            <header className="App-header">
                <div className="">InvoiceDetail</div>
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

export default InvoiceDetail;



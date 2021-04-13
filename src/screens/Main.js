import { useEffect, useState } from 'react';
import "../../src/App.css";
import { Table, Button } from 'react-bootstrap';
import { useLocation, useHistory } from "react-router-dom";



let Main = (props) => {

    const [list, setlist] = useState([]);

    let history = useHistory();

    let invoices = JSON.parse(localStorage.getItem("list"));


    let deleteInvoice = () => {
        localStorage.removeItem("list")
        setlist([])
        // list.filter((x) => x.name !== item.name)
    }



    return (
        <div className="App">

            <header className="App-header ">
                <div className="">Invoices</div>
            </header>

            <Button onClick={() => history.push("/add")} className="ml-5 mt-5" variant="dark" style={{ backgroundColor: "#4C3077", borderColor: "#4C3077", }} type="sumbit">Create a New Invoice</Button>

            <Button onClick={() => deleteInvoice()} className="mr-5 mt-5" variant="dark" style={{ backgroundColor: "#972a2a", borderColor: "#972a2a", float: "right" }} type="sumbit">Delete All</Button>
            <div className="m-5">
                <Table striped bordered hover responsive >
                    {
                        invoices === null || invoices === undefined
                            ?
                            <div>There isn't any invoice to show. Please create new invoice. </div>
                            :
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Subject</th>
                                    <th>Adress</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                    }

                    {
                        invoices === null || invoices === undefined
                            ?
                            <div></div>
                            :
                            invoices.map((x, i) => {
                                return (
                                    <tbody >
                                        <tr onClick={() => history.push({
                                            pathname: '/detail',
                                            search: '',
                                            state: { "x": x, "i": i }
                                        })} style={{ backgroundColor: i % 2 === 0 ? "#fof" : "#fff" }} >
                                            <td>{i + 1}</td>
                                            <td>{x.name}</td>
                                            <td>{x.email}</td>
                                            <td>{x.subject}</td>
                                            <td style={{ maxWidth: "15%" }}>{x.address}</td>
                                            <td>sjkdf</td>
                                        </tr>
                                    </tbody>
                                )
                            })
                    }

                </Table>
            </div>



        </div>



    );
}

export default Main;



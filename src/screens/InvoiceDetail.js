import { useEffect } from 'react';
import '../../src/App.css';
import { useLocation } from "react-router-dom";
import { Button, } from 'react-bootstrap';


let InvoiceDetail = () => {

    const location = useLocation();

    useEffect(() => {
        console.log(location.state);
    }, [location]);
    
    return (
        <div className="App">
            <header className="App-header">
                <div className="">InvoiceDetail</div>
            </header>
            <div className="container m-5">
                <div className="card">
                    <div className="card-header">
                        Invoice Example
                    </div>
                    <div className="card-body">
                        <h5 className="card-title mb-5">Special title treatment</h5>
                        <div className="row">
                            <div className="row  col-12">
                                <p className="card-text col-4">Name</p>
                                <p className="card-text col-3">{location.state.x.name}</p>

                            </div>
                            <div className="row col-12">
                                <p className="card-text col-4">Email</p>
                                <p className="card-text col-3">{location.state.x.email}</p>

                            </div>
                           <div className="row  col-12">
                                <p className="card-text col-4">Address</p>
                                <p className="card-text col-3">{location.state.x.address}</p>

                            </div>
                            <div className="row col-12">
                                <p className="card-text col-4">Subject</p>
                                <p className="card-text col-3">{location.state.x.subject}</p>

                            </div>
                            <div className="row col-12">
                                <p className="card-text col-4">Send To</p>
                                <p className="card-text col-3">{location.state.x.sendTo}</p>

                            </div>
                        
                        </div>
                        
                    </div>
                </div>
            </div>


            <Button onClick={()=>console.log("dsklşa")} variant="dark" style={{ backgroundColor: "#0F8B81", borderColor: "#0F8B81", float: "right", marginRight: 15 }} type="submit">Send Email</Button>




        </div>



    );
}

export default InvoiceDetail;



import { useContext, useState } from 'react';
import '../../src/App.css';
import { Button, Col, Form, Table } from 'react-bootstrap';
// import MainProvider from '../context/Context';
import { useHistory } from "react-router-dom";
import emailjs from 'emailjs-com';


let AddInvoice = (props) => {
    // states for form index
    //   const {list,setlist} = useContext(MainProvider)

    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [subject, setsubject] = useState("");
    const [address, setaddress] = useState("");
    const [sendTo, setsendTo] = useState("");


    const [list, setlist] = useState([])
    let history = useHistory();

    let addList = e => {
        e.preventDefault();
        setlist([...list, { name, subject, address, email, sendTo }]);
        sendEmail(e)
    }

    let sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_4c8vgwr', "template_f9ss4od", e.target, 'user_ev0R2AkeYg7JXVHkGNIrG')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div className="App mb-5">
            <header className="App-header">
                <div onClick={() => history.push({
                    pathname: '/',
                    search: '',
                    state: { list }
                })} className="">Invoices</div>

            </header>

            {/* <form className="contact-form" onSubmit={sendEmail}>
                <input type="hidden" name="contact_number" />
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form> */}

            {/* input add area */}

            <div className="App container">
                <Button onClick={() => history.push({
                    pathname: '/',
                    search: '',
                    state: { list }
                })} className="" variant="dark" style={{ backgroundColor: "#1F1D1D", borderColor: "#1F1D1D", float: "right" }} >All Invoices</Button>

                <h2 className="title">Add Invoice</h2>


                <div className=" form-container pb-5" >
                    <Form onSubmit={addList}>
                        <Form.Row>
                            <Form.Group as={Col} horizontal >
                                <Form.Label >Your Name</Form.Label>
                                <Form.Control className="form-input" type="text" placeholder="John Doe" onChange={(e) => { setname(e.target.value); }} />
                                <Form.Text className="text-muted">
                                    You can enter limited items.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Your Email</Form.Label>
                                <Form.Control type="email" placeholder="example@example.com" onChange={(e) => setemail(e.target.value)} />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group>
                            <Form.Group>
                                <Form.Label>Send To</Form.Label>
                                <Form.Control type="email" placeholder="example@example.com" onChange={(e) => setsendTo(e.target.value)} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Address</Form.Label>
                                <Form.Control placeholder="1234 Main St" onChange={(e) => setaddress(e.target.value)} />
                            </Form.Group>
                            <Form.Label>Subject</Form.Label>
                            <Form.Control as="textarea" rows={3} onChange={(e) => setsubject(e.target.value)} />

                        </Form.Group>

                        <div className="mt-2">
                            <Button variant="dark" style={{ backgroundColor: "#4C3077", borderColor: "#4C3077", float: "right", }} type="sumbit">Add to List</Button>
                            <Button onClick={sendEmail} variant="dark" style={{ backgroundColor: "#0F8B81", borderColor: "#0F8B81", float: "right", marginRight: 15 }} type="submit">Send Email</Button>

                        </div>




                    </Form>
                    {/* <Table striped bordered hover responsive >
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            {
              itemList.map((x, i) => {
                return (
                  <tbody  >
                    <tr style={{ backgroundColor: i % 2 === 0 ? "#fof" : "#fff" }} >
                      <td>{i + 1}</td>
                      <td>{x.item}</td>
                      <td>{x.subject}</td>
                      <td>{x.address}</td>
                    </tr>
                  </tbody>
                )
              })
            }

          </Table> */}

                </div>
            </div>
            {/* invoices list  */}

            <div className="m-4">


                <Table striped bordered hover responsive style={{ borderRadius: 5 }}>
                    {
                        list.length == 0
                            ?
                            <div className="container mr-3">You haven't add any income yet.</div>
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

                        list.map((x, i) => {
                            return (
                                <tbody >
                                    <tr onClick={() => history.push({
                                        pathname: '/detail',
                                        search: '',
                                        state: { "x":x,"i":i }
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

export default AddInvoice;



import { useState } from 'react';
import '../../src/App.css';
import { Button, Col, Form, Table } from 'react-bootstrap';
import { useParams} from "react-router-dom";
let AddInvoice = ({ navigation }) => {
  // states for form index

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [subject, setsubject] = useState("");
  const [address, setaddress] = useState("");
  const [sendTo, setsendTo] = useState("");


  const [list, setlist] = useState([])

  let { name } = useParams();

  let addList = e => {
    e.preventDefault();
    setlist([...list, { name, subject, address, email, sendTo}]);

  }

 

  return (
    <div className="App">
      <header className="App-header">
        <div className="">Invoice Example</div>

      </header>

      {/* input add area */}

      <div className="App container">

        <h2 className="title">Add Invoice</h2>


        <div className=" form-container " >
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



          <Button variant="dark" style={{ backgroundColor: "#4C3077", borderColor: "#4C3077", }} type="sumbit">Add to List</Button>



        </div>
        <div style={{  }}>

        </div>


        {/* invoices list  */}


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
            list.map((x, i) => {
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



  );
}

export default AddInvoice;



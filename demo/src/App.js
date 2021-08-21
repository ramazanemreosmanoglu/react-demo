import 'bootstrap/dist/css/bootstrap.min.css';
import EmployeeTable from "./Components/Table";
import React from "react";
import { Container, Button, Col, Row } from "react-bootstrap";
import "./App.css";

const EXAMPLE_DATA = {
  "employees": [
    {
      id: 1,
      name: "John Doe",
      email: "john@mail.com",
      phone: "837 239 2983",
    },
    {
      id: 2,
      name: "Peter Parker",
      email: "petersmail@protonmail.com",
      phone: "234 289 7562",
    },
    {
      id: 3,
      name: "Fran Wilson",
      email: "mrwilson@gmail.com",
      phone: "123 127 2378",
    }
  ]
}

export default class App extends React.Component {
  contructor() {
    // Do API Request
  }

  render() {
    return (
      <Container className="app-container">
        <Row>
          <Col>
            <h2>Employee Details</h2>
          </Col>

          <Col className="align-right">
            <Button>Add</Button>
          </Col>
        </Row>
        <EmployeeTable data={EXAMPLE_DATA.employees}/>
      </Container>
    )
  }
}
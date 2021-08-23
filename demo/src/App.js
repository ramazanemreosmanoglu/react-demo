import 'bootstrap/dist/css/bootstrap.min.css';
import EmployeeTable from "./Components/Table";
import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./App.css";
import axios from "axios";
import AddDialog from "./Components/AddDialog";


const API_LIST_URL = "http://127.0.0.1:8000/list/"

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
  state = {
    data: {"employees": []}
  }
  contructor() {    
    this.update = this.update.bind(this);
  }

  render() {
    return (
      <Container className="app-container">
        <Row>
          <Col>
            <h2>Employee Details</h2>
          </Col>

          <Col className="align-right">
            <AddDialog update_data={() => this.update()}/>
          </Col>
        </Row>
        <EmployeeTable data={this.state.data.employees} update_data={() => this.update()}/>
      </Container>
    )
  }

  componentDidMount() {
    this.update();
  }

  update() {
    // Updates API data
    axios.get(API_LIST_URL).then(response => {
      this.setState(response)
    })
  }
}
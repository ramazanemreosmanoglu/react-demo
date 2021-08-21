import { useState } from "react";
import {
    Modal,
    Button,
    Form,
} from "react-bootstrap";
import {edit_data} from "../actions";


export default function EditDialog(props) {
    // States
    const [show, setShow] = useState(false);
    const [valid, setValid] = useState(true);

    const [name, setName] = useState(props.employee.name);
    const [email, setEmail] = useState(props.employee.email);
    const [phone, setPhone] = useState(props.employee.phone);

    const handleClose = () => {
        setShow(false);
        
        // Set every value to it's first value,
        // because user didn't saved anything.
        setPhone(props.employee.phone);
        setEmail(props.employee.email);
        setName(props.employee.name);
    }
    const handleChange = e => {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        // Check for empty value
        if(value === "") {
            setValid(false);
        } else {
            setValid(true);
        }

        switch(name) {
            case "name":
                setName(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "phone":
                setPhone(value);
                break;
            default:
                console.log("ERROR: Input value is not matching.")
        }

    }

    const onSave = () => {
        edit_data({
            id: props.employee.id,
            name: name,
            email: email,
            phone: phone,
        })
        setShow(false);
    }

    return (
        <>
        <Modal show={show} onHide={handleClose} backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Edit an Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control 
                                type="text"
                                placeholder="Name and Surname"
                                value={name}
                                required
                                onChange={handleChange}
                                name="name"
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control 
                                type="email"
                                placeholder="Email"
                                value={email}
                                required
                                onChange={handleChange}
                                name="email"
                            />                        
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Phone</Form.Label>
                            <Form.Control 
                                type="phone"
                                placeholder="Phone Number"
                                value={phone}
                                required
                                onChange={handleChange}
                                name="phone"
                            />                        
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={onSave} disabled={!valid}>
                        Save
                    </Button>
                </Modal.Footer>
        </Modal>

        <Button variant="link" onClick={() => setShow(true)}>Edit</Button>
        </>
    )
}
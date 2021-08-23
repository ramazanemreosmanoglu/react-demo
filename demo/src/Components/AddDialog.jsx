import { useState } from "react";
import {
    Modal,
    Button,
    Form,
} from "react-bootstrap";
import {insert_data} from "../actions";


export default function AddDialog(props) {
    const INITIAL_FORM = {
        name: "",
        email: "",
        phone: "",
    };

    const [show, setShow] = useState(false);
    const [formData, setFormData] = useState(INITIAL_FORM);
    const [valid, setValid] = useState(false);


    const handleClose = () => {
        setShow(false);

        setFormData(INITIAL_FORM);
    }
    const handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        var copied = JSON.parse(JSON.stringify(formData));
        copied[name] = value;
        setFormData(copied);

        if(formData.name === "" || formData.email === "" || formData.phone === "" || value === "") {
            setValid(false);
        } else {
            setValid(true);
        }
    }

    const save_employee = async () => {
        const result = await insert_data(formData.name, formData.email, formData.phone);
        if(result === 0){
            props.update_data();
        }
        setShow(false);
        setFormData(INITIAL_FORM);
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Insert Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control 
                                type="text"
                                placeholder="Name and Surname"
                                value={formData.name}
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
                                value={formData.email}
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
                                value={formData.phone}
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
                    <Button variant="primary" onClick={save_employee} disabled={!valid}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>

            <Button variant="primary" onClick={() => setShow(true)}>Add</Button>
        </>
    )
}

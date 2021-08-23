import { useState } from "react";
import {
    Modal,
    Button,
} from "react-bootstrap";
import {
    delete_data,
} from "../actions";


export default function DeleteDialog(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const delete_and_close = async () => {
        const result = await delete_data(props.id);
        if(result === 0) {
            props.update_data();
        }
        setShow(false);
        // Add successful message.
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Deleting a Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to remove this employee?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={delete_and_close}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>

            <Button variant="link" onClick={() => setShow(true)}>Delete</Button>
        </>
    )
}
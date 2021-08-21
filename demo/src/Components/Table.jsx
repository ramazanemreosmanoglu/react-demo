import {
    Table,
} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import DeleteDialog from "./DeleteDialog";
import EditDialog from "./EditDialog";


export default function EmployeeTable(props) {
    return (
        <>
            <Table striped bordered>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {props.data.map(person => { // What if empty?
                        return (
                            <tr key={person.id}>
                                <td>{person.name}</td>
                                <td>{person.email}</td>
                                <td>{person.phone}</td>
                                <td><EditDialog employee={person}/> <DeleteDialog id={person.id}/></td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </>
    )
}
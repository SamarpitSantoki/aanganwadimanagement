import React,{ useState } from "react";
import {
    Button,
    Card,
    Col,
    Container,
    Form,
    Modal,
    Row,
    Table,
} from "react-bootstrap";
import { Toggle } from "rsuite";
import "../../App.css";
import { FaPencilAlt,FaPlus,FaTrashAlt } from "react-icons/fa";

const UserList
    = () => {
        const defaultUsers = [
            {
                fName: "A",
                lName: "Abc",
                email: "abc@gmail.com",
                sector: "Abc",
                phoneNumber: "9999999999",
                linkedAanganwadi: "A",
            },
            {
                fName: "A",
                lName: "Abc",
                email: "abc@gmail.com",
                sector: "Abc",
                phoneNumber: "9999999999",
                linkedAanganwadi: "A",
            },
        ];

        const initCurrentUser = {
            id: null,
            name: "",
            address: "",
            age: "",
            profession: "",
            interestRate: "",
        };

        const [users,setUsers] = useState(defaultUsers);
        const [show,setShow] = useState(false);
        const [newUser,setNewUser] = useState(initCurrentUser);
        // const [showCreateBtn,setShowCreateBtn] = useState(true);
        const [editing,setEdit] = useState(false);
        const [rates,setRates] = useState([1,2,3,4,5,6,7,8,9,10]);

        const handleClose = () => {
            setShow(false);
        };
        const handleShow = () => {
            setShow(true);
            if(editing == false) {
                setNewUser(initCurrentUser);
            }
        };

        const onFormSubmit = (newUser) => {
            const id = users.length + 1;
            setUsers([...users,{ ...newUser,id }]);
        };

        const onEdit = (newUser) => {
            setEdit(true);
            if(editing == true) {
                setNewUser({ ...newUser,newUser });
                handleShow();
            }

        };

        const onSubmit = (newUser) => {
            if(editing === true) {
                onUpdateUser(newUser);
            } else {
                onFormSubmit(newUser);
            }
        };

        const onUpdateUser = (newUser) => {
            setEdit(false);
            let id = newUser.id;
            setUsers(users.map((i) => (i.id === id ? newUser : i)));
        };

        const onDeleteUser = (currentUser) => {
            setUsers(users.filter((i) => i.id !== currentUser.id));
        };

        return (
            <Container fluid="md">
                <Row>
                    <Col>
                        <Card className="customCard">
                            <Card.Body>
                                <div className="d-flex justify-content-between customCardBody">
                                    <div>
                                        <Card.Title>User Data</Card.Title>
                                    </div>
                                    <div className="d-flex">

                                        <Button
                                            variant="maincolor"
                                            onClick={handleShow}
                                            title="Add User"
                                        >
                                            <FaPlus color="white" />
                                        </Button>

                                    </div>
                                </div>
                                <Table striped bordered hover variant="light" className='m-2'>
                                    <thead>
                                        <tr>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Email</th>
                                            <th>Sector</th>
                                            <th>Phone</th>
                                            <th>Aanganwadi</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.length > 0 ? (
                                            users.map((user,index) => (
                                                <tr key={index}>
                                                    <td>{user.fName}</td>
                                                    <td>{user.lName}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user.sector}</td>
                                                    <td>{user.phoneNumber}</td>
                                                    <td>{user.linkedAanganwadi}</td>
                                                    <td>
                                                        <Button
                                                            variant="maincolor"
                                                            title="Edit user details"
                                                            onClick={() => onEdit(user)}
                                                        >
                                                            <FaPencilAlt />
                                                        </Button>{" "}
                                                        <Button
                                                            variant="danger"
                                                            title="Delete user"
                                                            onClick={() => onDeleteUser(user)}
                                                        >
                                                            <FaTrashAlt />
                                                        </Button>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan={6} className="text-center">
                                                    No users found.
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>

                        <Modal size="lg" show={show} onHide={handleClose}>
                            <Form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    onSubmit(newUser);
                                }}
                            >
                                <Modal.Header closeButton>
                                    {
                                        editing == true
                                            ? <Modal.Title>Edit User</Modal.Title>
                                            : <Modal.Title>Add User</Modal.Title>
                                    }
                                </Modal.Header>
                                <Modal.Body>
                                    <Form.Group className="mb-3" controlId="formBasicfName">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={newUser.fName}
                                            required
                                            onChange={(e) =>
                                                setNewUser({ ...newUser,fName: e.target.value })
                                            }
                                            placeholder="Enter First Name"
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicmName">
                                        <Form.Label>Middle Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={newUser.mName}
                                            required
                                            onChange={(e) =>
                                                setNewUser({ ...newUser,mName: e.target.value })
                                            }
                                            placeholder="Enter Middle Name"
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasiclName">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={newUser.lName}
                                            required
                                            onChange={(e) =>
                                                setNewUser({ ...newUser,lName: e.target.value })
                                            }
                                            placeholder="Enter Last Name"
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            type="mail"
                                            value={newUser.email}
                                            onChange={(e) =>
                                                setNewUser({ ...newUser,email: e.target.value })
                                            }
                                            placeholder="Enter Email"
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicRole">
                                        <Form.Label>Role</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={newUser.role}
                                            onChange={(e) =>
                                                setNewUser({ ...newUser,role: e.target.value })
                                            }
                                            placeholder="Enter Role"
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicSector">
                                        <Form.Label>Sector</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={newUser.sector}
                                            onChange={(e) =>
                                                setNewUser({ ...newUser,sector: e.target.value })
                                            }
                                            placeholder="Enter Sector"
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicAddress">
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={newUser.address}
                                            onChange={(e) =>
                                                setNewUser({ ...newUser,address: e.target.value })
                                            }
                                            placeholder="Enter Address"
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                                        <Form.Label>Phone Number</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={newUser.phoneNumber}
                                            onChange={(e) =>
                                                setNewUser({ ...newUser,phoneNumber: e.target.value })
                                            }
                                            placeholder="Enter Phone Number"
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicLinkedAAnganwadi">
                                        <Form.Label>Linked Aanganwadi</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={newUser.linkedAanganwadi}
                                            onChange={(e) =>
                                                setNewUser({ ...newUser,linkedAanganwadi: e.target.value })
                                            }
                                            placeholder="Enter Linked Aanganwadi"
                                        />
                                    </Form.Group>
                                    {/* <Form.Group className="mb-3">
                                        <Form.Label>Address</Form.Label>
                                        <Form.Select
                                            value={newUser.address}
                                            onChange={(e) =>
                                                setNewUser({ ...newUser,address: e.target.value })
                                            }
                                        >
                                            <option value="">Select</option>
                                            {rates.length
                                                ? rates.map((val,index) => (
                                                    <option key={index} value={val}>
                                                        {val}
                                                    </option>
                                                ))
                                                : null}
                                        </Form.Select>
                                    </Form.Group> */}
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                    {editing === true ? (
                                        <Button variant="primary" type="submit" onClick={handleClose}>
                                            Update
                                        </Button>
                                    ) : (
                                        <Button variant="primary" disabled={!newUser.name} type="submit" onClick={handleClose}>
                                            Submit
                                        </Button>
                                    )}
                                </Modal.Footer>
                            </Form>
                        </Modal>
                    </Col>
                </Row>
            </Container>
        );
    };

export default UserList;
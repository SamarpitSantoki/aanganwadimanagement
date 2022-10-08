import React,{ useState } from "react";
import {
    Button,
    Container,
    Card,
    Form,
    Modal,
    Col,
    Row,
    Table,
} from "react-bootstrap";
import "../../App.css";
import { FaPencilAlt,FaPlus,FaTrashAlt } from "react-icons/fa";




const ProfilePage = () => {

    const defaultProfiles = [
        {
            fName: "A",
            lName: "5",
            email: "abc@gmail.com",
            phoneNumber: "9999999999",

        },

    ];

    const initCurrentProfile = {
        fName: "",
        lName: "",
        email: "",
        phoneNumber: "",

    }
    const [profiles,setProfiles] = useState(defaultProfiles);
    const [show,setShow] = useState(false);
    const [newProfile,setNewProfile] = useState(initCurrentProfile);
    // const [showCreateBtn,setShowCreateBtn] = useState(true);
    const [editing,setEdit] = useState(false);
    const [rates,setRates] = useState([1,2,3,4,5,6,7,8,9,10]);

    const handleClose = () => {
        setShow(false);
    };
    const handleShow = () => {
        setShow(true);
        if(editing == false) {
            setNewProfile(initCurrentProfile);
        }
    };

    const onFormSubmit = (newProfile) => {
        const id = profiles.length + 1;
        setProfiles([...profiles,{ ...newProfile,id }]);
    };

    const onEdit = (newProfile) => {
        setEdit(true);
        if(editing == true) {
            setNewProfile({ ...newProfile,newProfile });
            handleShow();
        }

    };

    const onSubmit = (newProfile) => {
        if(editing === true) {
            onUpdateProfile(newProfile);
        } else {
            onFormSubmit(newProfile);
        }
    };

    const onUpdateProfile = (newProfile) => {
        setEdit(false);
        let id = newProfile.id;
        setProfiles(profiles.map((i) => (i.id === id ? newProfile : i)));
    };



    return (
        <Container fluid="md mt-5">
            <Row>
                <Col>
                    <Card className="customCard">
                        <Card.Body>
                            <div className="d-flex justify-content-between customCardBody">
                                <div>
                                    <Card.Title>Profile Details</Card.Title>
                                </div>
                                <div className="d-flex">
                                    {/* <Button
                                        variant="maincolor"
                                        onClick={handleShow}
                                        title="Add Profile"
                                    >
                                        <FaPlus color="white" />
                                    </Button> */}
                                </div>
                            </div>
                            <Table
                                striped
                                bordered
                                hover
                                variant="light"
                                className="m-2"
                            >
                                <thead>
                                    <tr>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {profiles.length > 0 ? (
                                        profiles.map((profile,index) => (
                                            <tr key={index}>
                                                <td>{profile.fName}</td>
                                                <td>{profile.lName}</td>
                                                <td>{profile.email}</td>
                                                <td>{profile.phoneNumber}</td>

                                            </tr>

                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan={6} className="text-center">
                                                No profiles found.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                                
                            </Table>
                            <div>
                                <Button

                                    variant="maincolor"
                                    title="Edit profile details"
                                    onClick={() => onEdit(profiles)}
                                >
                                    <FaPencilAlt /> Edit
                                </Button>{" "}
                            </div>
                        </Card.Body>
                    </Card>
                    <Modal size="lg" show={show} onHide={handleClose}>
                        <Form
                            onSubmit={(e) => {
                                e.preventDefault();
                                onSubmit(newProfile);
                            }}
                        >
                            <Modal.Header closeButton>
                                {editing == true ? (
                                    <Modal.Title>Edit Resource</Modal.Title>
                                ) : (
                                    <Modal.Title>Add Resource</Modal.Title>
                                )}
                            </Modal.Header>
                            <Modal.Body>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicfName"
                                >
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={newProfile.fName}
                                        required
                                        onChange={(e) =>
                                            setNewProfile({
                                                ...newProfile,
                                                fName: e.target.value,
                                            })
                                        }
                                        placeholder="Enter First Name"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasiclName">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={newProfile.lName}
                                        onChange={(e) =>
                                            setNewProfile({
                                                ...newProfile,
                                                lName: e.target.value,
                                            })
                                        }
                                        placeholder="Enter Last Name"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="mail"
                                        value={newProfile.email}
                                        onChange={(e) =>
                                            setNewProfile({ ...newProfile,email: e.target.value })
                                        }
                                        placeholder="Enter Email"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={newProfile.phoneNumber}
                                        onChange={(e) =>
                                            setNewProfile({
                                                ...newProfile,
                                                phoneNumber: e.target.value,
                                            })
                                        }
                                        placeholder="Enter Phone Number"
                                    />
                                </Form.Group>

                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                {editing === true ? (
                                    <Button
                                        variant="primary"
                                        type="submit"
                                        onClick={handleClose}
                                    >
                                        Update
                                    </Button>
                                ) : (
                                    <Button
                                        variant="primary"
                                        disabled={!newProfile.name}
                                        type="submit"
                                        onClick={handleClose}
                                    >
                                        Submit
                                    </Button>
                                )}
                            </Modal.Footer>
                        </Form>
                    </Modal>
                </Col>
            </Row>
        </Container>
    )
}

export default ProfilePage

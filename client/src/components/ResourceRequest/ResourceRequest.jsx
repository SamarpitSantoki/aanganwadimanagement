import React, { useState } from "react";
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
// import { Toggle } from "rsuite";
import "../../App.css";
import { FaPencilAlt,FaPlus,FaTrashAlt } from "react-icons/fa";
import { HiEye } from "react-icons/hi"


const ResourceRequest = () => {

    const defaultreqs = [
        {
            resource: "A",
            aanganwadi: "5",
            manager: "A",
            phone: "9999999999",
            sector: "Abc"
            
        },
        {
            resource: "B",
            aanganwadi: "4",
            manager: "A",
            phone: "9999999999",
            sector: "Abc"
        },
    ];

    // const showReqDetails = {

    // }

    const initCurrentreq = {
        resource: "",
        aanganwadi: "",
       
    }
    const [reqs,setreqs] = useState(defaultreqs);
    const [show,setShow] = useState(false);
    const [newreq,setNewreq] = useState(initCurrentreq);
    // const [details,showReqDetails] = useState(showDetails);
    // const [showCreateBtn,setShowCreateBtn] = useState(true);
    const [editing,setEdit] = useState(false);
    const [rates,setRates] = useState([1,2,3,4,5,6,7,8,9,10]);

    const [show1,setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const handleClose = () => {
        setShow(false);
    };
    const handleShow = () => {
        setShow(true);
        if(editing == false) {
            setNewreq(initCurrentreq);
        }
    };

    const handleView = () => {
        setShow(true);
        if(editing == false) {
            showReqDetails();
        }
    };

    const onFormSubmit = (newreq) => {
        const id = reqs.length + 1;
        setreqs([...reqs,{ ...newreq,id }]);
    };

    const onEdit = (newreq) => {
        setEdit(true);
        if(editing == true) {
            setNewreq({ ...newreq,newreq });
            handleShow();
        }

    };

  const onSubmit = (newreq) => {
    if (editing === true) {
      onUpdatereq(newreq);
    } else {
      onFormSubmit(newreq);
    }
  };

  const onUpdatereq = (newreq) => {
    setEdit(false);
    let id = newreq.id;
    setreqs(reqs.map((i) => (i.id === id ? newreq : i)));
  };

  const onDeletereq = (currentreq) => {
    setreqs(reqs.filter((i) => i.id !== currentreq.id));
  };

    return (
        <Container fluid="md mt-5">
            <Row>
                <Col>
                    <Card className="customCard">
                        <Card.Body>
                            <div className="d-flex justify-content-between customCardBody">
                                <div>
                                    <Card.Title>Resource Request</Card.Title>
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
                                        <th>Resource</th>
                                        <th>Aanganwadi</th>
                                        <th>Manager</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {reqs.length > 0 ? (
                                        reqs.map((req,index) => (
                                            <tr key={index}>
                                                <td>{req.resource}</td>
                                                <td>{req.aanganwadi}</td>
                                                <td>{req.manager}</td>
                                                <td>
                                                    <Button
                                                        variant="maincolor"
                                                        title="Edit req details"
                                                        onClick={() => onEdit(req)}
                                                    >
                                                        <FaPencilAlt />
                                                    </Button>{" "}
                                                    <Button
                                                        variant="danger"
                                                        title="Delete req"
                                                        onClick={() => onDeletereq(req)}
                                                    >
                                                        <FaTrashAlt />
                                                    </Button>
                                                    <Button variant="maincolor" onClick={handleShow1} title="Request Details">
                                                        <HiEye color="white" />
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan={6} className="text-center">
                                                No reqs found.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                    <Modal
                    size="lg"
                        show={show1}
                        onHide={handleClose1}
                        backdrop="static"
                        keyboard={false}
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Request Deatails of Aanganwadi</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Table
                                striped
                                bordered
                                hover
                                variant="light"
                                className="m-2"
                            >
                                <thead>
                                    <tr>
                                        <th>Resource Requested</th>
                                        <th>Quantity</th>
                                        <th>Manager</th>
                                        <th>Phone</th>
                                        <th>Sector</th>
                                       
                                    </tr>
                                </thead>
                                <tbody>
                                    {reqs.length > 0 ? (
                                        reqs.map((req,index) => (
                                            <tr key={index}>
                                                <td>{req.resource}</td>
                                                <td>{req.aanganwadi}</td>
                                                <td>{req.manager}</td>
                                                <td>{req.phone}</td>
                                                <td>
                                                    {req.sector}
                                                </td>

                                                
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan={6} className="text-center">
                                                No reqs found.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </Table>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="danger" onClick={handleClose}>
                                Decline
                            </Button>
                            <Button variant="maincolor">Approve</Button>
                        </Modal.Footer>
                    </Modal>
                    <Modal size="lg" show={show} onHide={handleClose}>
                        <Form
                            onSubmit={(e) => {
                                e.preventDefault();
                                onSubmit(newreq);
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
                                    controlId="formBasicfResource"
                                >
                                    <Form.Label>Resource</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={newreq.resource}
                                        required
                                        onChange={(e) =>
                                            setNewreq({
                                                ...newreq,
                                                resource: e.target.value,
                                            })
                                        }
                                        placeholder="Enter Resource Name"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicQuantity">
                                    <Form.Label>Quantity</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={newreq.aanganwadi}
                                        onChange={(e) =>
                                            setNewreq({
                                                ...newreq,
                                                aanganwadi: e.target.value,
                                            })
                                        }
                                        placeholder="Enter Quantity"
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
                                        disabled={!newreq.name}
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
};
export default ResourceRequest;

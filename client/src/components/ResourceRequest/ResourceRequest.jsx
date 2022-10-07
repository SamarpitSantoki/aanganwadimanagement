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
import { FaPencilAlt, FaPlus, FaCheck, FaHourglassHalf} from "react-icons/fa";
import { HiEye } from "react-icons/hi";

const ResourceRequest = () => {
  const defaultreqs = [
    {
      resource: "A",
      aanganwadi: "5",
      manager: "1"
    },
    {
      resource: "B",
      aanganwadi: "4",
      manager: "2"
    },
  ];

  const initCurrentreq = {
    resource: "",
    aanganwadi: "",
  };
  const [reqs, setreqs] = useState(defaultreqs);
  const [show, setShow] = useState(false);
  const [newreq, setNewreq] = useState(initCurrentreq);
  // const [showCreateBtn,setShowCreateBtn] = useState(true);
  const [editing, setEdit] = useState(false);
  const [rates, setRates] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
    if (editing == false) {
      setNewreq(initCurrentreq);
    }
  };

  const onFormSubmit = (newreq) => {
    const id = reqs.length + 1;
    setreqs([...reqs, { ...newreq, id }]);
  };

  const onEdit = (newreq) => {
    setEdit(true);
    if (editing == true) {
      setNewreq({ ...newreq, newreq });
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
                <div className="d-flex">
                  <Button
                    variant="maincolor"
                    onClick={handleShow}
                    title="Add Request"
                  >
                    <FaPlus color="white" />
                  </Button>
                </div>
              </div>
              <Table striped bordered hover variant="light" className="m-2">
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
                    reqs.map((req, index) => (
                      <tr key={index}>
                        <td>{req.resource}</td>
                        <td>{req.aanganwadi}</td>
                        <td>{req.manager}</td>
                        <td>
                          <Button
                            variant="maincolor"
                            title="Request Approved"
                            onClick={() => onEdit(req)}
                          >
                            <FaCheck /> Approved
                            {/* <FaHourglassHalf/> */}
                          </Button>{" "}

                          <Button
                            variant="danger"
                            title="Request Declined"
                            onClick={() => onEdit(req)}
                          >
                            <FaHourglassHalf /> Pending
                            {/* <FaHourglassHalf/> */}
                          </Button>{" "}

                          <Button
                            variant="maincolor"
                            title="View Request"
                            onClick={() => onEdit(req)}
                          >
                            <HiEye />
                          </Button>{" "}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6} className="text-center">
                        No requests found.
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
                onSubmit(newreq);
              }}
            >
              <Modal.Header closeButton>
                {editing == true ? (
                  <Modal.Title>Edit Resource</Modal.Title>
                ) : (
                  <Modal.Title>Request Resource</Modal.Title>
                )}
              </Modal.Header>
              <Modal.Body>
                <Form.Group className="mb-3" controlId="formBasicfResource">
                  <Form.Label>Request Resource</Form.Label>
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
                    value={newreq.quantity}
                    onChange={(e) =>
                      setNewreq({
                        ...newreq,
                        quantity: e.target.value,
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
                  <Button variant="primary" type="submit" onClick={handleClose}>
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
  );
};
export default ResourceRequest;

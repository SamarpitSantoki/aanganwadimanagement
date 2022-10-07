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
// import { Toggle } from "rsuite";
import "../../App.css";
import { FaPencilAlt,FaPlus,FaTrashAlt } from "react-icons/fa";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const AanganwadiList
    = () => {
        const defaultAanganwadis = [
            {
                manager: "A",
                workers: "5",
                sector: "Abc",
                phoneNumber: "9999999999",
                contactPerson: "A",
                resourceNeeded: "1",
            },
            {
                manager: "A",
                workers: "5",
                sector: "Abc",
                phoneNumber: "9999999999",
                contactPerson: "A",
                resourceNeeded: "1",
            },
        ];

        const initCurrentAanganwadi = {
            manager: "",
            workers: "",
            sector: "",
            phoneNumber: "",
            contactPerson: "",
            resourceNeeded: "",
        }
        const [aanganwadis,setAanganwadis] = useState(defaultAanganwadis);
        const [show,setShow] = useState(false);
        const [newAanganwadi,setNewAanganwadi] = useState(initCurrentAanganwadi);
        // const [showCreateBtn,setShowCreateBtn] = useState(true);
        const [editing,setEdit] = useState(false);
        const [rates,setRates] = useState([1,2,3,4,5,6,7,8,9,10]);

        const handleClose = () => {
            setShow(false);
        };
        const handleShow = () => {
            setShow(true);
            if(editing == false) {
                setNewAanganwadi(initCurrentAanganwadi);
            }
        };

        const onFormSubmit = (newAanganwadi) => {
            const id = aanganwadis.length + 1;
            setAanganwadis([...aanganwadis,{ ...newAanganwadi,id }]);
        };

        const onEdit = (newAanganwadi) => {
            setEdit(true);
            if(editing == true) {
                setNewAanganwadi({ ...newAanganwadi,newAanganwadi });
                handleShow();
            }

        };

        const onSubmit = (newAanganwadi) => {
            if(editing === true) {
                onUpdateAanganwadi(newAanganwadi);
            } else {
                onFormSubmit(newAanganwadi);
            }
        };

        const onUpdateAanganwadi = (newAanganwadi) => {
            setEdit(false);
            let id = newAanganwadi.id;
            setAanganwadis(aanganwadis.map((i) => (i.id === id ? newAanganwadi : i)));
        };

        const onDeleteAanganwadi = (currentAanganwadi) => {
            setAanganwadis(aanganwadis.filter((i) => i.id !== currentAanganwadi.id));
        };

        return (
          <Container fluid="md mt-5">
            <Row>
              <Col>
                <Card className="customCard">
                  <Card.Body>
                    <div className="d-flex justify-content-between customCardBody">
                      <div>
                        <Card.Title>Aanganwadi Data </Card.Title>
                      </div>
                      <div className="d-flex">
                        <Button
                          variant="maincolor"
                          onClick={handleShow}
                          title="Add Aanganwadi"
                        >
                          <FaPlus color="white" />
                        </Button>
                      </div>
                    </div>
                                {['Sector','Manager'].map(
                                    (variant) => (
                                        <DropdownButton
                                            color="maincolor"
                                            as={ButtonGroup}
                                            key={variant}
                                            id={`dropdown-variants-${variant}`}
                                            variant={variant.toLowerCase()}
                                            title={variant}
                                        >
                                            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                            <Dropdown.Item eventKey="3">
                                                Active Item
                                            </Dropdown.Item>
                                        </DropdownButton>
                                    ),
                                )}
                    <Table
                      striped
                      bordered
                      hover
                      variant="light"
                      className="m-2"
                    >
                      <thead>
                        <tr>
                          <th>Manager</th>
                          <th>Workers</th>
                          <th>Sector</th>
                          <th>Phone</th>
                          <th>Contact Person</th>
                          <th>ResourceNeeded</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {aanganwadis.length > 0 ? (
                          aanganwadis.map((aanganwadi, index) => (
                            <tr key={index}>
                              <td>{aanganwadi.manager}</td>
                              <td>{aanganwadi.workers}</td>
                              <td>{aanganwadi.sector}</td>
                              <td>{aanganwadi.phoneNumber}</td>
                              <td>{aanganwadi.contactPerson}</td>
                              <td>{aanganwadi.resourceNeeded}</td>
                              <td>
                                <Button
                                  variant="maincolor"
                                  title="Edit aanganwadi details"
                                  onClick={() => onEdit(aanganwadi)}
                                >
                                  <FaPencilAlt />
                                </Button>{" "}
                                <Button
                                  variant="danger"
                                  title="Delete aanganwadi"
                                  onClick={() => onDeleteAanganwadi(aanganwadi)}
                                >
                                  <FaTrashAlt />
                                </Button>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan={6} className="text-center">
                              No aanganwadis found.
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
                      onSubmit(newAanganwadi);
                    }}
                  >
                    <Modal.Header closeButton>
                      {editing == true ? (
                        <Modal.Title>Edit Aanganwadi</Modal.Title>
                      ) : (
                        <Modal.Title>Add Aanganwadi</Modal.Title>
                      )}
                    </Modal.Header>
                    <Modal.Body>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicfManager"
                      >
                        <Form.Label>Manager</Form.Label>
                        <Form.Control
                          type="text"
                          value={newAanganwadi.manager}
                          required
                          onChange={(e) =>
                            setNewAanganwadi({
                              ...newAanganwadi,
                              manager: e.target.value,
                            })
                          }
                          placeholder="Enter Manager Name"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                          type="text"
                          value={newAanganwadi.address}
                          onChange={(e) =>
                            setNewAanganwadi({
                              ...newAanganwadi,
                              address: e.target.value,
                            })
                          }
                          placeholder="Enter Address"
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasiclWorkers"
                      >
                        <Form.Label>Workers</Form.Label>
                        <Form.Control
                          type="number"
                          value={newAanganwadi.workers}
                          required
                          onChange={(e) =>
                            setNewAanganwadi({
                              ...newAanganwadi,
                              workers: e.target.value,
                            })
                          }
                          placeholder="Enter Workers"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicSector">
                        <Form.Label>Sector</Form.Label>
                        <Form.Control
                          type="text"
                          value={newAanganwadi.sector}
                          onChange={(e) =>
                            setNewAanganwadi({
                              ...newAanganwadi,
                              sector: e.target.value,
                            })
                          }
                          placeholder="Enter Sector"
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPhoneNumber"
                      >
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                          type="text"
                          value={newAanganwadi.phoneNumber}
                          onChange={(e) =>
                            setNewAanganwadi({
                              ...newAanganwadi,
                              phoneNumber: e.target.value,
                            })
                          }
                          placeholder="Enter Phone Number"
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicContactPerson"
                      >
                        <Form.Label>Contact person</Form.Label>
                        <Form.Control
                          type="text"
                          value={newAanganwadi.contactPerson}
                          onChange={(e) =>
                            setNewAanganwadi({
                              ...newAanganwadi,
                              contactPerson: e.target.value,
                            })
                          }
                          placeholder="Enter Contact Person"
                        />
                      </Form.Group>
                      {/* <Form.Group className="mb-3">
                                        <Form.Label>Address</Form.Label>
                                        <Form.Select
                                            value={newAanganwadi.address}
                                            onChange={(e) =>
                                                setNewAanganwadi({ ...newAanganwadi,address: e.target.value })
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
                          disabled={!newAanganwadi.name}
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

export default AanganwadiList;
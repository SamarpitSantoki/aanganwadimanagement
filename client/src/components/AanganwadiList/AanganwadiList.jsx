import React, { useEffect, useState } from "react";
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
import { FaPencilAlt, FaPlus, FaTrashAlt } from "react-icons/fa";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import axiosFetch from "../../helpers/axiosfetch";
import { useNavigate } from "react-router-dom";

const AanganwadiList = () => {
  const navigate = useNavigate();
  const initCurrentAanganwadi = {
    worker: "",
    sector: "",
    phoneNumber: "",
    contactPerson: "",
    resourceNeeded: "",
  };
  const [aanganwadis, setAanganwadis] = useState([]);
  const [show, setShow] = useState(false);
  const [newAanganwadi, setNewAanganwadi] = useState(initCurrentAanganwadi);
  // const [showCreateBtn,setShowCreateBtn] = useState(true);
  const [editing, setEdit] = useState(false);
  const [rates, setRates] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [workerList, setWorkerList] = useState([]);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
    if (editing == false) {
      setNewAanganwadi(initCurrentAanganwadi);
    }
  };

  const onFormSubmit = async (newAanganwadi) => {
    const id = aanganwadis.length + 1;
    if (
      newAanganwadi.worker == "" ||
      newAanganwadi.sector == "" ||
      newAanganwadi.phoneNumber == "" ||
      newAanganwadi.contactPerson == "" ||
      newAanganwadi.address == ""
    ) {
      alert("Please fill all the fields");
      return;
    }

    const res = await axiosFetch({
      url: "/aanganwadi",
      method: "post",
      data: newAanganwadi,
    });
    console.log(res);
    if (res.status == 200) {
      handleClose();
    }
    setAanganwadis([...aanganwadis, { ...newAanganwadi, id }]);
  };

  const onEdit = (newAanganwadi) => {
    setEdit(true);
    if (editing == true) {
      setNewAanganwadi({ ...newAanganwadi });
      handleShow();
    }
  };

  const onSubmit = (newAanganwadi) => {
    if (editing === true) {
      onUpdateAanganwadi(newAanganwadi);
    } else {
      onFormSubmit(newAanganwadi);
    }
  };

  const onUpdateAanganwadi = async (newAanganwadi) => {
    let id = newAanganwadi._id;

    try {
      const res = await axiosFetch({
        url: "/aanganwadi/" + id,
        method: "put",
        data: newAanganwadi,
      });
      console.log(res);
      if (res.status == 200) {
        fetchWorkers();
        handleClose();
        setEdit(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onDeleteAanganwadi = async (id) => {
    try {
      const res = await axiosFetch({
        url: "/aanganwadi/" + id,
        method: "delete",
      });
      if (res.status == 200) {
        fetchAanganwadis();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const fetchWorkersList = async () => {
    try {
      const res = await axiosFetch({
        url: "/worker?" + JSON.stringify({ role: "worker" }),
        method: "get",
      });
      setWorkerList(res.data);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchAanganwadis = async () => {
    const res = await axiosFetch({
      url: "/aanganwadi/",
      method: "get",
    });
    console.log(res);
    if (res.status == 200) {
      setAanganwadis(res.data);
    }
  };

  const handleViewAanganwadi = (id) => {
    navigate("/wadi/" + id);
  };

  useEffect(() => {
    fetchAanganwadis();
    fetchWorkersList();
  }, []);

  return (
    <Container fluid="md mt-5">
      <Row>
        <Col>
          <Card className="customCard">
            <Card.Body>
              <div className="d-flex justify-content-between customCardBody">
                <div>
                  <Card.Title>Aanganwadi Data</Card.Title>
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
              {["Sector", "Manager"].map((variant) => (
                <DropdownButton
                  color="maincolor"
                  as={ButtonGroup}
                  key={variant}
                  id={`dropdown-variants-${variant}`}
                  variant={variant.toLowerCase()}
                  title={variant}
                >
                  <Dropdown.Item eventKey="1">Abc</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Def</Dropdown.Item>
                  <Dropdown.Item eventKey="3">Abcd</Dropdown.Item>
                </DropdownButton>
              ))}
              <Table striped bordered hover variant="light" className="m-2">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Worker</th>
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
                      <tr
                        key={index}
                        onClick={() => handleViewAanganwadi(aanganwadi._id)}
                      >
                        <td>{aanganwadi.aanganwadiname}</td>
                        <td>{aanganwadi.worker}</td>
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
                            onClick={() => onDeleteAanganwadi(aanganwadi._id)}
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
                <Form.Group className="mb-3" controlId="formBasicfManager">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={newAanganwadi.aanganwadiname}
                    required
                    onChange={(e) =>
                      setNewAanganwadi({
                        ...newAanganwadi,
                        aanganwadiname: e.target.value,
                      })
                    }
                    placeholder="Enter Aanganwadi Name"
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
                <Form.Group className="mb-3" controlId="formBasiclWorkers">
                  <Form.Label>Worker</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Select Worker</option>
                    {workerList.map((worker, index) => (
                      <option key={index} value={worker._id}>
                        {worker.fName} {worker.lName} - {worker.sector}
                      </option>
                    ))}
                  </Form.Select>

                  {/* <Form.Control
                    type="string"
                    value={newAanganwadi.worker}
                    onChange={(e) =>
                      setNewAanganwadi({
                        ...newAanganwadi,
                        worker: e.target.value,
                      })
                    }
                    placeholder="Enter Workers"
                  /> */}
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
                <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
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
                <Form.Group className="mb-3" controlId="formBasicContactPerson">
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
                    onClick={() => onSubmit(newAanganwadi)}
                  >
                    Update
                  </Button>
                ) : (
                  <Button
                    variant="primary"
                    // disabled={!newAanganwadi.name}
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

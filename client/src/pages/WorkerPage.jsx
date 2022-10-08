import "../App.css";
import React, { useState } from "react";
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
import { FaPencilAlt, FaPlus, FaTrashAlt } from "react-icons/fa";
import axiosFetch from "../helpers/axiosfetch";
import { useEffect } from "react";

const WorkerPage = ({ heading }) => {
  const defaultUsers = [
    {
      fName: "Shrey",
      lName: "Vegad",
      email: "abc@gmail.com",
      sector: "A",
      phoneNumber: "9999999999",
      linkedAanganwadi: "A",
    },
    {
      fName: "Samarpit",
      lName: "Santoki",
      email: "abcde@gmail.com",
      sector: "B",
      phoneNumber: "8888888888",
      linkedAanganwadi: "B",
    },
    {
      fName: "Parth",
      lName: "Trivedi",
      email: "abcd@gmail.com",
      sector: "B",
      phoneNumber: "7777777777",
      linkedAanganwadi: "BA",
    },
    {
      fName: "Shubham",
      lName: "Rupapara",
      email: "abcdef@gmail.com",
      sector: "C",
      phoneNumber: "6666666666",
      linkedAanganwadi: "C",
    },
    {
      fName: "Vivek",
      lName: "kakadiya",
      email: "xyz@gmail.com",
      sector: "D",
      phoneNumber: "5555555555",
      linkedAanganwadi: "D",
    },
    {
      fName: "Vivek",
      lName: "kakadiya",
      email: "xyz@gmail.com",
      sector: "D",
      phoneNumber: "5555555555",
      linkedAanganwadi: "DA",
    },
    {
      fName: "Jenish",
      lName: "Gondaliya",
      email: "pqr@gmail.com",
      sector: "E",
      phoneNumber: "4444444444",
      linkedAanganwadi: "E",
    },
    {
      fName: "Dhruvraj",
      lName: "Gohil",
      email: "def@gmail.com",
      sector: "E",
      phoneNumber: "4444444444",
      linkedAanganwadi: "EA",
    },
  ];

  const initCurrentUser = {
    fName: "",
    lName: "",
    email: "",
    sector: "",
    phoneNumber: "",
    linkedAanganwadi: null,
  };

  const [users, setUsers] = useState(defaultUsers);
  const [show, setShow] = useState(false);
  const [newUser, setNewUser] = useState({});
  // const [showCreateBtn,setShowCreateBtn] = useState(true);
  const [editing, setEdit] = useState(false);
  const [rates, setRates] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [data, setData] = useState();
  const [aangList, setAangList] = useState([]);
  const [filter, setFilter] = useState({});
  const [selectedSector, setSelectedSector] = useState("");
  const [sectorList, setSectorList] = useState([]);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
    if (editing == false) {
      setNewUser(initCurrentUser);
    }
  };

  const onFormSubmit = async () => {
    // check if fields are empty
    if (
      newUser.fName == "" ||
      newUser.lName == "" ||
      newUser.email == "" ||
      newUser.sector == "" ||
      newUser.phoneNumber == ""
    ) {
      alert("Please fill all the fields");
      return;
    }

    const res = await axiosFetch({
      url: "/worker/",
      method: "post",
      data: newUser,
    });
    console.log(res);
    if (res.status == 200) {
      setUsers([...users, newUser]);
      handleClose();
      fetchWorkers();
    }
  };

  const onEdit = (newUser) => {
    setEdit(true);
    if (editing == true) {
      setNewUser({ ...newUser, newUser });
      handleShow();
    }
  };

  const onSubmit = () => {
    if (editing === true) {
      onUpdateUser();
    } else {
      onFormSubmit();
    }
  };

  const onUpdateUser = async () => {
    setEdit(false);
    const res = await axiosFetch({
      url: "/worker/" + newUser._id,
      method: "put",
      data: newUser,
    });
    fetchWorkers();
    console.log(res.data);
  };

  const onDeleteUser = async (id) => {
    try {
      const res = await axiosFetch({
        url: "/worker/" + id,
        method: "delete",
      });
      console.log(res);
      fetchWorkers();
    } catch (err) {
      console.log(err);
    }
  };

  const fetchWorkers = async () => {
    const { data } = await axiosFetch({
      url: "/worker",
      method: "get",
    });
    setData(data);
  };

  const fetchAanganwadis = async () => {
    const res = await axiosFetch({
      url: `/aanganwadi/?filter=` + JSON.stringify(filter),
      method: "get",
    });

    console.log(res);
    if (res.status == 200) {
      setAangList(res.data);
      if (res.data.length > sectorList.length) {
        let secs = [];
        res.data.map((i) => {
          if (!secs.includes(i.sector) && !sectorList.includes(i.sector)) {
            secs.push(i.sector);
          }
        });

        setSectorList(secs);
      }
    }
  };

  useEffect(() => {
    fetchWorkers();
    fetchAanganwadis();
  }, []);

  useEffect(() => {
    fetchAanganwadis();
  }, [selectedSector]);
  console.log(data);
  return (
    <Container fluid="md">
      <Row>
        <Col>
          <Card className="customCard">
            <Card.Body>
              <div className="d-flex justify-content-between customCardBody">
                <div>
                  <Card.Title>{heading}</Card.Title>
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
              <Table striped bordered hover variant="light" className="m-2">
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
                  {data ? (
                    data.map((user, index) => (
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
                            onClick={() => onDeleteUser(user._id)}
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
                {editing == true ? (
                  <Modal.Title>Edit User</Modal.Title>
                ) : (
                  <Modal.Title>Add User</Modal.Title>
                )}
              </Modal.Header>
              <Modal.Body>
                <Form.Group className="mb-3" controlId="formBasicfName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={newUser.fName}
                    required
                    onChange={(e) =>
                      setNewUser({ ...newUser, fName: e.target.value })
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
                      setNewUser({ ...newUser, mName: e.target.value })
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
                      setNewUser({ ...newUser, lName: e.target.value })
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
                      setNewUser({ ...newUser, email: e.target.value })
                    }
                    placeholder="Enter Email"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicRole">
                  <Form.Label>Role</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    value={newUser.role}
                    onChange={(e) =>
                      setNewUser({ ...newUser, role: e.target.value })
                    }
                  >
                    <option>Select Role</option>
                    <option value="adminStaff">Admin Staff</option>
                    <option value="zonalOfficer">Zonal Officer</option>
                    <option value="manager">Manager</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicSector">
                  <Form.Label>Sector</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    value={newUser.sector}
                    onChange={(e) =>
                      setNewUser({ ...newUser, sector: e.target.value })
                    }
                  >
                    <option>Select Sector</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicAddress">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    value={newUser.address}
                    onChange={(e) =>
                      setNewUser({ ...newUser, address: e.target.value })
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
                      setNewUser({
                        ...newUser,
                        phoneNumber: e.target.value,
                      })
                    }
                    placeholder="Enter Phone Number"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="formBasicLinkedAAnganwadi"
                >
                  <Form.Label>Linked Aanganwadi</Form.Label>
                  <Row sm={3}>
                    <Col></Col>
                    <Col></Col>
                    <Col>
                      <Form.Select
                        style={{ marginBottom: "10px" }}
                        value={selectedSector}
                        onChange={(e) => {
                          setSelectedSector(e.target.value);
                          if (e.target.value === "All") {
                            setFilter((prev) => {
                              delete prev.sector;
                              return prev;
                            });
                            return;
                          }
                          setFilter((prev) => ({
                            ...prev,
                            sector: e.target.value,
                          }));
                        }}
                      >
                        <option>Select Sector</option>
                        <option value={"All"}>All</option>
                        {sectorList.map((sector) => (
                          <option value={sector}>{sector}</option>
                        ))}
                      </Form.Select>
                    </Col>
                  </Row>
                  <Form.Select
                    value={newUser.linkedAanganwadi}
                    onChange={(e) =>
                      setNewUser({
                        ...newUser,
                        linkedAanganwadi: e.target.value,
                      })
                    }
                  >
                    <option value="">Select</option>
                    {aangList.length
                      ? aangList.map((val, index) => (
                          <option key={index} value={val._id}>
                            Sector: {val.sector} , Manager: {val.manager}
                          </option>
                        ))
                      : null}
                  </Form.Select>
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
                  <Button
                    variant="primary"
                    disabled={!newUser.fName}
                    type="submit"
                    onClick={onSubmit}
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

export default WorkerPage;
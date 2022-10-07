import React,{ useState } from "react";
import {
    Button,
    Container,
    Card,
    Col,
    Row,
    Table,
} from "react-bootstrap";
// import { Toggle } from "rsuite";
import "../../App.css";
import { FaPencilAlt,FaPlus,FaTrashAlt } from "react-icons/fa";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const StockShow = () => {

    const defaultAanganwadis = [
        {
            Item: "A",
            Quantity: "5",
            
        },
        {
            Item: "B",
            Quantity: "4",
        },
    ];

    return (
        <Container fluid="md mt-5">
            <Row>
                <Col>
                    <Card className="customCard">
                        <Card.Body>
                            <div className="d-flex justify-content-between customCardBody">
                                <div>
                                    <Card.Title>Stock Details</Card.Title>
                                </div>
                                <div className="d-flex">
                                    <Button
                                        variant="maincolor"
                                        // onClick={handleShow}
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
                                        <Dropdown.Item eventKey="1">Abc</Dropdown.Item>
                                        <Dropdown.Item eventKey="2">Def</Dropdown.Item>
                                        <Dropdown.Item eventKey="3">Abcd</Dropdown.Item>
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
                                        aanganwadis.map((aanganwadi,index) => (
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
                </Col>
            </Row>
        </Container>
    )
};
export default StockShow;
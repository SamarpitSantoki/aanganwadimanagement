import React from "react";
import { Button, Card, Col, Container, Row, Table } from "react-bootstrap";
import "../../App.css";
import { FaPencilAlt, FaPlus, FaTrashAlt } from "react-icons/fa";

const AanganwadiPage = () => {
  return (
    <>
      <div className="container px-0 mt-5 striped bordered hover variant=light">
        <div className="row gx-3">
          <div className="col">
            <div className="p-2 border bg-light">
              <h5 className="text-center border-bottom">Aanganwadi-Details</h5>
              <div className="p-2 text bg-light">
                <tr>Manager</tr>
                <tr>Workers</tr>
                <tr>Sector</tr>
                <tr>Phone</tr>
                <tr>Contact Person</tr>
                <tr>ResourceNeeded</tr>
              </div>
            </div>
          </div>
          <div className="col ">
            <div className="p-2 border bg-light">
              <h5 className="text-center border-bottom">Aanganwadi Manager-Details</h5>
              <div className="p-2 text bg-light">
                <tr>First Name</tr>
                <tr>Last Name</tr>
                <tr>Email</tr>
                <tr>Sector</tr>
                <tr>Phone</tr>
                <tr>Aanganwadi</tr>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Container fluid="md mt-5">
        <Col>
          <Row>
            <Card className="customCard">
              <Card.Body>
                <div className="d-flex justify-content-between customCardBody">
                  <div>
                    <Card.Title>Stock-Details</Card.Title>
                  </div>
                  <div className="d-flex"></div>
                </div>
                <Table striped bordered hover variant="light" className="m-2">
                  <thead>
                    <tr>
                      <th>Resource</th>
                      <th>Quantity</th>
                    </tr>
                  </thead>
                </Table>
              </Card.Body>
            </Card>
          </Row>
        </Col>
      </Container>
    </>
  );
};

export default AanganwadiPage;

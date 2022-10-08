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
                <tr>Manager <td>:</td><td>123</td></tr>
                <tr>Workers <td>:</td><td>123</td></tr>
                <tr>Sector <td>:</td><td>123</td></tr>
                <tr>Phone <td>:</td><td>9999999999</td></tr>
                <tr>Contact Person <td>:</td><td>ABC</td></tr>
                <tr>ResourceNeeded <td>:</td><td>123</td></tr>
              </div>
            </div>
          </div>
          <div className="col ">
            <div className="p-2 border bg-light">
              <h5 className="text-center border-bottom">Aanganwadi Manager-Details</h5>
              <div className="p-2 text bg-light">
                <tr>First Name <td>:</td><td>ABC</td></tr>
                <tr>Last Name <td>:</td><td>ABC</td></tr>
                <tr>Email <td>:</td><td>abc@gmail.com</td></tr>
                <tr>Sector <td>:</td><td>123</td></tr>
                <tr>Phone <td>:</td><td>9999999999</td></tr>
                <tr>Aanganwadi <td>:</td><td>ABC</td></tr>
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
                      <th>Resource
                        <tr>A</tr>
                        <tr>B</tr>
                      </th>

                      <th>Quantity
                        <tr>1</tr>
                        <tr>2</tr>
                      </th>
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

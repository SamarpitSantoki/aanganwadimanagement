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
// import { Toggle } from "rsuite";
import "../../App.css";
import { FaPencilAlt,FaPlus,FaTrashAlt } from "react-icons/fa";


const StockShow = () => {

    const defaultStocks = [
        {
            resource: "A",
            quantity: "5",
            
        },
        {
            resource: "B",
            quantity: "4",
        },
    ];

    const initCurrentStock = {
        resource: "",
        quantity: "",
       
    }
    const [stocks,setStocks] = useState(defaultStocks);
    const [show,setShow] = useState(false);
    const [newStock,setNewStock] = useState(initCurrentStock);
    // const [showCreateBtn,setShowCreateBtn] = useState(true);
    const [editing,setEdit] = useState(false);
    const [rates,setRates] = useState([1,2,3,4,5,6,7,8,9,10]);

    const handleClose = () => {
        setShow(false);
    };
    const handleShow = () => {
        setShow(true);
        if(editing == false) {
            setNewStock(initCurrentStock);
        }
    };

    const onFormSubmit = (newStock) => {
        const id = stocks.length + 1;
        setStocks([...stocks,{ ...newStock,id }]);
    };

    const onEdit = (newStock) => {
        setEdit(true);
        if(editing == true) {
            setNewStock({ ...newStock,newStock });
            handleShow();
        }

    };

    const onSubmit = (newStock) => {
        if(editing === true) {
            onUpdateStock(newStock);
        } else {
            onFormSubmit(newStock);
        }
    };

    const onUpdateStock = (newStock) => {
        setEdit(false);
        let id = newStock.id;
        setStocks(stocks.map((i) => (i.id === id ? newStock : i)));
    };

    const onDeleteStock = (currentStock) => {
        setStocks(stocks.filter((i) => i.id !== currentStock.id));
    };

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
                                        onClick={handleShow}
                                        title="Add Stock"
                                    >
                                        <FaPlus color="white" />
                                    </Button>
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
                                        <th>Quantity</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {stocks.length > 0 ? (
                                        stocks.map((stock,index) => (
                                            <tr key={index}>
                                                <td>{stock.resource}</td>
                                                <td>{stock.quantity}</td>
                                                <td>
                                                    <Button
                                                        variant="maincolor"
                                                        title="Edit stock details"
                                                        onClick={() => onEdit(stock)}
                                                    >
                                                        <FaPencilAlt />
                                                    </Button>{" "}
                                                    <Button
                                                        variant="danger"
                                                        title="Delete stock"
                                                        onClick={() => onDeleteStock(stock)}
                                                    >
                                                        <FaTrashAlt />
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan={6} className="text-center">
                                                No stocks found.
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
                                onSubmit(newStock);
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
                                        value={newStock.resource}
                                        required
                                        onChange={(e) =>
                                            setNewStock({
                                                ...newStock,
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
                                        value={newStock.quantity}
                                        onChange={(e) =>
                                            setNewStock({
                                                ...newStock,
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
                                        disabled={!newStock.name}
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
export default StockShow;
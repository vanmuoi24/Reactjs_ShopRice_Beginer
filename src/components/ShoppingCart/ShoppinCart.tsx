import { Col, Row, Card, Button, Form } from "react-bootstrap";
import { RootState } from "../../Redux_tokit/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { deleteitemcard } from "../../Redux_tokit/Rootreducer";
import Modal from "react-bootstrap/Modal";
const Shoppingcart = () => {
  let dispath = useDispatch();
  const addtocart = useSelector((state: RootState) => state.todo.cardlist);
  const [inputValues, setInputValues] = useState<number[]>([]);
  const [total, settotal] = useState<number>();
  const [show, setShow] = useState<boolean>(false);
  const [idcard, setidcard] = useState<number>();
  useEffect(() => {
    setInputValues(addtocart.map(() => 1));
  }, [addtocart]);
  useEffect(() => {
    const totalPrice = addtocart.reduce((accumulator, currentItem, index) => {
      return accumulator + parseFloat(currentItem.gia) * inputValues[index];
    }, 0);
    settotal(totalPrice);
  }, [inputValues, addtocart]);

  const handleStepUp = (index: number) => {
    const newInputValues = [...inputValues];
    newInputValues[index]++;
    setInputValues(newInputValues);
  };

  const handleStepdown = (index: number) => {
    const newInputValues = [...inputValues];
    if (newInputValues[index] > 1) {
      newInputValues[index]--;
      setInputValues(newInputValues);
    }
  };
  const handledelete = (value: number) => {
    setShow(true);
    setidcard(value);
  };
  const handleClose = () => setShow(false);
  const handlecomfirm = () => {
    if (typeof idcard !== "undefined") {
      dispath(deleteitemcard(idcard));
      setShow(false);
    }
  };
  return (
    <section className="h-100 gradient-custom">
      <div className="container py-5">
        <h3 className="mb-5 pt-2 text-center fw-bold text-uppercase">
          Your products
        </h3>
        <Row className="d-flex justify-content-center my-4">
          <Col md={8}>
            {addtocart.map((item, index) => (
              <Card className="mb-3" key={index}>
                <Card.Body>
                  <Row className="d-flex justify-content-between">
                    <Col className="d-flex flex-row align-items-center">
                      <div>
                        <img
                          src={item.hinhanh}
                          className="img-fluid rounded-3"
                          alt="Shopping item"
                          style={{ width: "65px" }}
                        />
                      </div>
                      <div className="ms-3">
                        <h5>{item.tensp}</h5>
                        <span className="float-md-start ">
                          Giá tiền :
                          <span className=" fw-bolder ">
                            {parseFloat(item.gia) * inputValues[index]}$
                          </span>
                        </span>
                      </div>
                    </Col>
                    <Col className="d-flex flex-row align-items-center">
                      <button
                        className="btn btn-link px-2"
                        onClick={() => handleStepdown(index)}
                      >
                        <i className="fas fa-minus"></i>
                      </button>
                      <input
                        id="form1"
                        min="1"
                        name="quantity"
                        value={inputValues[index]}
                        type="number"
                        className="form-control form-control-sm w-25 "
                      />

                      <button
                        className="btn btn-link px-2"
                        onClick={() => handleStepUp(index)}
                      >
                        <i className="fas fa-plus"></i>
                      </button>
                      <div style={{ width: "80px" }}>
                        <h5 className="mb-0">action</h5>
                      </div>
                      <a
                        href="#!"
                        style={{ color: "black" }}
                        onClick={(event) => handledelete(item.id)}
                      >
                        <i className="fas fa-trash-alt"></i>
                      </a>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            ))}
            <Card className="mb-4">
              <Card.Body>
                <p>
                  <strong>Expected shipping delivery</strong>
                </p>
                <p className="mb-0">12.10.2023 - 14.10.2023</p>
              </Card.Body>
            </Card>
            <Card className="mb-0">
              <Card.Body>
                <p>
                  <strong>We accept</strong>
                </p>
                {/* ... */}
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Header>
                <h5 className="mb-0">Summary</h5>
              </Card.Header>
              <Card.Body>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Products
                    <span>{total}$</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                    Shipping
                    <span>Gratis</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong>Total amount</strong>
                      <strong>
                        <p className="mb-0">(including VAT)</p>
                      </strong>
                    </div>
                    <span>
                      <strong>{total}$</strong>
                    </span>
                  </li>
                </ul>
                <Button variant="primary" size="lg">
                  Go to checkout
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Are you sure to delete the product?</h4>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button className=" bg-danger " onClick={handlecomfirm}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default Shoppingcart;

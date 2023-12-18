import { Col, Row, Card, Button, Form } from "react-bootstrap";
import { RootState } from "../../Redux_tokit/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Value } from "sass";
import { upqualitycard } from "../../Redux_tokit/Rootreducer";
import { list } from "../../Redux_tokit/Type";
const Shoppingcart = () => {
  let dispath = useDispatch();
  const addtocart = useSelector((state: RootState) => state.todo.cardlist);
  const [inputValues, setInputValues] = useState<number[]>([]);
  const [priceitem, setpriceitem] = useState<number>();
  useEffect(() => {
    setInputValues(addtocart.map(() => 1));
  }, [addtocart]);

  const handleStepUp = (index: number) => {
    const newInputValues = [...inputValues];
    newInputValues[index]++;

    const price = parseFloat(addtocart[index].gia) * newInputValues[index];
    setInputValues(newInputValues);
    setpriceitem(price);
  };

  const handleStepdown = (index: number) => {
    const newInputValues = [...inputValues];
    if (newInputValues[index] > 0) {
      newInputValues[index]--;
      setInputValues(newInputValues);
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
                            {parseFloat(item.gia) * inputValues[index]}
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
                        min="0"
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
                        <h5 className="mb-0"></h5>
                      </div>
                      <a href="#!" style={{ color: "#cecece" }}>
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
                <p className="mb-0">12.10.2020 - 14.10.2020</p>
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
                    <span>$53.98</span>
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
                      <strong>$53.98</strong>
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
    </section>
  );
};

export default Shoppingcart;

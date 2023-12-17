import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux_tokit/store";
import FilterShop from "./filtershop";
import "./shop.scss";

function Shop() {
  const dataproduct = useSelector((state: RootState) => state.todo.postlist);
  console.log(dataproduct);

  return (
    <section style={{ backgroundColor: "#eee" }}>
      <Container className="text-center py-5">
        <FilterShop />
        <h4 className="mt-4 mb-5">
          <strong>Cửa Hàng</strong>
        </h4>
        <Row>
          {dataproduct.map((list, index) => (
            <Col lg={3} md={6} className="mb-4">
              <Card className="product-grid">
                <div className="product-image">
                  <a href="#" className="image">
                    <Card.Img src={list.hinhanh} className="w-100 pic-1" />
                  </a>
                  <ul className="product-links">
                    <li>
                      <a href="#">
                        <i className="fa fa-shopping-bag"></i> Add to cart
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-search"></i> Quick View
                      </a>
                    </li>
                  </ul>
                </div>
                <Card.Body className="product-content">
                  <h3 className="title">
                    <h3>{list.tensp}</h3>
                  </h3>
                  <div className="price">
                    <span className=" fw-bolder ">{list.gia}</span>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Shop;

import React from "react";
import { Container, Row, Col, Image, Overlay, Button } from "react-bootstrap";
import banner from "../../acsset/img/img-hero.png";
import card1 from "../../acsset/img/service-card.png";
import card2 from "../../acsset/img/service-card (1).png";
import card3 from "../../acsset/img/service-card (2).png";

import "./home.scss";
function Home() {
  return (
    <>
      {" "}
      <Container className="banner">
        <Row
          className="justify-content-center align-items-center d-flex"
          style={{ height: "400px" }}
        >
          <Col className="text-white col_left">
            <h4 className="mb-3">Hương Vị Cơm Tấm Việt</h4>
            <Col style={{ color: "black" }}>
              <h2>Bếp Nhà</h2>
              <p>
                Một dĩa Cơm tấm thường được phục vụ kèm với một chén nước mắm và
                một chén canh, trên cùng dĩa ăn sẽ là một miếng sườn nướng và
                xung quanh là các món ăn mặn kèm khác cùng với mỡ hành được rưới
                lên trên cùng
              </p>
            </Col>
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            <img src={banner} alt="" />
          </Col>
        </Row>
      </Container>
      <Container className=" justify-content-center "></Container>
    </>
  );
}

export default Home;

import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux_tokit/store";
import FilterShop from "./filtershop";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./shop.scss";
import { addtocard } from "../../Redux_tokit/Rootreducer";
import ResponsivePagination from "react-responsive-pagination";

export interface post {
  id: number;
  masp: string;
  tensp: string;
  hinhanh: string;
  trangthai: string;
  gia: string;
}

function Shop() {
  let dispath = useDispatch();
  const dataproduct = useSelector((state: RootState) => state.todo.postlist);
  const addtocart = useSelector((state: RootState) => state.todo.cardlist);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 8;
  const handleAddToCart = (item: post) => {
    dispath(addtocard(item));
    toast.success("Đã Thêm Vò Giỏ Hàng");
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = dataproduct.slice(indexOfFirstItem, indexOfLastItem);

  const handlePaginationChange = (newPage: number) => {
    setCurrentPage(newPage);
  };
  return (
    <>
      <section style={{ backgroundColor: "#eee" }}>
        <Container className="text-center py-5">
          <FilterShop />
          <h4 className="mt-4 mb-5">
            <strong>Cửa Hàng</strong>
          </h4>
          <Row>
            {currentItems.map((item, index) => (
              <Col lg={3} md={6} className="mb-4" key={index}>
                <Card className="product-grid">
                  <div className="product-image">
                    <a href="#" className="image">
                      <Card.Img src={item.hinhanh} className="w-100 pic-1" />
                    </a>
                    <ul className="product-links">
                      <li>
                        <a href="#" onClick={() => handleAddToCart(item)}>
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
                      <h3>{item.tensp}</h3>
                    </h3>
                    <div className="price">
                      <span className=" fw-bolder ">{item.gia}</span>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <ResponsivePagination
            current={currentPage}
            total={Math.ceil(dataproduct.length / itemsPerPage)}
            onPageChange={handlePaginationChange}
          />
        </Container>
        <ToastContainer
          position="top-right"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </section>
    </>
  );
}

export default Shop;

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./nav.scss";
import logo from "../../acsset/img/food 2.png";
import { NavLink } from "react-router-dom";
function Navbarr() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          Cơm Tấm
          <span>
            {" "}
            <img src={logo} alt="" />
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-end flex-grow-1 pe-3 ">
            <NavLink to={"/"} className="nav-link ">
              Trang Chủ{" "}
            </NavLink>
            <NavLink to={"/store"} className={"nav-link "}>
              Cửa Hàng
            </NavLink>

            <Nav.Link href="#link">Đơn Hàng</Nav.Link>
            <NavLink to={"/store"} className={"nav-link "}>
              Cửa Hàng
            </NavLink>
          </Nav>
          <Navbar.Collapse className="navleft justify-content-end">
            <Navbar.Text className="me-4">
              <i className="fa-solid fa-user me-2 "></i>
              <span className="me-2">muoi</span>
            </Navbar.Text>
            <NavLink to={"/cart"} className="me-4 nav-link ">
              <i className="fa-solid fa-bag-shopping cart_icon"></i>
              <span className="length_product">1</span>
            </NavLink>
            <Navbar.Text className="me-4">
              <i className="fa-solid fa-right-to-bracket"></i>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;

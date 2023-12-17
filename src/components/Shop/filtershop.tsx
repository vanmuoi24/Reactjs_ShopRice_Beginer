import {
  Button,
  Col,
  Form,
  InputGroup,
  NavDropdown,
  Row,
} from "react-bootstrap";

const SearchAndPriceFilter = () => {
  return (
    <div>
      <Row className="justify-content-center align-items-center">
        <Col sm={6} className="">
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Tìm kiếm"
              aria-label="Tìm kiếm"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2">
              Tìm
            </Button>
          </InputGroup>
        </Col>
        <Col sm={4} className="d-flex justify-content-end">
          <InputGroup className="mb-3 me-2">
            <Form.Control
              placeholder="Giá từ"
              aria-label="Giá từ"
              aria-describedby="basic-addon2"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Giá đến"
              aria-label="Giá đến"
              aria-describedby="basic-addon2"
            />
          </InputGroup>
        </Col>
        <Col sm={2}>
          <Form.Select aria-label="Select Menu" className="mb-3">
            <option value="monHeo">Món Heo</option>
            <option value="monCa">Món Cá</option>
            <option value="monGa">Món Gà</option>
            <option value="monCanh">Món Canh</option>
            <option value="monXao">Món Xào</option>
            <option value="monHaiSan">Món Hải Sản</option>
          </Form.Select>
        </Col>
      </Row>
    </div>
  );
};

export default SearchAndPriceFilter;

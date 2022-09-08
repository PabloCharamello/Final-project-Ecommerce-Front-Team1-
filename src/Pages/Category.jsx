import React from "react";
import style from "../styles/Product.module.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Row, Col, Image, Button, Container } from "react-bootstrap";

export default function Category() {
  return (
    <>
      <Navbar />
      <Container>
        <Row>
          <Col
            lg={6}
            className={`${style.product} d-flex flex-column justify-content-center align-items-center align-items-lg-center p-0 order-1`}
          >
            <Image
              fluid
              className={style.imageProduct}
              src="https://images.ligne-roset.com/cache/products/3401/3d-views/1/1/11370600_6577_vue1_1500x1500.jpg"
            />
            <h2 className="text-start fs-2">PRADO</h2>
            <span className="fst-italic fw-semibold fs-8">USD 10,585</span>
            <Button>ADD TO CART</Button>
          </Col>
          <Col
            lg={6}
            className={`${style.product} d-flex flex-column justify-content-center align-items-center align-items-lg-center p-0 order-1`}
          >
            <Image
              fluid
              className={style.imageProduct}
              src="https://images.ligne-roset.com/cache/products/3401/3d-views/1/1/11370600_6577_vue1_1500x1500.jpg"
            />
            <h2 className="text-start fs-2">PRADO</h2>
            <span className="fst-italic fw-semibold fs-8">USD 10,585</span>
            <Button>ADD TO CART</Button>
          </Col>
          <Col
            lg={6}
            className={`${style.product} d-flex flex-column justify-content-center align-items-center align-items-lg-center p-0 order-1`}
          >
            <Image
              fluid
              className={style.imageProduct}
              src="https://images.ligne-roset.com/cache/products/3401/3d-views/1/1/11370600_6577_vue1_1500x1500.jpg"
            />
            <h2 className="text-start fs-2">PRADO</h2>
            <span className="fst-italic fw-semibold fs-8">USD 10,585</span>
            <Button>ADD TO CART</Button>
          </Col>
          <Col
            lg={6}
            className={`${style.product} d-flex flex-column justify-content-center align-items-center align-items-lg-center p-0 order-1`}
          >
            <Image
              fluid
              className={style.imageProduct}
              src="https://images.ligne-roset.com/cache/products/3401/3d-views/1/1/11370600_6577_vue1_1500x1500.jpg"
            />
            <h2 className="text-start fs-2">PRADO</h2>
            <span className="fst-italic fw-semibold fs-8">USD 10,585</span>
            <Button>ADD TO CART</Button>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

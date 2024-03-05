import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TypeBar from "../../components/TypeBar/TypeBar";
import Style from "./Shop.module.css";
import BrandBar from "../../components/BrandBar/BrandBar";
import DeviceList from "../../components/DeviceList/DeviceList";
const Shop = (props) => {
  return (
    <Container>
      <Row className={Style.row}>
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
          <BrandBar />
          <DeviceList />
        </Col>
      </Row>
    </Container>
  );
};

export default Shop;

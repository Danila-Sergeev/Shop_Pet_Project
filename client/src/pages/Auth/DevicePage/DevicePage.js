import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import bigStar from "../../../assets/Star 1.png";

const DevicePage = (props) => {
  const device = {
    id: 1,
    name: "a515",
    price: 50000,
    rating: 0,
    img: "https://avatars.mds.yandex.net/get-marketpic/1592829/pic9950ef0be09889a93db96b7f2d04f047/orig",
  };
  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image width={300} height={300} src={device.img} />
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column align-items-center">
            <h2>{device.name}</h2>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                background: `url(${bigStar}) no-repeat center center`,
                width: 300,
                height: 300,
                backgroundSixe: "cover",
                fontSize: 64,
              }}
            >
              {device.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}></Col>
      </Row>
    </Container>
  );
};

export default DevicePage;

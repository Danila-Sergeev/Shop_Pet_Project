import React from "react";
import { Card, Col, Image } from "react-bootstrap";
import Style from "./DeviceItem.module.css";
import star from "../../assets/Vector.png";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { DEVICE_ROUTE } from "../../utils/consts";

const DeviceItem = ({ device }) => {
  const history = useHistory();
  return (
    <Col md={3} onClick={() => history.push(DEVICE_ROUTE + "/" + device.id)}>
      <Card className={Style.card} border={"light"}>
        <Image className={Style.img} src={device.img} />
        <div className={Style.infoBlock}>
          <div>Sumsung</div>
          <div className={Style.rating}>
            <div>{device.rating}</div>
            <Image className={Style.star} src={star} />
          </div>
        </div>
        <div>{device.name}</div>
      </Card>
    </Col>
  );
};

export default DeviceItem;

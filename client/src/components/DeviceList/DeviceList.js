import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../../index";
import { Row } from "react-bootstrap";
import Style from "./DeviceList.module.css";
import DeviceItem from "../DeviceItem/DeviceItem";

const DeviceList = observer(() => {
  const { device } = useContext(Context);
  console.log(device);
  return (
    <Row className={Style.row}>
      {device.devices.map((device) => (
        <DeviceItem key={device.id} device={device} />
      ))}
    </Row>
  );
});

export default DeviceList;

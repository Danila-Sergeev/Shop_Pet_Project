import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../../index";
import { Card, Row } from "react-bootstrap";
import Style from "./BrandBar.module.css";

const BrandBar = observer(() => {
  const { device } = useContext(Context);
  return (
    <Row className={Style.row}>
      {device.brands.map((brand) => (
        <Card
          key={brand.id}
          className={Style.card}
          onClick={() => device.setSelectedBrand(brand)}
          border={brand.id === device.selectedBrand.id ? "danger" : "light"}
        >
          {brand.name}
        </Card>
      ))}
    </Row>
  );
});

export default BrandBar;

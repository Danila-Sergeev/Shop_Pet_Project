import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../../index";
import ListGroup from "react-bootstrap/ListGroup";
import Style from "./TypeBar.module.css";

const TypeBar = observer(() => {
  const { device } = useContext(Context);
  return (
    <ListGroup>
      {device.types.map((type) => (
        <ListGroup.Item
          className={Style.item}
          active={type.id === device.selectedType.id}
          onClick={() => device.setSelectedType(type)}
          key={type.id}
        >
          {type.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
});

export default TypeBar;

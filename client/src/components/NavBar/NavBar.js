import React, { useContext } from "react";
import { Context } from "../../index";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { SHOP_ROUTE } from "../../utils/consts";
import Styles from "./NavBar.module.css";
import { observer } from "mobx-react-lite";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <NavLink className={Styles.mainName} to={SHOP_ROUTE}>
          PapiBase
        </NavLink>
        {user.isAuth ? (
          <Nav className="ml-auto">
            <Button variant={"outline-light"} className="me-4">
              Админ панель
            </Button>
            <Button variant={"outline-light"}>Выйти</Button>
          </Nav>
        ) : (
          <Nav className="ml-auto">
            <Button
              variant={"outline-light"}
              onClick={() => user.setIsAuth(true)}
            >
              Авторизация
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;

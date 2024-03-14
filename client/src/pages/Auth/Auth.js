import React, { useState } from "react";
import { Button, Card, Container, Form, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import Style from "./Auth.module.css";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../../utils/consts";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { login, registration } from "../../http/userAPI";
import { observer } from "mobx-react";

const Auth = observer(() => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const click = async () => {
    if (isLogin) {
      const user = await login(email, password);
    } else {
      const response = await registration(email, password);
      console.log(response);
    }
  };
  return (
    <Container
      className={Style.container}
      style={{ height: window.innerHeight - 54 }}
    >
      <Card className={Style.card}>
        <h2 className={Style.title}>
          {isLogin ? "Авторизация" : "Регистрация"}
        </h2>
        <Form className={Style.form}>
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Введите email.."
            className="mt-3"
            value={email}
          />
          <Form.Control
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Введите пароль.."
            className="mt-3"
            value={password}
            type="password"
          />
          <Row className={Style.row}>
            {isLogin ? (
              <div className={Style.regBox}>
                Нет аккаунта?
                <NavLink className={Style.reg} to={REGISTRATION_ROUTE}>
                  Зарегистрируйся!
                </NavLink>
              </div>
            ) : (
              <div className={Style.regBox}>
                Есть аккаунт?
                <NavLink className={Style.reg} to={LOGIN_ROUTE}>
                  Войдите!
                </NavLink>
              </div>
            )}
            <Button
              className={Style.button}
              onClick={click}
              variant={"outline-success"}
            >
              {isLogin ? "Войти" : "Регистрация"}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
});

export default Auth;

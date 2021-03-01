import React, { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";
import { Modal, Space, Button, Input, message } from "antd";
import {
  NumberOutlined,
  KeyOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
  LoginOutlined,
} from "@ant-design/icons";

import AuthService from "../../services/AuthService";

import logoC from "../../assets/icons-512.png";

const Login = ({ isModalVisible, setIsModalVisible }) => {
  const history = useHistory();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = () => {
    const response = AuthService.logUser(user, password);
    switch (response) {
      case "LOGGED":
        setIsModalVisible(false);
        gotoDashboard();
        break;
      case "BAD_CREDENTIALS":
        message.error("Las credenciales son incorrectas, intentalo de nuevo");
        break;
      default:
        break;
    }
  };

  const gotoDashboard = () => {
    history.push("/dashboard");
  };

  return (
    <Fragment>
      <Modal
        title="Inicio de Sesión en CourseSpace"
        visible={isModalVisible}
        centered
        onCancel={() => setIsModalVisible(false)}
        footer={[
          <Button
            type="primary"
            onClick={() => {
              loginUser();
            }}
            disabled={user === "" || password === ""}
          >
            <LoginOutlined />
            Ingresar
          </Button>,
        ]}
      >
        <center>
          <Space direction="vertical">
            <strong>Ingresa tus datos para ingresar a la aplicación</strong>
            <img src={logoC} style={{ width: "200px" }} alt="CourseSpace" />
            <Input
              placeholder="Nombre de usuario"
              prefix={<NumberOutlined />}
              onChange={(e) => {
                setUser(e.target.value);
              }}
              value={user}
            ></Input>
            <Input.Password
              type="password"
              placeholder="Contraseña"
              prefix={<KeyOutlined />}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            ></Input.Password>
          </Space>
        </center>
      </Modal>
    </Fragment>
  );
};

export default Login;

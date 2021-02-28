import React, { Fragment, useState } from "react";
import {
  Modal,
  Space,
  Select,
  Steps,
  Card,
  Avatar,
  Badge,
  Typography,
  Button,
  Input,
  message,
} from "antd";
import {
  HomeOutlined,
  IdcardOutlined,
  SaveOutlined,
  LoadingOutlined,
  SmileTwoTone,
  ArrowRightOutlined,
  ArrowLeftOutlined,
  UserOutlined,
  MailOutlined,
  NumberOutlined,
  CloseCircleOutlined,
  KeyOutlined,
} from "@ant-design/icons";

import AuthService from "../../services/AuthService";

const { Step } = Steps;
const { Option } = Select;
const { Title, Paragraph, Text } = Typography;

const Register = ({ isModalVisible, setIsModalVisible }) => {
  const [corporate, setCorporate] = useState("Universidad EAN");
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [step, setStep] = useState("corporate");

  const saveDataUser = () => {
    AuthService.saveNewUser(name, corporate, mail, user, password);
    setIsModalVisible(false);
    message.success("Te has registrado correctamente");
  };

  return (
    <Fragment>
      <Modal
        title="Registro de usuario en CourseSpace"
        visible={isModalVisible}
        footer={[
          <Button
            icon={<CloseCircleOutlined />}
            onClick={() => {
              setIsModalVisible(false);
            }}
          >
            Cancelar
          </Button>,
          <Button
            type="primary"
            onClick={() => {
              saveDataUser();
            }}
            disabled={step !== "finish"}
          >
            <SaveOutlined />
            Registrarme
          </Button>,
        ]}
        className="registerContainer"
      >
        <center>
          <div className="cardSpace">
            <Card>
              <Space>
                <Badge count={5} className="avatarImage">
                  <Avatar
                    size={64}
                    src={<SmileTwoTone />}
                    style={{ fontSize: "65px" }}
                  />
                </Badge>
                <Typography>
                  <Title level={3}>
                    {name !== "" ? name : "Nombre Apellido"}
                  </Title>
                  <Text code>
                    {user !== "" ? "@" + user : "@nombreDeUsuario"}
                  </Text>
                  <Paragraph>
                    <Text type="secondary">
                      {corporate !== "" ? corporate : "Entidad"}
                    </Text>
                    <br />
                    <Text strong>
                      {mail !== "" ? mail : "Correo electrónico"}
                    </Text>
                  </Paragraph>
                </Typography>
              </Space>
            </Card>
          </div>

          {step === "corporate" && (
            <div className="corporateForm">
              <Space direction="vertical">
                <Space direction="vertical">
                  <strong>¿Cuál es tu entidad?</strong>
                  <Select
                    defaultValue="Universidad EAN"
                    style={{ width: 200 }}
                    onChange={(e) => {
                      setCorporate(e);
                    }}
                  >
                    <Option value="Universidad EAN">Universidad EAN</Option>
                    <Option value="Universidad El Bosque">
                      Universidad El Bosque
                    </Option>
                    <Option value="Colegio Abraham Lincoln">
                      Colegio Abraham Lincoln
                    </Option>
                  </Select>
                </Space>
                <Button
                  type="primary"
                  icon={<ArrowRightOutlined />}
                  onClick={() => {
                    setStep("information");
                  }}
                >
                  Siguiente
                </Button>
              </Space>
            </div>
          )}

          {step === "information" && (
            <div className="corporateForm">
              <Space direction="vertical">
                <strong>Completa tus datos personales</strong>
                <Input
                  placeholder="Nombres y apellidos"
                  prefix={<UserOutlined />}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                ></Input>
                <Input
                  placeholder="Correo electrónico"
                  prefix={<MailOutlined />}
                  onChange={(e) => {
                    setMail(e.target.value);
                  }}
                ></Input>
                <Input
                  placeholder="Nombre de usuario"
                  prefix={<NumberOutlined />}
                  onChange={(e) => {
                    setUser(e.target.value);
                  }}
                ></Input>
                <Input
                  type="password"
                  placeholder="Contraseña"
                  prefix={<KeyOutlined />}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                ></Input>

                <Space>
                  <Button
                    icon={<ArrowLeftOutlined />}
                    onClick={() => {
                      setStep("corporate");
                    }}
                  >
                    Anterior
                  </Button>
                  <Button
                    disabled={
                      corporate === "" ||
                      name === "" ||
                      mail === "" ||
                      user === "" ||
                      password === ""
                    }
                    type="primary"
                    onClick={() => {
                      setStep("finish");
                    }}
                  >
                    Siguiente
                    <ArrowRightOutlined />
                  </Button>
                </Space>
              </Space>
            </div>
          )}

          {step === "finish" && (
            <div className="corporateForm">
              <Space direction="vertical">
                <strong>Revisa que los datos sean correctos</strong>
                <Button
                  icon={<ArrowLeftOutlined />}
                  onClick={() => {
                    setStep("information");
                  }}
                >
                  Anterior
                </Button>
              </Space>
            </div>
          )}

          <Steps>
            <Step
              status="finish"
              title="Entidad"
              icon={
                step === "corporate" ? <LoadingOutlined /> : <HomeOutlined />
              }
            />
            <Step
              status={
                step === "information" || step === "finish" ? "finish" : "wait"
              }
              title="Información"
              icon={
                step === "information" ? (
                  <LoadingOutlined />
                ) : (
                  <IdcardOutlined />
                )
              }
            />
            <Step
              status={step === "finish" ? "finish" : "wait"}
              title="Finalizar"
              icon={step === "finish" ? <LoadingOutlined /> : <SaveOutlined />}
            />
          </Steps>
        </center>
      </Modal>
    </Fragment>
  );
};

export default Register;

import React, { Fragment, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Row, Col, Card } from "antd";
import {
  LoginOutlined,
  UserAddOutlined,
  DashboardTwoTone,
  CompassTwoTone,
  SmileTwoTone,
} from "@ant-design/icons";
import { Typography, Divider } from "antd";

import Register from "./Register";
import Login from "./Login";
import AuthService from "../../services/AuthService";

const { Title, Paragraph, Text } = Typography;

const banner =
  "https://firebasestorage.googleapis.com/v0/b/coursespace-886d2.appspot.com/o/bannerHeader.png?alt=media&token=7a5e4773-5122-4079-842d-32932ae71de1";
const landingImage =
  "https://firebasestorage.googleapis.com/v0/b/coursespace-886d2.appspot.com/o/landingImage.png?alt=media&token=ce07560b-b124-4275-a076-4fbfed1c0472";

const Home = () => {
  const history = useHistory();
  const [information, setInformation] = useState(null);
  const [isRegisterModalVisible, setIsRegisterModalVisible] = useState(false);
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);

  useEffect(() => {
    const userLogged = AuthService.getLoggedUser();
    if (userLogged) {
      history.push("/dashboard");
    }
  }, []);

  return (
    <Fragment>
      <div className="homePage">
        <div className="header">
          <img src={banner} className="iconImage" alt="" />
          <span className="buttonLogin">
            <Button
              type="primary"
              icon={<LoginOutlined />}
              onClick={() => {
                setIsLoginModalVisible(true);
              }}
            >
              <strong> Iniciar Sesión</strong>
            </Button>
          </span>
        </div>
        <div className="body">
          <Row justify="space-around">
            <Col>
              <center>
                <img src={landingImage} className="imageLanding" alt="" />
              </center>
            </Col>
            <Col>
              <Card className="cardHome">
                <Typography>
                  <center>
                    <Title level={2}>
                      ¡Registrar tus cursos nunca fue tan fácil!
                    </Title>

                    <Paragraph>
                      {" "}
                      <strong>CourseSpace</strong> es una aplicación enfocada en
                      la experiencia de usuario y la velocidad en los procesos
                      que este realiza
                    </Paragraph>
                  </center>
                </Typography>
                <center>
                  <Row>
                    <Col span={8}>
                      <Card
                        hoverable
                        className="spaceCard"
                        onClick={() => setInformation("NAVIGATION")}
                      >
                        <CompassTwoTone className="iconFeature" />
                        <Text className="textFeature" strong>
                          Navegación intuitiva
                        </Text>
                      </Card>
                    </Col>
                    <Col span={8}>
                      <Card
                        hoverable
                        className="spaceCard"
                        onClick={() => setInformation("FAST")}
                      >
                        <DashboardTwoTone className="iconFeature" />
                        <Text className="textFeature" strong>
                          Rápida y eficaz
                        </Text>
                      </Card>
                    </Col>
                    <Col span={8}>
                      <Card
                        hoverable
                        className="spaceCard"
                        onClick={() => setInformation("FRIENDLY")}
                      >
                        <SmileTwoTone className="iconFeature" />
                        <Text className="textFeature" strong>
                          Amigable con el usuario
                        </Text>
                      </Card>
                    </Col>
                  </Row>
                </center>
                <center>
                  <Typography className="textDescription">
                    <Text>
                      {information && information === "NAVIGATION" ? (
                        <div>
                          Diseñada totalmente para que los usuarios puedan{" "}
                          <strong>desplazarse de forma autogestionada</strong> y
                          para brindar indicaciones que{" "}
                          <strong>orienten mejor</strong> a los usuarios dentro
                          de la aplicación.
                        </div>
                      ) : information === "FAST" ? (
                        <div>
                          Los tiempos de carga{" "}
                          <strong>son casi inexistentes</strong> para que puedas
                          navegar y{" "}
                          <strong>
                            usar la aplicacion sin interrupciones.
                          </strong>
                        </div>
                      ) : information === "FRIENDLY" ? (
                        <div>
                          El diseño de <strong>CourseSpace</strong> es
                          <strong> atractivo, funcional y compacto</strong> para
                          que en ningún momento el usuario se vea confundido.
                        </div>
                      ) : (
                        <div>
                          Selecciona una característica para{" "}
                          <strong>ver más información</strong>
                        </div>
                      )}
                    </Text>
                  </Typography>
                </center>
                <Divider />
                <center>
                  <Button
                    type="primary"
                    size="large"
                    shape="round"
                    icon={<UserAddOutlined />}
                    onClick={() => {
                      setIsRegisterModalVisible(true);
                    }}
                  >
                    <strong> Registrarme</strong>
                  </Button>
                </center>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
      <Register
        isModalVisible={isRegisterModalVisible}
        setIsModalVisible={setIsRegisterModalVisible}
      />
      <Login
        isModalVisible={isLoginModalVisible}
        setIsModalVisible={setIsLoginModalVisible}
      />
    </Fragment>
  );
};

export default Home;

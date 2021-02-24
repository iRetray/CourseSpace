import React, { Fragment, useState } from "react";
import { Button, Row, Col, Card } from "antd";
import {
  LoginOutlined,
  UserAddOutlined,
  DashboardTwoTone,
  CompassTwoTone,
  SmileTwoTone,
} from "@ant-design/icons";
import { Typography, Divider } from "antd";

import banner from "../assets/banner.png";
import landingImage from "../assets/landingImage.png";

const { Title, Paragraph, Text } = Typography;

const Home = () => {
  const [information, setInformation] = useState(null);

  return (
    <Fragment>
      <div className="homePage">
        <div className="header">
          <img src={banner} className="iconImage" alt="" />
          <span className="buttonLogin">
            <Button type="primary" icon={<LoginOutlined />}>
              <strong> Iniciar Sesión</strong>
            </Button>
          </span>
        </div>
        <div className="body">
          <Row align="middle" justify="space-around">
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
                          La aplicación ha sido diseñada totalmente para que los
                          usuarios puedan{" "}
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
                  >
                    <strong> Registrarme</strong>
                  </Button>
                </center>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;

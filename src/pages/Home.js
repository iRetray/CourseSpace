import React, { Fragment } from "react";
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
                      ¡Registrar tus cursos nunca fue tan facil!
                    </Title>

                    <Paragraph>
                      {" "}
                      <strong>CourseSpace</strong> es una aplicacion enfocada en
                      la experiencia de usuario y la velocidad en los procesos
                      que este realiza
                    </Paragraph>
                  </center>
                </Typography>
                <center>
                  <Row>
                    <Col span={8}>
                      <Card hoverable className="spaceCard">
                        <CompassTwoTone className="iconFeature" />
                        <Text className="textFeature" strong>
                          Navegación intuitiva
                        </Text>
                      </Card>
                    </Col>
                    <Col span={8}>
                      <Card hoverable className="spaceCard">
                        <DashboardTwoTone className="iconFeature" />
                        <Text className="textFeature" strong>
                          Rápida y eficaz
                        </Text>
                      </Card>
                    </Col>
                    <Col span={8}>
                      <Card hoverable className="spaceCard">
                        <SmileTwoTone className="iconFeature" />
                        <Text className="textFeature" strong>
                          Amigable con el usuario
                        </Text>
                      </Card>
                    </Col>
                  </Row>
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

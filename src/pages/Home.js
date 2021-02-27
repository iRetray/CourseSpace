import React, { Fragment, useState } from "react";
import { Button, Row, Col, Card, Modal, Steps, Select, Space } from "antd";
import {
  LoginOutlined,
  UserAddOutlined,
  DashboardTwoTone,
  CompassTwoTone,
  SmileTwoTone,
  HomeOutlined,
  IdcardOutlined,
  SaveOutlined,
  LoadingOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import { Typography, Divider } from "antd";

import banner from "../assets/banner.png";

const { Title, Paragraph, Text } = Typography;
const { Step } = Steps;
const { Option } = Select;

const landingImage =
  "https://firebasestorage.googleapis.com/v0/b/coursespace-886d2.appspot.com/o/landingImage.png?alt=media&token=ce07560b-b124-4275-a076-4fbfed1c0472";

const Home = () => {
  const [information, setInformation] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

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
                      setIsModalVisible(true);
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
      <Modal
        title="Registro de usuario en CourseSpace"
        visible={isModalVisible}
        onOk={() => {}}
        onCancel={() => {
          setIsModalVisible(false);
        }}
      >
        <Space direction="vertical">
          <strong>Selecciona tu entidad</strong>
          <Select
            defaultValue="uean"
            style={{ width: 120 }}
            onChange={() => {}}
          >
            <Option value="uean">Universidad EAN</Option>
            <Option value="school">Colegio</Option>
            <Option value="disabled">Disabled</Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
        </Space>

        <Steps>
          <Step status="finish" title="Entidad" icon={<HomeOutlined />} />
          <Step status="finish" title="Información" icon={<IdcardOutlined />} />
          <Step status="process" title="Pay" icon={<LoadingOutlined />} />
          <Step status="wait" title="Finalizar" icon={<SaveOutlined />} />
        </Steps>
      </Modal>
    </Fragment>
  );
};

export default Home;

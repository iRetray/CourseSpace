import React, { Fragment } from "react";
import {
  PageHeader,
  Layout,
  Progress,
  Card,
  Space,
  Badge,
  Avatar,
  Typography,
} from "antd";
import { SmileTwoTone } from "@ant-design/icons";

import eanLogo from "../../assets/ean.jpg";

const { Title, Text, Paragraph, Link } = Typography;
const { Header, Content, Sider } = Layout;

const ProfilePage = ({ user }) => {
  return (
    <Fragment>
      <div className="profileContainer">
        <PageHeader
          style={{ backgroundColor: "white", marginTop: "20px" }}
          title="Dashboard"
          subTitle="Información general"
        />
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <Space>
            <Card hoverable className="cardSpaceProfile">
              <center>
                <Space direction="horizontal">
                  <img src={eanLogo} alt="" style={{ maxWidth: "120px" }} />
                  <Paragraph>
                    <Title level={2}>Ingenieria Ambiental</Title>
                    <Title level={5}>Semestre 4</Title>
                    87 creditos aprobados
                  </Paragraph>
                </Space>
              </center>
              <Progress
                strokeColor={{
                  "0%": "#108ee9",
                  "100%": "#87d068",
                }}
                percent={86}
              />
            </Card>
            {user && (
              <div className="cardSpaceProfile">
                <Card hoverable>
                  <Space>
                    <div style={{ padding: "15px" }}>
                      <Badge count={5} className="avatarImage">
                        <Avatar
                          size={64}
                          src={<SmileTwoTone />}
                          style={{ fontSize: "65px" }}
                        />
                      </Badge>
                    </div>
                    <Typography>
                      <Title level={3}>
                        {user.name !== "" ? user.name : "Nombre Apellido"}
                      </Title>
                      <Text code>
                        {user.user !== ""
                          ? "@" + user.user
                          : "@nombreDeUsuario"}
                      </Text>
                      <Paragraph>
                        <Text type="secondary">
                          {user.corporate !== "" ? user.corporate : "Entidad"}
                        </Text>
                        <br />
                        <Text strong>
                          {user.mail !== "" ? user.mail : "Correo electrónico"}
                        </Text>
                      </Paragraph>
                    </Typography>
                  </Space>
                  <hr />
                  <center>
                    <Link href="https://ant.design" target="_blank">
                      Editar mis datos personales
                    </Link>
                  </center>
                </Card>
              </div>
            )}
            <Card hoverable className="cardSpaceProfile">
              <center>
                <Progress
                  type="circle"
                  percent={75}
                  format={(percent) => (
                    <div>
                      <span className="numberGraph">{15}</span>
                      <br />
                      <span className="textGraph"> creditos registrados</span>
                    </div>
                  )}
                  strokeColor={{
                    "0%": "#108ee9",
                    "100%": "#87d068",
                  }}
                  style={{ padding: "15px" }}
                />
                <hr />

                <Link href="https://ant.design" target="_blank">
                  Registrar más cursos
                </Link>
              </center>
            </Card>
          </Space>
        </Content>
      </div>
    </Fragment>
  );
};

export default ProfilePage;

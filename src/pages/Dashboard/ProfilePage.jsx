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
          {user && (
            <div className="cardSpaceProfile">
              <Card>
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
                      {user.user !== "" ? "@" + user.user : "@nombreDeUsuario"}
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

          <Progress type="circle" percent={75} />
        </Content>
      </div>
    </Fragment>
  );
};

export default ProfilePage;

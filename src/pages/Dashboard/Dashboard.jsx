import React, { Fragment, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button, Typography, Layout, Menu, Breadcrumb, PageHeader } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  CalendarOutlined,
  BookOutlined,
  DiffOutlined,
  AreaChartOutlined,
  AppstoreOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

import AuthService from "../../services/AuthService";

import ProfilePage from "./ProfilePage";

const banner =
  "https://firebasestorage.googleapis.com/v0/b/coursespace-886d2.appspot.com/o/banerWhite.png?alt=media&token=fad949b4-5916-41d1-8fe2-10ce8b569af8";
const { Title } = Typography;
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const Dashboard = () => {
  const history = useHistory();
  const [user, setUser] = useState(null);
  const [page, setPage] = useState("profile");

  useEffect(() => {
    const userLogged = AuthService.getLoggedUser();
    if (userLogged) {
      setUser(JSON.parse(userLogged));
    }
  }, []);

  const closeSession = () => {
    AuthService.closeSession();
    history.push("/home");
  };

  return (
    <Fragment>
      <div className="dashboardContainer">
        <Layout>
          <Header className="header">
            <img src={banner} alt="" className="imageBanner" />
            <Button
              type="primary"
              danger
              className="iconSettings"
              onClick={() => {
                closeSession();
              }}
            >
              <LogoutOutlined />
              Cerrar sesión
            </Button>
          </Header>
          <Layout>
            <Sider
              width={200}
              className="site-layout-background"
              breakpoint="lg"
              collapsedWidth="0"
            >
              <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                style={{ height: "100%", borderRight: 0 }}
              >
                <Menu.Item icon={<UserOutlined />} key="1">
                  Mi Perfil
                </Menu.Item>
                <Menu.Item icon={<CalendarOutlined />} key="2">
                  Horario
                </Menu.Item>
                <SubMenu key="sub1" icon={<BookOutlined />} title="Asignaturas">
                  <Menu.Item key="3" icon={<AppstoreOutlined />}>
                    Administrar
                  </Menu.Item>
                  <Menu.Item key="4" icon={<DiffOutlined />}>
                    Registrar
                  </Menu.Item>
                </SubMenu>
                <Menu.Item icon={<AreaChartOutlined />}>Resultados</Menu.Item>
              </Menu>
            </Sider>
            <Layout style={{ padding: "0 24px 24px" }}>
              {page === "profile" && <ProfilePage user={user} />}
            </Layout>
          </Layout>
        </Layout>
      </div>
    </Fragment>
  );
};

export default Dashboard;

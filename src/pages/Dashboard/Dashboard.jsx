import React, { Fragment, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button, Typography } from "antd";

import AuthService from "../../services/AuthService";

const { Title } = Typography;

const Dashboard = () => {
  const history = useHistory();
  const [user, setUser] = useState(null);

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
        <div className="closeSessionButton">
          <Title level={3}>Bienvenido, {user ? user.name : null}</Title>
          <Button block danger onClick={() => closeSession()}>
            Cerrar Sesión
          </Button>
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;

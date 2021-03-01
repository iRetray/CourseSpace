import React, { Fragment, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "antd";

import AuthService from "../../services/AuthService";

const Dashboard = () => {
  const history = useHistory();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userLogged = AuthService.getLoggedUser();
    if (userLogged) {
      setUser(JSON.parse(userLogged)[0]);
    }
  }, []);

  const closeSession = () => {
    AuthService.closeSession();
    history.push("/home");
  };

  return (
    <Fragment>
      <div className="dashboardContainer">
        Bienvenido, {user ? user.name : null}
        <div className="closeSessionButton">
          <Button block danger onClick={() => closeSession()}>
            Cerrar Sesión
          </Button>
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;

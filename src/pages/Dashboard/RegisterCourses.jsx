import React, { Fragment } from "react";
import { PageHeader, Layout } from "antd";
const { Content } = Layout;

const RegisterCourses = () => {
  return (
    <Fragment>
      <div className="profileContainer">
        <PageHeader
          style={{ backgroundColor: "white", marginTop: "20px" }}
          title="Registrar cursos"
          subTitle="Planeados para el siguiente semestre"
        />
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          Formulario de registrar cursos
        </Content>
      </div>
    </Fragment>
  );
};

export default RegisterCourses;

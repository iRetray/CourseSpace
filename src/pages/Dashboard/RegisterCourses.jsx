import React, { Fragment } from "react";
import { PageHeader, Layout, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const { Content } = Layout;
const { Search } = Input;

const RegisterCourses = () => {
  const onSearch = (value) => console.log(value);
  return (
    <Fragment>
      <div className="registerCoursesContainer">
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
          <center>
            <Search
              placeholder="Busqueda de cursos"
              allowClear
              onSearch={onSearch}
              enterButton={
                <div>
                  <SearchOutlined /> <strong>Buscar</strong>
                </div>
              }
              size="middle"
              className="inputSearch"
            />
          </center>
        </Content>
      </div>
    </Fragment>
  );
};

export default RegisterCourses;

import React, { Fragment } from "react";
import { PageHeader, Layout } from "antd";

import ScheduleCalendar from "./ScheduleCalendar";

const { Header, Content, Sider } = Layout;

const SchedulePage = () => {
  return (
    <Fragment>
      <div className="RegisterContainer">
        <PageHeader
          style={{ backgroundColor: "white", marginTop: "20px" }}
          title="Mi horario"
          subTitle="Horas y fechas para tus clases"
        />
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <ScheduleCalendar />
        </Content>
      </div>
    </Fragment>
  );
};

export default SchedulePage;

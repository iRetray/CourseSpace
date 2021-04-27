import React, { Fragment } from "react";
import {
  PageHeader,
  Layout,
  Typography,
  Collapse,
  Card,
  Space,
  Progress,
  Row,
  Col,
  Statistic,
} from "antd";
import {
  SmileTwoTone,
  SettingFilled,
  CheckCircleTwoTone,
  FundTwoTone,
  BarChartOutlined,
} from "@ant-design/icons";

import CourseComponent from "../../components/CourseComponent";

import eanLogo from "../../assets/ean.jpg";

const { Panel } = Collapse;
const { Header, Content, Sider } = Layout;
const { Title, Text, Paragraph, Link } = Typography;

const ResultsPage = ({ user }) => {
  return (
    <Fragment>
      <div className="profileContainer">
        <PageHeader
          style={{ backgroundColor: "white", marginTop: "20px" }}
          title="Resultados"
          subTitle="Notas y promedios"
        />
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <div>
            <Card hoverable>
              <Statistic
                title="Promedio acumulado"
                value={"73"}
                suffix="/ 100"
                valueStyle={{ color: "#003a8c" }}
                prefix={<BarChartOutlined />}
              />
            </Card>
          </div>

          <Collapse defaultActiveKey={["1"]}>
            <Panel header="Semestre 1" key="1">
              <Row
                justify="space-around"
                align="middle"
                gutter={[32, 32]}
                style={{ padding: "20px" }}
              >
                <Col sm={24} md={12} xxl={8}>
                  <CourseComponent
                    name="Fundamentos de mecatrónica"
                    isApproved={true}
                    grade="76"
                    credits="6"
                    teacher="Ramiro Escobar"
                    isBiannual={true}
                  />
                </Col>
                <Col sm={24} md={12} xxl={8}>
                  <CourseComponent
                    name="Programación I"
                    isApproved={true}
                    grade="65"
                    credits="6"
                    teacher="Luis Cobo"
                    isBiannual={true}
                  />
                </Col>
                <Col sm={24} md={12} xxl={8}>
                  <CourseComponent
                    name="Ecuaciones diferenciales"
                    isApproved={false}
                    grade="47"
                    credits="6"
                    teacher="Magda Sanchez"
                    isBiannual={false}
                  />
                </Col>
              </Row>
            </Panel>
            <Panel header="Semestre 2" key="2">
              <Row
                justify="space-around"
                align="middle"
                gutter={[32, 32]}
                style={{ padding: "20px" }}
              >
                <Col sm={24} md={12} xxl={8}>
                  <CourseComponent
                    name="Fundamentos de mecatrónica"
                    isApproved={true}
                    grade="76"
                    credits="6"
                    teacher="Ramiro Escobar"
                    isBiannual={true}
                  />
                </Col>
                <Col sm={24} md={12} xxl={8}>
                  <CourseComponent
                    name="Programación I"
                    isApproved={true}
                    grade="65"
                    credits="6"
                    teacher="Luis Cobo"
                    isBiannual={true}
                  />
                </Col>
                <Col sm={24} md={12} xxl={8}>
                  <CourseComponent
                    name="Ecuaciones diferenciales"
                    isApproved={false}
                    grade="47"
                    credits="6"
                    teacher="Magda Sanchez"
                    isBiannual={false}
                  />
                </Col>
              </Row>
            </Panel>
            <Panel header="Semestre 3" key="3">
              <Row
                justify="space-around"
                align="middle"
                gutter={[32, 32]}
                style={{ padding: "20px" }}
              >
                <Col sm={24} md={12} xxl={8}>
                  <CourseComponent
                    name="Fundamentos de mecatrónica"
                    isApproved={true}
                    grade="76"
                    credits="6"
                    teacher="Ramiro Escobar"
                    isBiannual={true}
                  />
                </Col>
                <Col sm={24} md={12} xxl={8}>
                  <CourseComponent
                    name="Programación I"
                    isApproved={true}
                    grade="65"
                    credits="6"
                    teacher="Luis Cobo"
                    isBiannual={true}
                  />
                </Col>
                <Col sm={24} md={12} xxl={8}>
                  <CourseComponent
                    name="Ecuaciones diferenciales"
                    isApproved={false}
                    grade="47"
                    credits="6"
                    teacher="Magda Sanchez"
                    isBiannual={false}
                  />
                </Col>
              </Row>
            </Panel>
          </Collapse>
        </Content>
      </div>
    </Fragment>
  );
};

export default ResultsPage;

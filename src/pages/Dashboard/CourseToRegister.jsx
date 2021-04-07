import React, { Fragment } from "react";
import { Card, Space, Typography, Statistic } from "antd";
import { CloseCircleTwoTone, CheckCircleTwoTone } from "@ant-design/icons";

const { Title, Text, Paragraph } = Typography;

const CourseToRegister = ({
  name,
  isApproved,
  grade,
  credits,
  teacher,
  isBiannual,
}) => {
  return (
    <Fragment>
      <Card hoverable>
        <center>
          <Space direction="horizontal">
            <Paragraph>
              <Title level={3}>{name}</Title>
              <Space direction="horizontal">
                <div>
                  <Statistic
                    value={isApproved ? "Aprobado" : "Reprobado"}
                    valueStyle={{ color: isApproved ? "#3f8600" : "#CF1722" }}
                    prefix={
                      isApproved ? (
                        <CheckCircleTwoTone twoToneColor={"#4B8D0F"} />
                      ) : (
                        <CloseCircleTwoTone twoToneColor={"#cf1322"} />
                      )
                    }
                  />
                  <Statistic
                    style={{ padding: "10px" }}
                    title="Calificación final"
                    value={grade}
                    suffix="/ 100"
                  />
                </div>
                <div>
                  <Title level={5}>{credits} credito(s)</Title>
                  <Text>
                    <strong>Profesor(a):</strong> {teacher}
                  </Text>
                  <br />
                  <Text keyboard>
                    {isBiannual
                      ? "Unidad de estudio semestral"
                      : "Unidad de estudio de ciclo"}
                  </Text>
                </div>
              </Space>
            </Paragraph>
          </Space>
        </center>
      </Card>
    </Fragment>
  );
};

export default CourseToRegister;

import React, { Fragment } from "react";
import { PageHeader, Input, Layout, Card } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Space, Typography, Statistic, Select, Button } from "antd";
import {
  CalculatorOutlined,
  BuildOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";

const { Search } = Input;
const { Header, Content, Sider } = Layout;
const { Meta } = Card;
const { Title, Text, Paragraph } = Typography;
const { Option } = Select;

const CourseToRegister = ({
  id,
  image,
  name,
  credits,
  faculty,
  color,
  isBiannual,
  description,
  groupsAvaliable,
}) => {
  return (
    <Fragment>
      <Card
        hoverable
        className="CourseToRegisterContainer"
        cover={<img src={image} alt="" />}
      >
        <center>
          <Space direction="horizontal">
            <Paragraph>
              <Title level={3}>{name}</Title>
              <Paragraph>{description}</Paragraph>
              <Space direction="horizontal">
                <div>
                  <Statistic
                    style={{ lineHeight: "25px" }}
                    value={faculty}
                    valueStyle={{ color: color }}
                    prefix={
                      faculty === "Facultad de ingeniería" ? (
                        <CalculatorOutlined />
                      ) : (
                        <BuildOutlined />
                      )
                    }
                  />
                </div>
                <div>
                  <Title level={5}>{credits} credito(s)</Title>
                </div>
              </Space>
              <Select
                style={{ width: "100%", marginTop: "20px" }}
                onChange={null}
                placeholder="Selecciona un grupo"
              >
                {groupsAvaliable &&
                  groupsAvaliable.map((group) => (
                    <Option value={group.id}>
                      {group.teacher +
                        " / " +
                        group.startHour +
                        "-" +
                        group.endHour}
                    </Option>
                  ))}
              </Select>
              <Button
                style={{ marginTop: "20px" }}
                type="primary"
                shape="round"
                icon={<PlusCircleOutlined />}
                size="large"
              >
                Registrar
              </Button>
            </Paragraph>
          </Space>
        </center>
      </Card>
    </Fragment>
  );
};

export default CourseToRegister;

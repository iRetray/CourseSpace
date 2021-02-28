import React, { Fragment } from "react";
import { Modal, Space, Select, Steps } from "antd";
import {
  HomeOutlined,
  IdcardOutlined,
  SaveOutlined,
  LoadingOutlined,
} from "@ant-design/icons";

const { Step } = Steps;
const { Option } = Select;

const Login = ({ isModalVisible, setIsModalVisible }) => {
  return (
    <Fragment>
      <Modal
        title="Registro de usuario en CourseSpace"
        visible={isModalVisible}
        onOk={() => {}}
        onCancel={() => {
          setIsModalVisible(false);
        }}
      >
        <Space direction="vertical">
          <strong>Selecciona tu entidad</strong>
          <Select
            defaultValue="uean"
            style={{ width: 120 }}
            onChange={() => {}}
          >
            <Option value="uean">Universidad EAN</Option>
            <Option value="school">Colegio</Option>
            <Option value="disabled">Disabled</Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
        </Space>

        <Steps>
          <Step status="finish" title="Entidad" icon={<HomeOutlined />} />
          <Step status="finish" title="Información" icon={<IdcardOutlined />} />
          <Step status="process" title="Pay" icon={<LoadingOutlined />} />
          <Step status="wait" title="Finalizar" icon={<SaveOutlined />} />
        </Steps>
      </Modal>
    </Fragment>
  );
};

export default Login;

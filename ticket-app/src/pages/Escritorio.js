import { Row, Col, Typography, Button, Divider } from "antd";
import { CloseCircleOutlined, RightOutlined } from "@ant-design/icons";
import { useHideMenu } from "../hooks/useHideMenu";
import { getUsuarioStorage } from "../helpers/getUsuarioStorage";
import { useState } from "react";
import { redirect } from "react-router-dom";

const { Title, Text } = Typography;

const Escritorio = () => {
  useHideMenu(false);
  const [usuario] = useState(getUsuarioStorage());

  const salir = () => {
    localStorage.clear();
    redirect("/ingresar");
  };

  const siguienteTicket = () => {
    console.log("siguienteTicket");
  };

  if (!usuario.agente || !usuario.escritorio) {
    redirect("/ingresar");
  }

  return (
    <>
      <Row>
        <Col span={20}>
          <Title level={2}>{usuario.agente}</Title>
          <Text>Usted esta trabjando en el escritorio: </Text>
          <Text type="success">{usuario.escritorio}</Text>
        </Col>
        <Col span={4} align="right">
          <Button shape="round" type="danger" onClick={salir}>
            <CloseCircleOutlined />
            Salir
          </Button>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col>
          <Text>Esta atendiendo el ticket numero: </Text>
          <Text style={{ fontSize: 30 }} type="danger">
            12
          </Text>
        </Col>
      </Row>
      <Row>
        <Col offset={18} span={6} align="right">
          <Button onClick={siguienteTicket} shape="round" type="primary">
            <RightOutlined />
            Siguiente
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default Escritorio;

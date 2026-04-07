import { Row, Col, Typography, Button, Divider } from "antd";
import { CloseCircleOutlined, DownloadOutlined } from "@ant-design/icons";
import { useHideMenu } from "../hooks/useHideMenu";
import { SocketContext } from "../context/SocketContext";
import { useContext, useState } from "react";

const { Title, Text } = Typography;

const CrearTicket = () => {
  useHideMenu(true);

  const { socket } = useContext(SocketContext);
  const [ticket, setTicket] = useState(null);

  const nuevoTicket = () => {
    socket.emit("solicitar-ticket", null, (ticket) => {
      setTicket(ticket);
    });
  };
  return (
    <>
      <Row>
        <Col span={14} offset={6} align="center">
          <Title level={3}>Presione el boton para un nuevo ticket</Title>
          <Button
            shape="round"
            type="primary"
            onClick={nuevoTicket}
            size="large"
          >
            <DownloadOutlined />
            Nuevo Ticket
          </Button>
        </Col>
      </Row>

      {ticket && (
        <Row style={{ marginTop: "100px" }}>
          <Col span={14} offset={6} align="center">
            <Text level={2}>Su numero es: </Text>
            <br />
            <Text type="success" style={{ fontSize: 55 }} level={1}>
              {ticket?.numero}
            </Text>
          </Col>
        </Row>
      )}
    </>
  );
};

export default CrearTicket;

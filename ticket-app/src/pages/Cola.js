import { Row, Col, Typography, Button, Divider, List, Card, Tag } from "antd";
import { CloseCircleOutlined, DownloadOutlined } from "@ant-design/icons";
import { useHideMenu } from "../hooks/useHideMenu";
import { SocketContext } from "../context/SocketContext";
import { useContext, useState, useEffect } from "react";

const { Title, Text } = Typography;

const Cola = () => {
  useHideMenu(true);

  const { socket } = useContext(SocketContext);
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    socket.on("ticket-asignado", (data) => {
      setTickets(data);
    });

    return () => socket.off("ticket-asignado");
  }, [socket]);

  return (
    <>
      <Title level={1}>Atendiendo al cliente</Title>
      <Row>
        <Col span={12}>
          <List
            dataSource={tickets.slice(0, 3)}
            renderItem={(item) => (
              <List.Item>
                <Card
                  style={{ width: 300, marginTop: 16 }}
                  actions={[
                    <Tag color="volcano">{item.agente}</Tag>,
                    <Tag color="magenta">Escritorio: {item.escritorio}</Tag>,
                  ]}
                >
                  <Title level={2}>No. {item.numero}</Title>
                </Card>
              </List.Item>
            )}
          />
        </Col>
        <Col span={12}>
          <Divider>Historial de tickets</Divider>
          <List
            dataSource={tickets.slice(3)}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  title={`Ticket No. ${item.numero}`}
                  description={
                    <>
                      <Tag color="secondary">En el escritorio: </Tag>
                      <Tag color="magenta">{item.escritorio}</Tag>
                      <Tag color="secondary">Agente: </Tag>
                      <Tag color="volcano">{item.agente}</Tag>
                    </>
                  }
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </>
  );
};

export default Cola;

import { BellOutlined, CaretDownOutlined, UserOutlined } from "@ant-design/icons";
import { Badge, Button, Col, Dropdown, Menu, Row, Tooltip } from "antd";
import Link from "next/link";

const itemsDropdown = (
  <Menu
    items={[
      {
        key: "1",
        type: "group",
        children: [
          {
            key: "en",
            label: "English",
          },
          {
            key: "am",
            label: "Armenian",
          },
        ],
      },
    ]}
  />
);

const items = [
  {
    key: "language",
    label: (
        <Dropdown overlay={itemsDropdown} placement="bottom" trigger={["click"]}>
          <Button onClick={e => e.preventDefault()}>
            EN <CaretDownOutlined />
          </Button>
        </Dropdown>
    )
  },
  {
    key: "notification",
    label: (
          <Tooltip placement="bottom" title="Tooltip">
            <Button>
              <Badge dot={3} offset={[0,10]}>
                <BellOutlined />
              </Badge>
            </Button>
          </Tooltip>
    )
  },
  {
    key: "percent",
    label: (
        <Tooltip placement="bottom" title="Percent">
          <Button>
            75 %
          </Button>
        </Tooltip>
    )
  },
  {
    key: "user",
    label: (
        <Link href="/userProfile">
          <Tooltip placement="bottom" title="User">
            <Button>
              <UserOutlined /> Juliana
            </Button>
          </Tooltip>
        </Link>
    )
  },
  {
    key: "tradeNow",
    label: (
        <Button>Trade Now</Button>
    )
  },
];

const Navbar = () => {

  return (
        <Row  justify="space-between">
          <Col span={2}>
            Logo
          </Col>
          <Col span={10}>
            <Menu mode="horizontal" items={items} />
          </Col>
        </Row>
  );
}

export default Navbar;
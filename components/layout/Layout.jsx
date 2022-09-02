import styles from "../../styles/Home.module.css";
import { Button, Layout as AntdLayout } from "antd";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import Head from "next/head";
const { Header, Sider, Content } = AntdLayout;

const Layout = ({children}) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
      <AntdLayout>
        <Head>
          <title>Next JS { children.title }</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Header className={styles.navbar}>
          <Navbar />
        </Header>
        <AntdLayout className={styles.main} hasSider>
          <Sider className={`${styles.sidebar}`}
                 trigger={null}
                 collapsed={collapsed}
                 breakpoint="lg"
                 onCollapse={() => setCollapsed(!collapsed)}
               >
            <Button onClick={() => setCollapsed(!collapsed)} shape="circle" className={`${styles.toggleBtn} ${collapsed ? "" : styles.toggleBtnRotate}`}>
              <ArrowRightOutlined />
            </Button>
            <Sidebar />
          </Sider>
          <AntdLayout>
            <Content className={styles.content}>
              {children}
            </Content>
          </AntdLayout>
        </AntdLayout>
      </AntdLayout>
  );
}

export default Layout;
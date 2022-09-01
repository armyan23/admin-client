import {AppstoreFilled} from "@ant-design/icons";
import {Menu} from "antd";
import Link from "next/link";

const Sidebar = () => {
  const items = [
    {
      key: "1",
      icon: <AppstoreFilled />,
      label: (
        <Link href="/"> Home </Link>
      )
    },
    {
      key: "2",
      icon: <AppstoreFilled />,
      label: (
        <Link href="/accounts"> Accounts </Link>
      )
    },
    {
      key: "3",
      icon: <AppstoreFilled />,
      label: (
        <Link href="/infoPage"> Info pages </Link>
      )
    },
    {
      key: "4",
      icon: <AppstoreFilled />,
      label: (
        <Link href="/deposit"> Deposit </Link>
      )
    },
    {
      key: "5",
      icon: <AppstoreFilled />,
      label: (
        <Link href="/withdrawal"> Withdrawal </Link>
      )
    },
    {
      key: "7",
      icon: <AppstoreFilled />,
      label: (
        <Link href="/"> My payment methods </Link>
      )
    },
  
  ];

  return (
    <Menu items={items} style={{ minWidth: 0, flex: "auto", }} />
  );
}

export default Sidebar;
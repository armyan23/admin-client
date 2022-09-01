import { Tabs } from "antd";
import CardsHome from "../components/Card/CardsHome";
import CardsListMore from "../components/Card/CardsListMore";
const { TabPane } = Tabs;

const Home = () => {

  return (
    <Tabs defaultActiveKey="2">
      <TabPane tab="Legal Documentation" key="1">
        <CardsHome />
      </TabPane>
      <TabPane tab="Downloads" key="2">
        <CardsListMore />
      </TabPane>
    </Tabs>
  );
}

export default Home;
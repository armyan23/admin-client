import { useEffect, useState } from "react";
import { Button, List } from "antd";
import CardHome from "./CardHome";
import Styles from "../../styles/Home.module.css";

const CardsListMore = () => {
  const [loading,setLoading] = useState(true);
  const [count, setCount] = useState(4);

  const [myListData, setMyListData] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=${count}`)
      .then((res) => res.json())
      .then((res) => {
        setList(res.products);
        setLoading(false);
        setMyListData(res.products);
      });
  }, []);

  const loadMore =
    !loading ? (
      <div
        style={{
          textAlign: "center",
          marginTop: 12,
          height: 32,
          lineHeight: "32px",
        }}
      >
        <Button onClick={onLoadMore}>loading more</Button>
      </div>
    ) : null;

  function onLoadMore(){
    setLoading(true);
    setCount(prev => prev + 2);

    setList(
      myListData.concat([...new Array(4)].map(() => ({ loading: true, title:"", images: "" }))),
    );

    fetch(`https://dummyjson.com/products?offset=${count}&limit=${4}`)
      .then((res) => res.json())
      .then((res) => {
        const newData = myListData.concat(res.products);
        setList(newData);
        setMyListData(newData);
        setLoading(false);
      });
  };

  return (
      <List
        className={Styles.demoLoadMoreList}
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 3,
          lg: 4,
          xl: 4,
          xxl: 6,
        }}
        loadMore={loadMore}
        dataSource={list}
        renderItem={item => (
          <List.Item>
            <CardHome key={item.id} loading={item.loading} elem={item} />
          </List.Item>
        )}
      />
  );
}

export default CardsListMore;
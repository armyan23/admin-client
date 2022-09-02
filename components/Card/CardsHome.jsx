import { useEffect, useState } from "react";
import CardHome from "./CardHome";
import { Col, Row } from "antd";

const CardsHome = () => {
  const [loading,setLoading] = useState(true);
  const [myCardList, setMyCardList] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=10")
      .then(res => res.json())
      .then(data => {
        setMyCardList(data.products);
      });

    setTimeout(() => setLoading(false), 2000);
  },[])

  return (
    <Row gutter={[16, 16]}>
      {
        myCardList.map((elem, id) => {
          return (
            <Col key={id} xll={4} xl={6} lg={6} md={8} sm={12} xs={24}>
              <CardHome loading={loading} elem={elem} />
            </Col>
          )
        })
      }
    </Row>
  );
}

export default CardsHome;
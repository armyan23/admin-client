import styles from "../../styles/Home.module.css";
import { Button, Card, message } from "antd";
import { useState } from "react";
const { Meta } = Card;

const CardHome = ({loading, elem}) => {
  const [loadingBuy, setLoadingBuy] = useState(false);

  const buyProduct = () => {
    setLoadingBuy(true);
    setTimeout(()=> {
      message.success("Added to cart");
      setLoadingBuy(false);
    },2000);
  }

  return (
        <Card loading={loading} className={styles.cardMain}>
          <div className={styles.cardImage} style={{backgroundImage: `url(${elem.images[0]})`}} />
          <Meta
            title={elem.title}
            description={elem.description}
          />
          <div className={styles.btnBuyProduct}>
            <Button type="primary" loading={loadingBuy} onClick={buyProduct}>
              Add to card
            </Button>
          </div>
        </Card>
  );
}

export default CardHome;
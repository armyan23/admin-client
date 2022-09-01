import {Col, Row,} from "antd";
import Styles from "../styles/Home.module.css";
import FormEdit from "../components/Forms/FormEdit";
import Image from 'next/image';

const UserProfile = () => {

  return (
    <Row gutter={[16, 16]} justify="center">
        <Col xl={19} lg={16} md={15} sm={20} xs={24} className={Styles.userProfileContent}>
          <FormEdit />
        </Col>
        <Col xl={4} lg={8} md={9} sm={15} xs={24}>
          <div className={Styles.userProfileContent} style={{ padding: 0 }}>
            <div className={Styles.userProfileImg}>
              <Image src="https://www.w3schools.com/howto/img_avatar.png"
                     alt="Picture of the author"
                     width={500}
                     height={500}
              />
            </div>
            <div className={Styles.userProfileInfo}>
              <p>Admin</p>
              <p>user.admin@gmail.com</p>
            </div>
          </div>
          <div className={Styles.userProfileContent}>
            User Info
          </div>
        </Col>
    </Row>
  );
}

export default UserProfile;
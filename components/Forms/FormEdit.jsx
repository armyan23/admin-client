import {Button, Col, DatePicker, Divider, Form, Input, message, Row, Select} from "antd";
const { Option } = Select;
import {useState} from "react";

const FormEdit = () => {
  const [form] = Form.useForm();
  const [saveAll, setSaveAll] = useState(false);

  const onFinish = () => {
    setSaveAll(true);
    setTimeout(() => {
      message.success("Your data have been save");
      setSaveAll(false)
    },2000);
  };
  const onFinishFailed = () => {
    message.error('Please enter all field!');
  };

  const layout = {
    labelCol: { sm: 8, md: 8, lg: 6, xl: 7 },
    wrapperCol: { sm: 14, md: 14, lg: 14, xl: 12 },
  };
  const tailFormItemLayout = {
    xs: {
      span: 23,
      offset: 1,
    },
    sm: {
      span: 14,
      offset: 10,
    },
    md: {
      span: 4,
      offset: 8,
    },
    lg: {
      span: 4,
      offset: 7,
    },
    xl: {
      span: 4,
      offset: 20,
    },
  }

  return (
    <Form {...layout} form={form} name="horizontal_login" styeles={{display: "flex"}} onFinish={onFinish} onFinishFailed={onFinishFailed}>
      <Row justify="center">
        <Col xl={12} lg={20} md={24} xs={22}>
           <Divider orientation="left">General Information</Divider>
           <Form.Item
             name="firstName"
             label="First Name"
             rules={[{ required: true, message: "Missing first name" }]}
           >
             <Input placeholder="Select your First Name" />
           </Form.Item>
           <Form.Item
             name="lastName"
             label="Last Name"
             rules={[{ required: true, message: "Missing first name" }]}
           >
             <Input placeholder="Select your Last Name" />
           </Form.Item>
           <Form.Item
             name={["user", "email"]}
             placeholder="select your gender"
             label="Email"
             rules={[{ required: true, type: "email", message: "Your email is not a valid email" }]}
           >
             <Input placeholder="Select your Email" />
           </Form.Item>
           <Form.Item name="date-picker" label="Date Picker" rules={[{required: true, message: "Please select time!" }]}>
             <DatePicker />
           </Form.Item>
           <Form.Item
             name="gender"
             label="Gender"
             rules={[{ required: true, message: "Please select gender!" }]}
           >
               <Select placeholder="select your gender">
                 <Option value="male">Male</Option>
                 <Option value="female">Female</Option>
                 <Option value="other">Other</Option>
               </Select>
             </Form.Item>
             <Form.Item
               name="phone"
               label="Phone Number"
               rules={[{ required: true, message: "Please input your phone number!"}]}
             >
              <Input min={5} />
            </Form.Item>
          </Col>
        <Col xl={12} lg={20} md={24} xs={22}>
          <Divider orientation="left">Address</Divider>
          <Form.Item
            name="address"
            label="Address"
            rules={[{ required: true, message: "Missing Address" }]}
          >
            <Input placeholder="Enter your home address" />
          </Form.Item>
          <Form.Item
            name="homeNumber"
            label="Number"
            rules={[{ required: true, message: "Missing home number" }]}
          >
            <Input placeholder="Enter your home number" />
          </Form.Item>
          <Form.Item
            name="city"
            label="City"
            rules={[{ required: true, message: "Missing city" }]}
          >
            <Input placeholder="Enter your city" />
          </Form.Item>
          <Form.Item
            name="index"
            label="Index"
          >
            <Input placeholder="Enter your index" />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item wrapperCol={tailFormItemLayout}>
            <Button type="primary" htmlType="submit" loading={saveAll}>
              Submit
            </Button>
          </Form.Item>
        </Col>
      </Row>

    </Form>
  );
}

export default FormEdit;
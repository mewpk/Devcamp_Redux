import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import "antd/dist/antd.css";
import {  useDispatch } from "react-redux";
import { insertData } from "../Reducers/profileReducer";

export default function Profile() {
  //get value state
  // const data = useSelector((state) => [state.profile]);
  const dispatch = useDispatch();

  const onFinish = (values) => {
    // console.log(values);
    dispatch(insertData(values));
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  // console.log(data);
  return (
    <div style={{ height: "100vh", border: "3px solid black" }}>
      <div style={{ margin: "30px auto", width: "30%" }}>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Firstname"
            name="Firstname"
            rules={[
              {
                required: true,
                message: "Please input your Firstname!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Lastname"
            name="Lastname"
            rules={[
              {
                required: true,
                message: "Please input your Lastname!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Age"
            name="Age"
            rules={[
              {
                required: true,
                message: "Please input your Age!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

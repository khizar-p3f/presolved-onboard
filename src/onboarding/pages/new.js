import React from 'react';
import { Button, Form, Input, Row, Col } from 'antd';
import Layout, { Content } from 'antd/lib/layout/layout';


const NewPage = () => {

    const onFinish = (values) => {
        console.clear();
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    return (

        <Row type="flex" justify="center" align="middle" style={{ minHeight: '100vh', minWidth: '0' }}>

            <Col span={18} style={{ padding: "50px 10px" }}>
                <Form name="new"
                    size='large'
                    layout='horizontal'
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 14,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your name!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Company Name"
                        name="compName"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Company name!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                type: 'email',
                                required: true,
                                message: 'Please input email',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>


                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 14,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>

            </Col>


        </Row>
    );
}

export default NewPage;




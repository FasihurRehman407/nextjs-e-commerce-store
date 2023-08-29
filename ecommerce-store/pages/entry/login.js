import React from 'react'
import { Row, Col, Form, Button, Input, Card, Typography } from 'antd'
import { GoogleOutlined } from '@ant-design/icons'
import EntryLayout from '../../styles/layouts/entryLayout'

const { Title } = Typography

const Login = () => {
  const onFinish = values => {
    console.log('Success:', values)
  }
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }
  return (
    <>
      <div className='container' style={{ marginBottom: '7.3rem ' }}>
        <Row>
          <Col span={3}></Col>
          <Col span={18}>
            <Card style={{ height: '43.6vh' }}>
              <Title level={2}>Login</Title>
              <Row>
                <Col span={14}>
                  <Form
                    name='basic'
                    layout='vertical'
                    style={{ paddingTop: '2rem', paddingLeft: '3rem' }}
                    labelCol={{
                      span: 8
                    }}
                    wrapperCol={{
                      span: 18
                    }}
                    initialValues={{
                      remember: true
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                  >
                    <Form.Item
                      label='Email'
                      name='email'
                      rules={[
                        {
                          required: true,
                          message: 'Please input your email!'
                        }
                      ]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      style={{ marginBottom: 0 }}
                      label='Password'
                      name='password'
                      rules={[
                        {
                          required: true,
                          message: 'Please input your password!'
                        }
                      ]}
                    >
                      <Input.Password />
                    </Form.Item>
                    <Row style={{ marginBottom: '24px' }}>
                      <Col span={18} style={{ textAlign: 'right' }}>
                        <small
                          style={{
                            textAlign: 'right',
                            textDecoration: 'underline',
                            cursor: 'pointer  '
                          }}
                        >
                          Forgot password?
                        </small>
                      </Col>
                    </Row>
                    <Form.Item>
                      <Button
                        type='primary'
                        style={{ width: '100%' }}
                        htmlType='submit'
                      >
                        Log in
                      </Button>
                    </Form.Item>
                  </Form>
                </Col>
                <Col
                  span={2}
                  style={{
                    borderLeft: '1px solid black',
                    opacity: 0.07
                  }}
                ></Col>
                <Col span={8}>
                  <div style={{ paddingTop: '6rem', paddingRight: '3rem' }}>
                    <span>Want to login much faster?</span>
                    <Button icon={<GoogleOutlined />} className='mt-3 w-75'>
                      Login with Google
                    </Button>
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  )
}

Login.Layout = EntryLayout

export default Login

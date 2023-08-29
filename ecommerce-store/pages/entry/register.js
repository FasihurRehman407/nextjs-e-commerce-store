import React, { useState } from 'react'
import EntryLayout from '../../styles/layouts/entryLayout'
import {
  Row,
  Col,
  Form,
  Button,
  Steps,
  Card,
  Input,
  DatePicker,
  Select,
  Typography
} from 'antd'
const { Step } = Steps
const { Option } = Select
const { Title } = Typography

const Form_one = () => {
  const [form] = Form.useForm()
  const onFinish = values => {
    console.log('Received values of form: ', values)
  }

  return (
    <>
      <Form
        form={form}
        labelCol={{
          span: 8
        }}
        style={{ paddingInline: '1.5rem' }}
        wrapperCol={{
          span: 24
        }}
        layout='vertical'
        name='register'
        onFinish={onFinish}
        initialValues={{
          prefix: '92'
        }}
        scrollToFirstError
      >
        <Row>
          <Col span={12} style={{ paddingRight: '1rem' }}>
            <Form.Item
              name='username'
              label='Username'
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                  whitespace: true
                }
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name='email'
              label='E-mail'
              rules={[
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!'
                },
                {
                  required: true,
                  message: 'Please input your E-mail!'
                }
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Form.Item
              style={{ paddingRight: '1rem' }}
              name='password'
              label='Password'
              rules={[
                {
                  required: true,
                  message: 'Please input your password!'
                }
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name='confirm'
              label='Confirm Password'
              dependencies={['password']}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Please confirm your password!'
                },
                ({ getFieldValue }) => ({
                  validator (_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve()
                    }
                    return Promise.reject(
                      new Error(
                        'The two passwords that you entered do not match!'
                      )
                    )
                  }
                })
              ]}
            >
              <Input.Password />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Form.Item
              style={{ paddingRight: '1rem' }}
              name='phone'
              label='Phone Number'
              rules={[
                {
                  required: true,
                  message: 'Please input your phone number!'
                }
              ]}
            >
              <Input
                addonBefore={<span>+92</span>}
                style={{
                  width: '100%'
                }}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name='dob'
              label='Date of Birth'
              rules={[
                {
                  required: true,
                  message: 'Please select your date of birth!'
                }
              ]}
            >
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Form.Item
              style={{ paddingRight: '1rem' }}
              name='gender'
              label='Gender'
              rules={[
                {
                  required: true,
                  message: 'Please select gender!'
                }
              ]}
            >
              <Select placeholder='Select your gender'>
                <Option value='male'>Male</Option>
                <Option value='female'>Female</Option>
                <Option value='other'>Other</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name='zip'
              label='Zip code'
              rules={[
                {
                  required: true,
                  message: 'Please enter your zip code!'
                }
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  )
}

const Form_two = () => {
  const [form] = Form.useForm()
  const onFinish = values => {
    console.log('Received values of form: ', values)
  }

  return (
    <>
      <Form
        form={form}
        labelCol={{
          span: 8
        }}
        style={{ paddingInline: '1rem' }}
        wrapperCol={{
          span: 24
        }}
        layout='vertical'
        name='register'
        onFinish={onFinish}
        initialValues={{
          prefix: '92'
        }}
        scrollToFirstError
      >
        <Row>
          <Col span={24}>
            <Form.Item
              name='address1'
              label='Address No. 1'
              rules={[
                {
                  required: true,
                  message: 'Please input your Address No. 1'
                }
              ]}
            >
              <Input.TextArea rows={2} />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item
              name='address2'
              label='Address No. 2'
              rules={[
                {
                  required: true,
                  message: 'Please input your Address No. 2'
                }
              ]}
            >
              <Input.TextArea rows={2} />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Form.Item
              style={{ paddingRight: '1rem' }}
              name='country'
              label='Country'
              rules={[
                {
                  required: true,
                  message: 'Please input your Country'
                }
              ]}
            >
              <Select
                showSearch
                placeholder='Select a country'
                optionFilterProp='children'
                filterOption={(input, option) =>
                  option.children.toLowerCase().includes(input.toLowerCase())
                }
              >
                <Option value='Pakistan'>Pakistan</Option>
                <Option value='India'>India</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name='city'
              label='City'
              rules={[
                {
                  required: true,
                  message: 'Please input your City'
                }
              ]}
            >
              <Select
                showSearch
                placeholder='Select a city'
                optionFilterProp='children'
                filterOption={(input, option) =>
                  option.children.toLowerCase().includes(input.toLowerCase())
                }
              >
                <Option value='Lahore'>Lahore</Option>
                <Option value='Karachi'>Karachi</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  )
}

const Register = () => {
  const [current, setCurrent] = useState(0)
  const next = () => {
    setCurrent(current + 1)
  }
  const prev = () => {
    setCurrent(current - 1)
  }
  const steps = [
    {
      title: 'Personal Information',
      content: (
        <div>
          <Form_one />
        </div>
      )
    },
    {
      title: 'Additional Information',
      content: (
        <div>
          <Form_two />
        </div>
      )
    }
  ]

  return (
    <div className='container' style={{ marginBottom: '7.3rem ' }}>
      <Row>
        <Col span={3}></Col>
        <Col span={18}>
          <Card style={{ height: '59vh' }}>
            <Title level={2}>Sign up</Title>
            <div style={{ marginBlock: '2rem' }}>
              <Steps current={current}>
                {steps.map(item => (
                  <Step key={item.title} title={item.title} />
                ))}
              </Steps>
            </div>
            <div style={{ height: '35vh' }}>{steps[current].content}</div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'end',
                marginBlock: '1rem'
              }}
            >
              {current > 0 && (
                <Button danger onClick={prev}>
                  Previous
                </Button>
              )}
              {current === steps.length - 1 && (
                <Button type='primary' style={{ marginLeft: 7 }}>
                  Done
                </Button>
              )}
              {current < steps.length - 1 && (
                <Button type='primary' onClick={() => next()}>
                  Next
                </Button>
              )}
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

Register.Layout = EntryLayout

export default Register

/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router'
import {
  Breadcrumb,
  Tag,
  Statistic,
  Button,
  Descriptions,
  Rate,
  Comment,
  List,
  Tooltip
} from 'antd'
import { MinusOutlined, PlusOutlined, HeartFilled } from '@ant-design/icons'
import Link from 'next/link'

import styles from './../../styles/Product.module.css'

const Slug = () => {
  const router = useRouter()
  const { slug } = router.query

  const data = [
    {
      actions: [<span key='comment-list-reply-to-0'>Reply to</span>],
      author: 'Han Solo',
      avatar: 'https://joeschmoe.io/api/v1/random',
      content: (
        <p>
          We supply a series of design principles, practical patterns and high
          quality design resources (Sketch and Axure), to help people create
          their product prototypes beautifully and efficiently.
        </p>
      ),
      datetime: (
        <Tooltip title='2016-11-22 11:22:33'>
          <span>8 hours ago</span>
        </Tooltip>
      )
    },
    {
      actions: [<span key='comment-list-reply-to-0'>Reply to</span>],
      author: 'Han Solo',
      avatar: 'https://joeschmoe.io/api/v1/random',
      content: (
        <p>
          We supply a series of design principles, practical patterns and high
          quality design resources (Sketch and Axure), to help people create
          their product prototypes beautifully and efficiently.
        </p>
      ),
      datetime: (
        <Tooltip title='2016-11-22 10:22:33'>
          <span>9 hours ago</span>
        </Tooltip>
      )
    }
  ]

  return (
    <>
      <div className='my-5'>
        <div className='d-flex'>
          <div style={{ marginTop: '20%' }} className='ps-4'>
            <small className='fw-bold'>Overview</small>
            <br />
            <small className='text-muted'>Specifications</small>
            <br />
            <small className='text-muted'>Ratings</small> <br />
            <small className='text-muted'>Reviews</small>
          </div>
          <div className=''>
            <img src='/headphones.jpg' alt='' style={{ height: '650px' }} />
          </div>
          <div>
            <Breadcrumb>
              <Breadcrumb.Item>
                <Link href='/'>Home</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>Products</Breadcrumb.Item>
              <Breadcrumb.Item>Mobiles & Accessories</Breadcrumb.Item>
              <Breadcrumb.Item>Headphones</Breadcrumb.Item>
            </Breadcrumb>
            <div className='my-3'>
              <h3>Headphones</h3>
              <div className='w-75'>
                <small>
                  These headphone are so soft on your ears and they are very
                  awesome. They are very nice and have such a sophisticated
                  design. They are hot selling right now in the market. You
                  should try them out!
                </small>
              </div>
              <div className='my-3'>
                <span className='fw-bold'>Category: </span>
                <Tag>Mobiles & Accessories</Tag>
              </div>
            </div>
            <div className='mb-3'>
              <span className='fw-bold'>Colors: </span>
              <span
                className={`${styles.dot} ms-2`}
                style={{ background: 'red' }}
              ></span>
              <span
                className={`${styles.dot} ms-2`}
                style={{ background: 'black' }}
              ></span>
              <span
                className={`${styles.dot} ms-2`}
                style={{ background: 'Pink' }}
              ></span>
              <span
                className={`${styles.dot} ms-2`}
                style={{ background: 'Green' }}
              ></span>
            </div>
            <div className='d-flex'>
              <Statistic
                valueStyle={{ fontSize: '3rem' }}
                title=''
                value={1128}
                prefix={<small className='text-muted'>$</small>}
              />
              <div className='ms-5 mt-4'>
                <Button style={{ borderRight: 'none' }}>
                  <MinusOutlined />
                </Button>
                <span
                  className='px-2'
                  style={{
                    paddingTop: '7px',
                    paddingBottom: '7px',
                    borderTop: '1px solid #d9d9d9',
                    borderBottom: '1px solid #d9d9d9'
                  }}
                >
                  2
                </span>
                <Button style={{ borderLeft: 'none' }}>
                  <PlusOutlined />
                </Button>
              </div>
              <Button className='ms-5 mt-4'>Add to Cart</Button>
              <div className='ms-5 mt-4 fs-6' style={{ color: 'red' }}>
                <HeartFilled />
              </div>
            </div>
            <div
              // style={{ background: 'rgb(245, 245, 245)' }}
              className='my-5 me-4'
            >
              <h3>Specifications</h3>
              <Descriptions layout='vertical' bordered>
                <Descriptions.Item label='Product'>
                  Cloud Database
                </Descriptions.Item>
                <Descriptions.Item label='Billing Mode'>
                  Prepaid
                </Descriptions.Item>
                <Descriptions.Item label='Automatic Renewal'>
                  YES
                </Descriptions.Item>
                <Descriptions.Item label='Order time'>
                  2018-04-24 18:00:00
                </Descriptions.Item>
                <Descriptions.Item label='Usage Time' span={2}>
                  2019-04-24 18:00:00
                </Descriptions.Item>

                <Descriptions.Item label='Negotiated Amount'>
                  $80.00
                </Descriptions.Item>
                <Descriptions.Item label='Discount'>$20.00</Descriptions.Item>
                <Descriptions.Item label='Official Receipts'>
                  $60.00
                </Descriptions.Item>
              </Descriptions>
            </div>
            <div className='my-5'>
              <h3>Ratings</h3>
              <Rate count={5} allowHalf defaultValue={3.5} />
            </div>
            <div className='my-5 me-5'>
              <h3>Reviews</h3>
              <List
                className='comment-list'
                header={`${data.length} reviews`}
                itemLayout='horizontal'
                dataSource={data}
                renderItem={item => {
                  return (
                    <li>
                      {/* <Comment
                        actions={item.actions}
                        author={item.author}
                        avatar={item.avatar}
                        content={item.content}
                        datetime={item.datetime}
                      /> */}
                    </li>
                  )
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Slug

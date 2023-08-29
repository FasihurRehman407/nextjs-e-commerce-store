import React, { useState, useEffect } from 'react'
import { Input, Divider, Drawer, Button, Badge, Cascader } from 'antd'
import Link from 'next/link'
import {
  ShoppingCartOutlined,
  SearchOutlined,
  CloseOutlined,
  MinusOutlined,
  PlusOutlined
} from '@ant-design/icons'
import { useRouter } from 'next/router'

const options = [
  {
    value: 'grocery',
    label: 'Grocery',
    children: [
      {
        value: 'cat',
        label: 'Cat',
        children: [
          {
            value: 'food',
            label: 'Food'
          }
        ]
      },
      {
        value: 'dog',
        label: 'Dog',
        children: [
          {
            value: 'toys',
            label: 'Toys'
          }
        ]
      }
    ]
  },
  {
    value: 'health',
    label: 'Health',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men'
          }
        ]
      }
    ]
  },
  {
    value: 'fashion',
    label: 'Fashion',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men'
          }
        ]
      }
    ]
  }
]

export default function Navbar () {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const displayRender = labels => labels[labels.length - 1]

  const [productCount, setProductCount] = useState(0)

  const increaseProduct = () => {
    if (productCount >= 0) setProductCount(productCount + 1)
  }
  const decreaseProduct = () => {
    if (productCount > 0) setProductCount(productCount - 1)
  }

  const showDrawer = () => {
    setOpen(true)
  }

  const onClose = () => {
    setOpen(false)
  }

  const onChangeCategory = value => {
    console.log(value)
  }

  useEffect(() => {
    document.addEventListener('scroll', () => {
      let nav = document.querySelector('.navbar_with_search')
      if (window.scrollY > 150) {
        nav?.classList.add('scrolled')
        nav?.classList.add('shadow')
      } else {
        nav?.classList.remove('scrolled')
        nav?.classList.remove('shadow')
      }
    })
    return () => {
      document.removeEventListener('scroll', () => {
        let nav = document.querySelector('.navbar_with_search')
        if (window.scrollY > 150) {
          nav?.classList.add('scrolled')
        } else {
          nav?.classList.remove('scrolled')
        }
      })
    }
  }, [])

  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light bg-light py-4 px-3'>
        <div className='container-fluid'>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarTogglerDemo03'
            aria-controls='navbarTogglerDemo03'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='mx-auto'>
            <a className='navbar-brand fw-bold fs-2' href='#'>
              Fasih Store
              <ShoppingCartOutlined spin={true} />
            </a>
          </div>
        </div>
      </nav>
      <nav className='navbar navbar-expand-lg navbar-light pt-2'>
        <div className='mx-auto'>
          <div className='collapse navbar-collapse' id='navbarTogglerDemo03'>
            <ul className='navbar-nav mb-lg-0'>
              <li className='nav-item'>
                <Link href='/'>
                  <a
                    className={`nav-link ${
                      router.pathname === '/' ? 'active' : ''
                    }`}
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li className='nav-item ms-3'>
                <Cascader
                  style={{ opacity: 1 }}
                  dropdownMenuColumnStyle={{
                    width: '20rem'
                  }}
                  showArrow={false}
                  bordered={false}
                  placeholder='Categories'
                  options={options}
                  expandTrigger='hover'
                  displayRender={displayRender}
                  onChange={onChangeCategory}
                  placement='bottomRight'
                />
              </li>
              <li className='nav-item mx-3'>
                <a className='nav-link' href='#'>
                  Brands
                </a>
              </li>
              <li className='nav-item me-3'>
                <a className='nav-link' href='#'>
                  About
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className='w-75 mx-auto py-2'>
        <Divider style={{ marginTop: 0, marginBottom: 0 }} />
      </div>
      <nav className='navbar navbar-expand-lg sticky-top navbar-light mb-4 navbar_with_search'>
        <div className='container-fluid'>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarTogglerDemo03'
            aria-controls='navbarTogglerDemo03'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarTogglerDemo03'>
            <ul className='navbar-nav mx-auto mb-lg-0 py-3'>
              <li className='' style={{ marginRight: '20rem' }}>
                <Button onClick={showDrawer} style={{ paddingBottom: '3rem' }}>
                  <span>Find your Cart here </span>
                  <span className='fs-4'>
                    &nbsp;
                    <ShoppingCartOutlined spin />
                  </span>
                </Button>
              </li>
              <li className='nav_search'>
                <Input
                  suffix={<SearchOutlined style={{ fontSize: '1.2rem' }} />}
                  placeholder='Find your item right now...'
                  allowClear
                  style={{
                    width: '50rem',
                    borderRadius: '2rem'
                  }}
                />
              </li>
              <li className='pt-2' style={{ marginLeft: '20rem' }}>
                <Link href='/entry/login'>
                  <Button>Create your account now</Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Drawer
        closeIcon={
          <>
            <CloseOutlined onClick={onClose} />
          </>
        }
        title={
          <h4
            className='pt-3 fw-bold'
            style={{ borderBottom: '1px solid rgb(150,150,150)' }}
          >
            Your Shopping Cart
          </h4>
        }
        placement='left'
        closable={true}
        onClose={onClose}
        open={open}
        style={{ zIndex: 9999 }}
        extra={<Badge count={4}></Badge>}
      >
        <div className='order-md-last' style={{ marginBottom: 60 }}>
          <ul className='list-group mb-3'>
            <Badge count={productCount}>
              <li className='list-group-item d-flex justify-content-between'>
                <div>
                  <h6 className='my-0'>Product name</h6>
                  <small className='text-muted'>Brief description</small>
                </div>
                <div>
                  <p className='ps-5 pb-3 pt-2 mb-0'>$12</p>

                  <Button>
                    <MinusOutlined onClick={decreaseProduct} />
                  </Button>
                  <Button>
                    <PlusOutlined onClick={increaseProduct} />
                  </Button>
                </div>
              </li>
            </Badge>
          </ul>
          <Button
            style={{
              marginTop: '150%',
              width: '19%',
              position: 'fixed',
              bottom: 65,
              left: 6,
              color: 'black',
              height: '3rem',
              background: 'red',
              borderRadius: 8
            }}
            className='fw-bold'
          >
            Clear your Cart
          </Button>
          <Button
            style={{
              marginTop: '150%',
              width: '19%',
              position: 'fixed',
              bottom: 10,
              left: 6,
              color: 'white',
              height: '3rem',
              background: 'black',
              borderRadius: 8
            }}
            className='fw-bold'
          >
            Go to Checkout
          </Button>
        </div>
      </Drawer>
    </>
  )
}

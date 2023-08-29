/* eslint-disable @next/next/no-img-element */
import { Carousel, BackTop, Button } from 'antd'
import { ArrowUpOutlined } from '@ant-design/icons'
import { useSelector, useDispatch } from 'react-redux'
import { setCartId, setCartData } from './../redux/cartSlice'
import Prodcardver from '../components/Prodcardver'

import Productcard from '../components/Productcard'
const contentStyle = {
  height: '615px',
  color: '#fff',
  background: 'rgb(250,250,250)'
}
export default function Home () {
  const dispatch = useDispatch()
  const { cartData } = useSelector(state => state.cart)
  const addToCart = product => {
    dispatch(setCartData(product))
  }
  return (
    <>
      <BackTop>
        <ArrowUpOutlined />
      </BackTop>
      <div className='pb-4'>
        <Carousel autoplay>
          <div>
            <div style={contentStyle}>
              <img
                className='mx-auto'
                src='https://images.unsplash.com/photo-1665764884116-11bf71512155?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80'
                style={{ height: '615px' }}
                alt=''
              />
            </div>
          </div>
          <div>
            <div style={contentStyle}>
              <img
                className='mx-auto'
                src='https://images.unsplash.com/photo-1665761125867-2847a4e2600e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
                alt='not found'
                style={{ height: '615px' }}
              />
            </div>
          </div>
          <div>
            <div style={contentStyle}>
              <img
                className='mx-auto'
                src='https://images.unsplash.com/photo-1665760101109-33a93bb2c0fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
                alt=''
                style={{ height: '615px' }}
              />
            </div>
          </div>
        </Carousel>
        <div className='my-5 text-center'>
          <h2>Top Picks for you</h2>
          <small>
            These are the top trending and hot selling items we have selected
            only for you
          </small>
        </div>
        <div>
          <Productcard />
        </div>
        <div>
          <Productcard />
        </div>
        <div>
          <Productcard />
        </div>
        <div className='my-5 text-center'>
          <h2>Explore more</h2>
          <small>
            These are the top trending and hot selling items we have selected
            only for you
          </small>
        </div>
        <div className='mx-5'>
          <div className='row'>
            <div className='col-3'>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Prodcardver />
              </div>
            </div>
            <div className='col-3'>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Prodcardver />
              </div>
            </div>
            <div className='col-3'>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Prodcardver />
              </div>
            </div>
            <div className='col-3'>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Prodcardver />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

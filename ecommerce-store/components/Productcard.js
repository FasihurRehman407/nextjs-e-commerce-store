/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'

export default function Productcard () {
  return (
    <>
      <div
        style={{ marginLeft: '6rem', marginRight: '6rem', cursor: 'pointer' }}
      >
        <div className='card card-body my-4'>
          <div className='d-flex justify-content-between'>
            <div className='me-2 mb-3 mb-lg-0'>
              <img
                src='https://i.imgur.com/5Aqgz7o.jpg'
                width='150'
                height='150'
                alt=''
              />
            </div>
            <div>
              <h6 className='fw-bold'>
                <a>Apple iPhone XR (Red, 128 GB)</a>
              </h6>

              <ul className='list-inline list-inline-dotted mb-3 mb-lg-2'>
                <li className='list-inline-item'>
                  <a className='text-muted' data-abc='true'>
                    Phones
                  </a>
                </li>
                <li className='list-inline-item'>
                  <a className='text-muted' data-abc='true'>
                    Mobiles
                  </a>
                </li>
              </ul>

              <p className='mb-3'>
                128 GB ROM | 15.49 cm (6.1 inch) Display 12MP Rear Camera | 7MP
                Front Camera A12 Bionic Chip Processor | Gorilla Glass with high
                quality display{' '}
              </p>

              <ul className='list-inline list-inline-dotted mb-0'>
                <li className='list-inline-item'>
                  All items from Mobile point
                </li>
                <li className='list-inline-item'>Add to wishlist</li>
              </ul>
            </div>

            <div className='mt-3 mt-lg-0 ml-lg-3 text-end'>
              <h3 className='mb-0 font-weight-semibold'>$459.99</h3>
              <div className='text-muted'>1985 reviews</div>
              <Link href='/products/123'>
                <button
                  type='button'
                  className='btn btn-warning mt-4 w-100 text-white'
                >
                  Details
                </button>
              </Link>
              <br />
              <button
                type='button'
                className='btn w-100 btn-warning mt-4 text-white'
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

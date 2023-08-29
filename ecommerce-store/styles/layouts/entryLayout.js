import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const EntryLayout = ({ children }) => {
  const router = useRouter()
  return (
    <>
      <div className='container' style={{ marginBottom: '7.3rem ' }}>
        <div className='d-flex justify-content-between mb-4 mt-2'>
          <h4>Welcome to Fasih Store</h4>

          {router.pathname.includes('login') ? (
            <Link href='/entry/register'>
              <small style={{ textDecoration: 'underline', cursor: 'pointer' }}>
                No account? Register now!
              </small>
            </Link>
          ) : (
            <Link href='/entry/login'>
              <small style={{ textDecoration: 'underline', cursor: 'pointer' }}>
                Already have an account? Login now!
              </small>
            </Link>
          )}
        </div>
        {children}
      </div>
    </>
  )
}

export default EntryLayout

import React from 'react';
import { Rate } from 'antd';
import { FrownOutlined , MehOutlined , SmileOutlined } from '@ant-design/icons';


const customIcons = {
    1: <FrownOutlined/>,
    2: <FrownOutlined />,
    3: <MehOutlined />,
    4: <SmileOutlined />,
    5: <SmileOutlined />,
  };

export default function Footer() {
  return (<>
<footer className="footer mt-auto pt-4 pb-2 bg-dark" style={{color:'white'}}>
    <div className='d-flex justify-content-between px-5'>
        <div className=''>Enjoyed Shopping?</div>
        <div className=''><span className='fw-bold'>Kindly rate your experience: </span><Rate style={{color:'black'}} defaultValue={0} character={({ index }) => customIcons[index + 1]} /></div>
    </div>
</footer>
</>
)
}

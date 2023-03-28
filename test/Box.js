import React from 'react'

import './box.css'

const Box = () => {
  return (
    <div className='box'>
      <div className='left-box'>
          <div className='left-box-top'>Top</div>
          <div className='left-box-bottom'>Bottom</div>
      </div>
      <div className='right-box'>Right</div>
    </div>
  )
}

export default Box
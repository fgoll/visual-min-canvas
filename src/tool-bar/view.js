import React from 'react'
import {connect} from 'react-redux'
import './style.scss'

const ToolBar = () => {
  return (
    <div className='toolbar'>
      <div className='tool-col'>
        <div className='toolbar__item active'>
          <span>Line</span>
        </div>
        <div className='toolbar__item'>
          <span>Rect</span>
        </div>
      </div>
      <div className='priority-col'>

      </div>
    </div>
  )
}

export default connect(null, null)(ToolBar)
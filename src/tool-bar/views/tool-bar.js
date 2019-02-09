import React from 'react'
import {connect} from 'react-redux'
import Link from './link'
import { graphs } from '../../constants'
import './style.scss'


const ToolBar = ({currentGraphs}) => {
  return (
    <div className='toolbar'>
      <div className='tool'>
        {graphs.map(item => {
          return <Link action={item} key={item}>{item}</Link>
        })}
      </div>
      <div className='priority'>
        {currentGraphs.map(item => {
          return (
            <div className='priority__item' key={item.id}>
              {item.action}
            </div>
          )
        })}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    currentGraphs: state.canvas
  }
}

export default connect(mapStateToProps)(ToolBar)
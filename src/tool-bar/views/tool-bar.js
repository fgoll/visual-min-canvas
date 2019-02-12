import React from 'react'
import {connect} from 'react-redux'
import ToolbarItem from './toolbar-item'
import PriorityItem from './priority-item'
import { graphs } from '../../constants'
import './style.scss'


const ToolBar = ({currentGraphs}) => {
  return (
    <div className='toolbar'>
      <div className='tool'>
        {graphs.map(item => {
          return <ToolbarItem action={item} key={item}>{item}</ToolbarItem>
        })}
      </div>
      <div className='priority'>
        {currentGraphs.map(item => {
          return (
            <PriorityItem key={item.id} id={item.id} action={item.action}>{item.action}</PriorityItem>
            // <div className='priority__item active' key={item.id}>
            //   {item.action}
            // </div>
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
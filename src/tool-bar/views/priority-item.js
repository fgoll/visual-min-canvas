import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { removeAction, setCurrent } from '../actions';

const Link = ({active, children, onSetCurrent}) => {
  if (active) {
    return (
      <div className='priority__item active'>
        {children}
      </div>
    )
  }else {
    return (
      <div className='priority__item' onClick={onSetCurrent}>
        {children}
      </div>
    )
  }
}

Link.propTypes = {
  id: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
  onSetCurrent: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => {
  return {
    active: state.tool.current === ownProps.id
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSetCurrent: () => {
    dispatch(setCurrent(ownProps.id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Link)
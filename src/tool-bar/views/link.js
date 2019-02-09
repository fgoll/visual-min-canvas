import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setAction, removeAction } from '../actions';

const Link = ({active, children, onSetAction, onRemoveAction}) => {
  if (active) {
    return (
      <div className='toolbar__item active' onClick={onRemoveAction}>
        {children}
      </div>
    )
  }else {
    return (
      <div className='toolbar__item' onClick={onSetAction}>
        {children}
      </div>
    )
  }
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onSetAction: PropTypes.func.isRequired,
  onRemoveAction: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => {
  return {
    active: state.action === ownProps.action
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSetAction: () => {
    dispatch(setAction(ownProps.action))
  },

  onRemoveAction: () => {
    dispatch(removeAction())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Link)
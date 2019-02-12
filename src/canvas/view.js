import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { GraphTypes } from '../constants';
import { addGraph } from './actions';
import { removeAction } from '../tool-bar/actions';

function line({ctx, x, y, endX, endY}) {
  ctx.beginPath()
  ctx.moveTo(x, y)
  ctx.lineTo(endX, endY)
  ctx.closePath()
  ctx.stroke()
}

function rect({ctx, x, y, width, height}) {
  ctx.strokeRect(x, y, width, height);
}

class Canvas extends React.Component {

  constructor() {
    super(...arguments)

    this.refCanvas = this.refCanvas.bind(this)
    this.handleMouseDown = this.handleMouseDown.bind(this)
    this.handleMouseMove = this.handleMouseMove.bind(this)
    this.handleMouseUp = this.handleMouseUp.bind(this)
  }

  componentDidMount() {
    this.updateCanvas()
  }

  updateCanvas() {
    this.ctx = this.canvas.getContext('2d')

    this.canvas.onmousedown = this.handleMouseDown
    this.canvas.onmousemove = this.handleMouseMove
    this.canvas.onmouseup = this.handleMouseUp
  }

  handleMouseDown(e) {
    if (this.props.action) {
      this.isDown = true
    }
    const {offsetX, offsetY} = e

    this.beginX = offsetX
    this.beginY = offsetY
  }

  handleMouseMove(e) {
    let ctx = this.ctx

    const {offsetX, offsetY} = e
    if (!this.isDown) {
      
      console.log(ctx.isPointInStroke(offsetX, offsetY))
      
      return 
    }

    this.reDraw(ctx)

    switch (this.props.action) {
      case GraphTypes.LINE:
        this.endX = offsetX
        this.endY = offsetY
        line({ctx, x: this.beginX, y: this.beginY, endX: this.endX, endY: this.endY})
        break
      case GraphTypes.RECT:
        const width = offsetX - this.beginX
        const height = offsetY - this.beginY
        this.width = width
        this.height = height
        rect({ctx, x: this.beginX, y: this.beginY, width , height})
        break
      case GraphTypes.CIRCLE:
      default:
        break
    }
  }

  handleMouseUp(e) {
    if (!this.isDown) return 
    this.isDown = false

    let attr = {x: this.beginX, y: this.beginY} 

    switch (this.props.action) {
      case GraphTypes.LINE:
        attr.endX = this.endX
        attr.endY = this.endY
        break
      case GraphTypes.RECT:
        attr.width = this.width
        attr.height = this.height
        break
      default:
        break
    }

    this.props.addGraph(this.props.action, attr)
    this.props.removeAction()
  }

  reDraw(ctx) {
    ctx.clearRect(0, 0, 375, 667)

    for (let graph of this.props.graphs) {
      switch (graph.action) {
        case GraphTypes.LINE:
          line({ctx, ...graph.attr})
          break
        case GraphTypes.RECT:
          rect({ctx, ...graph.attr})
          break
        case GraphTypes.CIRCLE:
        default:
          break
      }
    }
  }

  refCanvas(node) {
    this.canvas = node
  }

  render() {
    return (
      <div className='canvas' style={{'paddingTop': '50px', 'flex': 1, 'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center'}}>
        <canvas ref={this.refCanvas} width={375} height={667} style={{'border': '1px solid #efefef'}}></canvas>
      </div>
    )
  }
}

Canvas.propTypes = {
  graphs: PropTypes.array.isRequired,
  addGraph: PropTypes.func.isRequired,
  removeAction: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    action: state.tool.action,
    graphs: state.canvas
  }
}

const mapDispatchToProps = (dispatch) => ({
  addGraph: (action, attr) => {
    dispatch(addGraph(action, attr))
  },

  removeAction: () => {
    dispatch(removeAction())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Canvas)
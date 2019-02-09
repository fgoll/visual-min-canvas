import React from 'react'
import {connect} from 'react-redux'

function rect({ctx, x, y, width, height}) {

  ctx.fillRect(x, y, width, height);
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
    const {offsetX, offsetY} = e

    this.beginX = offsetX
    this.beginY = offsetY
  }

  handleMouseMove(e) {
    const {offsetX, offsetY} = e

    let ctx = this.ctx
    ctx.clearRect(0, 0, 375, 667)
    ctx.moveTo(this.beginX, this.beginY)
    ctx.lineTo(offsetX, offsetY)
    ctx.stroke()
  }

  handleMouseUp(e) {

  }

  refCanvas(node) {
    this.canvas = node
  }

  render() {
    return (
      <div className='canvas' style={{'paddingTop': '50px'}}>
        <canvas ref={this.refCanvas} width={375} height={667} style={{'border': '1px solid #efefef'}}></canvas>
      </div>
    )
  }
}

export default connect()(Canvas)
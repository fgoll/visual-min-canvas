import React from 'react'
import { Form, Row, Input, Col, Popover, Button, InputNumber } from 'antd'
import { SketchPicker } from 'react-color'
import reactCSS from 'reactcss'

const ColorPicker = () => {
  return (
    <div>
      <SketchPicker/>
    </div>
  )
}

class LineAttribute extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      color: {
        r: '241',
        g: '112',
        b: '19',
        a: '1',
      }
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(color) {
    
    this.setState({
      color: color.rgb
    })
  }

  render() {
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    }
    
    const styles = reactCSS({
      'default': {
        color: {
          width: '36px',
          height: '14px',
          borderRadius: '2px',
          background: `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`,
        },
        swatch: {
          padding: '5px',
          background: '#fff',
          borderRadius: '1px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'inline-block',
          cursor: 'pointer',
          marginTop: '6px'
        },
        popover: {
          position: 'absolute',
          zIndex: '2',
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
        },
      },
    });


    return (
      <Form>
        <Form.Item 
          {...formItemLayout}
          label='From'>
          <Row gutter={8}>
            <Col span={12}>
              <InputNumber placeholder='x1'></InputNumber>
            </Col>
            <Col span={12}>
              <InputNumber placeholder='y1'></InputNumber>
            </Col>
          </Row>
        </Form.Item>

        <Form.Item 
          {...formItemLayout}
          label='To'>
          <Row gutter={8}>
            <Col span={12}>
              <InputNumber placeholder='x2'></InputNumber>
            </Col>
            <Col span={12}>
              <InputNumber placeholder='y2'></InputNumber>
            </Col>
          </Row>
        </Form.Item>
        <h3 style={{ marginBottom: 16 }}>Styles</h3>
        <Form.Item 
          {...formItemLayout}
          label='Color'>
          <Popover placement="bottom" content={<SketchPicker color={ this.state.color } onChange={ this.handleChange }/>} trigger="click">
            <div style={ styles.swatch } onClick={ this.handleClick }>
              <div style={ styles.color } />
            </div>
          </Popover>
        </Form.Item>

        <Form.Item 
          {...formItemLayout}
          label='Line width'>
          <InputNumber value={1}></InputNumber>
        </Form.Item>
      </Form>
    )
  }
}

export default LineAttribute
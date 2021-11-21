import React, { Component } from 'react'
import ColorPicking from '../../components/ColorPicker/ColorPicking'
export default class index extends Component {
constructor(props) {
    super(props);
    this.state={
        display: '',
        click: false
    }
}
onMouseEnter = (color) =>{
    this.setState({display: color})
}
onMouseLeave = () =>{
    this.setState({
        display: this.state.click
    })
}
onClickMouse = (color) => {
    this.setState({
        display: color,
        click: color
    })
}
    render() {
        return (
            <div>
                <ColorPicking
                    {...this.state}
                    onMouseEnter={this.onMouseEnter}
                    onMouseLeave={this.onMouseLeave}
                    onClickMouse={this.onClickMouse}
                />
            </div>
        )
    }
}

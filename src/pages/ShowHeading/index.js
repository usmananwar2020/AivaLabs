import React, { Component } from 'react'
import HeadingSection from '../../components/ShowHeading/HeadingSection'

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state={
            display: 'paragraph1',
            click: false
        }
    }
    onMouseEnter = () =>{
        this.setState({display: this.state.click ? 'paragraph3' : 'paragraph2'})
    }
    onMouseLeave = () =>{
        this.setState({
            display: this.state.click ? 'paragraph3' : 'paragraph1'
        })
    }
    onClickMouse = () => {
        this.setState({
            display: 'paragraph3',
            click: true
        })
    }
    render() {
        return (
            <div>
                <HeadingSection
                {...this.state}
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
                onClickMouse={this.onClickMouse}
                />
            </div>
        )
    }
}

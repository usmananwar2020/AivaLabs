import { Button } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import React, { Component } from 'react'
import './SpinningWheel.css'
import wheel from './wheel.png'
export default class SpinWheel extends Component {
    render() {
        return (
            <div className='div'>
                <img  className={this.props.name} src={wheel}/>
                <Button
                onClick={this.props.startRotation}
                >
                    <ArrowBackIcon/>
                    spin
                </Button>
            </div>
        )
    }
}

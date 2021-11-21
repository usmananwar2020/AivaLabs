import React, { Component } from 'react'
import SpinWheel from '../../components/SpinningWheel/SpinWheel'

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:"circle",
            startToggle: true

        }
    }
    startRotation = () => {
        this.setState({
            name: this.state.startToggle ? 'circle start-rotate': 'circle start-rotate stop-rotate'
        },()=>{
            this.setState({startToggle: !this.state.startToggle}
                ,()=>{
                    this.showAlert() 
                }
            )
        })
    }
   
    showAlert = () => {
        setTimeout(
            ()=>{
                if(this.state.startToggle){
                    alert('You Win!!!')
                }
            }
            ,
            100
        );
    }

    render() {
        return (
            <div>
                <SpinWheel
                {...this.state}
                startRotation={this.startRotation}
                />
            </div>
        )
    }
}

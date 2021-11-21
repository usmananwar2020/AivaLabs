import React, { Component } from 'react'
import Draggable from "react-draggable";
import './Draggable.css';

export default class Dragable extends Component {
    constructor(props) {
        super(props);
        this.state={
            zIndex:0,
            zIndex1:0,
            zIndex2:0,
            zIndex3:0,
        }
    }
    onHandleClick = (name) =>{
        if(name === 'one'){
            this.setState({
                zIndex1: this.state.zIndex, 
                zIndex: this.state.zIndex + 1
            })
        }else if(name === 'two'){
            this.setState({
                zIndex2: this.state.zIndex, 
                zIndex: this.state.zIndex + 1
            })
        }else if(name === 'three'){
            this.setState({
                zIndex3: this.state.zIndex, 
                zIndex: this.state.zIndex + 1
            })
        }
    }
    render() {
        return (
        <>
            <h1>Dragg and Drop the object</h1>
            <h2>Set priority while clicking...</h2>
            <div  style={{display: 'flex', justifyContent: 'center'}}>
                <Draggable>
                    <div className={`object1`} style={{zIndex:this.state.zIndex1}} onClick ={()=>this.onHandleClick('one')}>
                        <h2 className={'center'}> Square </h2>
                    </div>
                </Draggable>
                <Draggable>
                    <div className={`object2`} style={{zIndex:this.state.zIndex2}} onClick={()=>this.onHandleClick('two')}>
                        <h2 className={'center'}> Circle </h2>
                    </div>
                </Draggable>
                <Draggable>
                    <div className={`object3`} style={{zIndex:this.state.zIndex3}} onClick={()=>this.onHandleClick('three')}>
                        <h2 className={'center'}> Rectangle </h2>
                    </div>
                </Draggable>
            </div>
        </>
        )
    }
}

import React, { Component } from 'react'
import './HeadingSection.css'
export default class HeadingSection extends Component {
    render() {
        return (
            <div style={{backgroundColor: 'yellow', height: '100vh'}}>
                <div
                    onMouseEnter={()=>this.props.onMouseEnter()} 
                    onMouseLeave={()=>this.props.onMouseLeave()}
                    onClick={()=>this.props.onClickMouse()}
                >
                    <h1 className="heading" >heading section</h1>
                </div>
                <div className={this.props.display}>
                    <p>
                            this is paragraph 1 <br/>
                            this is paragraph 2 <br/>
                            this is paragraph 3<br/>
                    </p>
                </div>
            </div>
        )
    }
}

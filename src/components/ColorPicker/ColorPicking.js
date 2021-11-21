import React, { Component } from 'react'
import './ColorPicking.css'
export default class ColorPinking extends Component {
    render() {
        return (
            <div className={'color'}>
                <div className={'main'}>
                    <div className={'colorPool1'} 
                        onMouseEnter={()=>this.props.onMouseEnter('colorPool1')} 
                        onMouseLeave={()=>this.props.onMouseLeave()}
                        onClick={()=>this.props.onClickMouse('colorPool1')}
                    ></div>
                    <div className={'colorPool2'} 
                        onMouseEnter={()=>this.props.onMouseEnter('colorPool2')} 
                        onMouseLeave={()=>this.props.onMouseLeave()}
                        onClick={()=>this.props.onClickMouse('colorPool2')}
                    ></div>
                    <div className={'colorPool3'} 
                        onMouseEnter={()=>this.props.onMouseEnter('colorPool3')} 
                        onMouseLeave={()=>this.props.onMouseLeave()}
                        onClick={()=>this.props.onClickMouse('colorPool3')}
                    ></div>
                    <div className={'colorPool4'}
                        onMouseEnter={()=>this.props.onMouseEnter('colorPool4')} 
                        onMouseLeave={()=>this.props.onMouseLeave()}
                        onClick={()=>this.props.onClickMouse('colorPool4')}
                    ></div>
                    <div className={'colorPool5'}
                        onMouseEnter={()=>this.props.onMouseEnter('colorPool5')} 
                        onMouseLeave={()=>this.props.onMouseLeave()}
                        onClick={()=>this.props.onClickMouse('colorPool5')}
                    ></div>
                </div>
                <div>
                    <div className={this.props.display || 'colorPool'} style={{height:300, width: 300}}></div>
                </div>
            </div>
        )
    }
}

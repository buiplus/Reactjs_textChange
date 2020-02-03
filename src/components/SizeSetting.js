import React, { Component } from 'react'

export default class SizeSetting extends Component {
    handleTangGiam=(type)=>{
        this.props.onChangeSize(type);
    }
    render() {
        return (
            <div className="panel panel-warning mb-3">
                <div className="panel-heading">
                    <h3 className="panel-title">Size : {this.props.fontSize}px</h3>
                </div>
                <div className="panel-body">
                    <button type="button" className="btn btn-success mr-3" onClick={()=>{this.handleTangGiam("giam")}}>Giảm</button>&nbsp;
                    <button type="button" className="btn btn-success " onClick={()=>{this.handleTangGiam("tang")}}>Tăng</button>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'

export default class Result extends Component {

    //viết class thay đổi màu chữ, size chữ
    setStype = ()=>{
       return {
           color : this.props.color,
           borderColor: this.props.color,
           fontSize : this.props.fontSize
       }
    }
    render() {
        return (
        
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <p>Color : {this.props.color} - Fontsize : {this.props.fontSize}px</p>
            <div id="content" style={this.setStype()}>
              Nội dung setting
            </div>
          </div>
           
        )
    }
}

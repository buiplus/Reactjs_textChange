import React,{Component} from 'react';
import "./App.css";
import ColorPicker from "./components/ColorPicker";
import SizeSetting from "./components/SizeSetting";
import Reset from "./components/Reset";
import Result from "./components/Result";

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      fontSize : 20,
      color : 'red',
    }
  }

  onSetColor=(color)=>{
    this.setState({
      color : color, 
    })
  }

  onChangeSize = (type)=>{
    console.log(type);
    switch (type) {
      case "tang":
       this.state.fontSize +=2;
       this.setState(this.state);
        
        break;
      case "giam":
        this.state.fontSize--;
        this.setState(this.state);
      default:
        break;
    }

    
  }

  onReset = (value)=>{
    console.log(value);
    if(value === true){
      this.setState({
        fontSize : 20,
        color : 'red',
      })
    }
    
  }
  render() {
    return (
      <div className='container mt-50'>
      <div className='row'>
        <ColorPicker color={this.state.color} onReceiveColor={this.onSetColor}/>

        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <SizeSetting fontSize={this.state.fontSize} onChangeSize={this.onChangeSize}/>
          <Reset onReset = {this.onReset}/>
        </div>
        <Result color={this.state.color} fontSize={this.state.fontSize}/>
      </div>
    </div>
    )
  }
}


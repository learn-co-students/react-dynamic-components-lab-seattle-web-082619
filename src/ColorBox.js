import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    if(this.props.opacity.value > 2){
      return(
        <div>
          ColorBox = {ColorBox};
        </div>
      ) else if(this.props.opacity.value < .2){
       return null;
      } else {
        return null;
      }
    }
  }
}

import React, { Component, PropTypes } from 'react';

export default class Head extends Component {
    getHeaderClass(){
  		return {
  			background:'#00bcd4',
  			width:'100%',
  			fontSize:25,
  			textAlign:'center',
            fontWeight:400,
  			color:'#fff',
  			height:50
  		}
  	}
  
    render(){
	    return(
	      <div style={this.getHeaderClass()}>
	        视频管理系统
	      </div>
	    )
	  }
}
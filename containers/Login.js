import React, { Component, PropTypes } from 'react';
const TextField = require('material-ui/lib/text-field');
const FlatButton = require('material-ui/lib/flat-button');

export default class Login extends Component {

	getStyle(){
		let w = (function(){
			return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		})()

		let h = (function(){
			return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
		})()

		return{
			width:w-1,
			height:h-1,
			left:0,
			top:0,
			background:'#fff',
			zIndex:999,
			marginLeft:-120,
			position:'absolute'
		}
	}

	getInputClass(){
		return{
			width:400,
			height:400,
			left:'50%',
			marginLeft:-200,
			top:'50%',
			textAlign:'center',
			
			position:'absolute',
			marginTop:-200
		}
	}

	render(){
		return(
			<div style={this.getStyle()}>
				<FlatButton label="Primary" primary={true} />
			</div>
		)
	}
}
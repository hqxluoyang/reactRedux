import React, { Component, PropTypes } from 'react';

//import StyleCss from '../style.css'
var Table = require('../css/table.css')
export default class TableBody extends Component {



	render(){
		const {header , datas , even , odd} = this.props.items
		var i = 0;
		let ullist = datas.map(d=>{
			var bg = '';
			var list = header.map(y=>
				<li style={{width:y['width']}}>{d[y['id']]}</li>
			)
			i%2 ? bg=odd : bg = even ;
			console.log("argument:" , arguments , i++)
			
			
			return (
				<ul className={Table.tableBody} style={{background:bg}}>{list}</ul>
			)
		})
		

		console.log("clickFunction:" , this.props.tableClick)
		return (
			<div onClick={this.props.tableClick}  style={{height:400}}>
				{ullist}
			</div>
		)
	}
}


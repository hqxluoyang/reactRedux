import React, { Component, PropTypes } from 'react';

import Table from '../css/table.css'

export default class TableHead extends Component {
	render(){
		const {header} = this.props.items ;
		let headList = header.map(I=>
			<li style={{width:I['width'] , display:'inlineBlock'}}>{I['name']}</li>
		)
		return (
			<div>
				<ul className={Table.tableHead}>
					{headList}
				</ul>
			</div>
		)
	}
}


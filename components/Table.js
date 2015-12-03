import React, { Component, PropTypes } from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';

export default class Table extends Component {
	
    getTableStyle(){
    	return{
    		width:'100%',
    		height:'100%'
    	}
    }

	render(){
	    const {items , onclickTable} = this.props ;

	    console.log("table end this.props:" , onclickTable)
		return(
			<div>
				<TableHead items = {items} />
				<TableBody items = {items} 
				tableClick ={onclickTable}/>
			</div>
		)
		
	}
}


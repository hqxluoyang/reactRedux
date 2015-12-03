import React, { Component, PropTypes } from 'react';
import Table from '../components/Table'

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import * as AddL from '../actions/Applist'
export default class Applist extends Component {
	


	constructor(props){
		super(props)
		console.log("sss:" , props)
	}

	render(){
		var items = {
			header:[{
				name:"序号",
				id:"code",
				width:'10%'
			},{
				name:"图标",
				id:'pic',
				width:'10%'
			},{
				name:"名称",
				id:'name',
				width:'10%'
			},{
				name:"下载次数",
				id:"count",
				width:'10%'
			},{
				name:"分类",
				id:'type',
				width:'10%'
			},{
				name:"大小",
				id:'size',
				width:'5%'
			},{
				name:"时长",
				id:'time',
				width:'10%'
			},{
				name:"显示时间",
				id:'dt',
				width:'10%'
			},{
				name:"分辨率",
				id:'scree',
				width:'10%'
			}],
			
			even:'#eee',
			odd:'#fff'
		}

		const {addList , actions} = this.props;
		items['datas'] = addList
		console.log("ssss table this.props:" , actions.delList)
		return(
			<div>
				<Table items={items} 
				onclickTable={actions.addList}/>
			</div>
		)
	}
}

function mapStateToProps(state){
	return {
		addList:state.Applist
	}
}

function mapDispatchToProps(dispatch){
	return {
		actions:bindActionCreators(AddL , dispatch)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Applist)
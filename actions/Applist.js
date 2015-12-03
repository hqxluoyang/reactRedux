import {APPLIST_ADDLINE , APPLIST_DELLINE} from './actionsType' ;
import 'isomorphic-fetch';

export function addList_action(){
	alert("add")
	return {
		type:APPLIST_ADDLINE
	}
} 

export function delList_action(data){
	return {
		type :APPLIST_DELLINE,
		data:data
	}
}

export function addList(){
	return (dispatch , getState) =>{
		var data = {
				code:'x',
				pic:'image',
				name:'react',
				count:'count',
				type:'电影',
				size:'888',
				time:'34',
				dt:'yui',
				scree:'1920'
			}
			/*
			setTimeout(function(){
				dispatch(delList_action(data))	
			} , 3000)
			*/
			/*
			fetch('state').then(response => 
			response.json().then(json => ({json , response}))
			).then(({json , response}) => {

				console.log("json:" , json)
			})
			*/

			fetch('state').then(response =>response.json().then(json =>{
				console.log("json:" , json)
				dispatch(delList_action(json))
			}))	
		
	}
}
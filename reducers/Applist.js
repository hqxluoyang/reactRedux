import {APPLIST_ADDLINE , APPLIST_DELLINE} from '../actions/actionsType' ;

const items = []

export default function getData(state = items  , action){
	console.log("getData:" , action)
	switch(action.type){
		case APPLIST_ADDLINE:
			 
			return state
		case APPLIST_DELLINE:
			console.log("action.data:" , action.data , state)
			action.data['code'] = state.length + 1;
			return [
				...state,
				action.data
			]
		default:
			return state		
	}
}
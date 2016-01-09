import * as types from './actions';
const initState = {
	light: {
			color: 'red'
		},
	button: {
		id: 0
	}
}
export default function todos(state=initState, action) {
	 switch (action.type) {
	 	case types.TURN_LIGHT: 
	 		return Object.assign({}, state, {
	 				light: {
						color: action.color
					}
				})
	 	case types.HIGH_LIGHT: 
	 		 return Object.assign({}, state, {
	 				button: {
						id: action.id
					}
				})
		default:
			return state
	 }
}
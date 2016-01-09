/**
 * action定义了一组操作，用type区分动作，额外参数作为state状态传递给reducer使用
 */
export const TURN_LIGHT = "TURN_LIGHT";
export const HIGH_LIGHT = "HIGH_LIGHT";

export  function turn_light(color) {
	return {
		type: TURN_LIGHT,
		color
	}
}

export  function high_light(id){
	return {
		type: HIGH_LIGHT,
		id
	}
}
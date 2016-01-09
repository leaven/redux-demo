import { createStore } from 'redux'
import * as types from './actions'
import todos from './reducer'

let store = createStore(todos)

const buttons = document.querySelector(".button");
const light = document.querySelector("#light");

let subscribe = store.subscribe(() => {
  	let state = store.getState();
  	//改变light值
  	light.className = state.light.color;
  	//改变Button状态
  	$(".high-light").removeClass("high-light");
  	$(buttons.children[state.button.id]).addClass("high-light")
  })
buttons.onclick = function(e) {
	let se = e.target;
	store.dispatch(types.turn_light(se.dataset.color));
	store.dispatch(types.high_light(se.dataset.id))
}
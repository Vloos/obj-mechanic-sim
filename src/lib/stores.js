import { readable, writable } from 'svelte/store';

  /**@type {import("../objeto.js").default | undefined}*/
export const agarrado = writable(undefined)
/**@type {import("../objeto.js").default | undefined}*/
export const overado = writable(undefined)


export const mousePos = readable({x:0, y:0}, (set) => {
	document.body.addEventListener("mousemove", move);
	
	function move(event) {
		set({
			x: event.clientX,
			y: event.clientY,
		});
	}
	
	return () => {
		document.body.removeEventListener("mousemove", move);
	}
})


export const keypressed = readable({key: undefined, charcode: undefined, keycode: undefined, ctrl: false, alt: false, shift: false}, set => {
	document.body.addEventListener("keydown", key);

	function key(e){
		set({
			key: e.key,
			charcode: e.charCode,
			keycode: e.keyCode,
			ctrl: e.ctrlKey,
			shift:e.shiftKey,
			alt:e.altKey,
		})
	}

	return () => {
		document.body.removeEventListener('keydown', key)
	}
})

export const mouseWheel = readable({up:undefined, down: undefined, click: undefined}, set => {
	document.body.addEventListener('wheel', wheel)

	function wheel(e){
		set(e)
	}
})
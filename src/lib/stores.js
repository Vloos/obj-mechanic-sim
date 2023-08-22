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

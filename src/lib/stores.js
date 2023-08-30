import { readable, writable } from 'svelte/store';
import { browser } from '$app/environment';


/**@type {import("../objeto.js").default | undefined}*/
export const agarrado = writable(undefined)
/**@type {import("../objeto.js").default | undefined}*/
export const overado = writable(undefined)

/**@type {SvelteStore.<Array.<import("./objeto.js").default | undefined>>}*/
export const inventario = writable([])
/**@type {SvelteStore<Map.<import('$lib/tipos.js').Prop, import("$lib/objeto.js").default | undefined>>} */
export const materiales = writable(new Map())




export const mousePos = readable({x:0, y:0}, (set) => {
	if(browser) document.body.addEventListener("mousemove", move);
	
	function move(event) {
		set({
			x: event.clientX,
			y: event.clientY,
		});
	}
	
	return () => {
		if(browser) document.body.removeEventListener("mousemove", move);
	}
})


export const keypressed = readable({key: undefined, charcode: undefined, keycode: undefined, ctrl: false, alt: false, shift: false}, set => {
	if(browser) document.body.addEventListener("keydown", key);

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
		if(browser) document.body.removeEventListener('keydown', key)
	}
})

export const mouseWheel = readable({x: 0, y: 0}, set => {
	if(browser) document.body.addEventListener('wheel', wheel)

	function wheel(e){
		set({
			x: e.deltaX,
			y: e.deltaY,
		})
	}
})
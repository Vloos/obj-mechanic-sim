<script>
	import { reciclar } from "$lib/reciclador";
	import Objcasilla from "./objcasilla.svelte";

  let obj

  $: if(obj) reciclar(obj)
</script>

<Objcasilla bind:obj={obj}/>
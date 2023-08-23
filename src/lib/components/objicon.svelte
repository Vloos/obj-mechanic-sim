<script>
	import { overado } from "$lib/stores";
	import Icons from "./icons.svelte";
  /**@type {import("../objeto.js").default | undefined}*/
  export let obj = undefined


  function sobreObj(){
    $overado = obj
  }

  function noSobreObj(){
    $overado = undefined
  }
</script>

<div 
  style={`border-color: ${obj?.calidad.color}; box-shadow:inset 0 0 0.5rem 2px ${obj?.calidad.color};`}
  on:mouseenter={sobreObj}
  on:focus={sobreObj}
  on:mouseleave={noSobreObj}
  on:blur={noSobreObj}
  role="presentation"
  >
  <Icons name={obj?.icon || 'error'} height='50px' width='50px'/>
</div>

<style>
  div{
    display: grid;
    place-content: center;
    height: 60px;
    width: 60px;
    border: 2px solid;
    background-color: black;
  }
</style>
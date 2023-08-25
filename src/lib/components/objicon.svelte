<script>
	import Icons from '$lib/components/icons.svelte';
	import { overado } from "$lib/stores";

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
  style={`border-color: ${obj?.calidad.color};`}
  on:mouseenter={sobreObj}
  on:focus={sobreObj}
  on:mouseleave={noSobreObj}
  on:blur={noSobreObj}
  role="presentation"
  >
  <span class="obj">
    <Icons name={obj?.icon || 'error'} height='50px' width='50px'/>
  </span>
  {#if obj?.estado}
    <span class="estado">
      <Icons name={obj.estado.icon} height='100%' width='100%'/>
    </span>
  {/if}

</div>

<style>
  span{
    display: grid;
    width: 100%;
    height: 100%;
    place-content: center;
  }
  div{
    display: grid;
    place-content: center;
    height: 60px;
    width: 60px;
    border: 2px solid;
    background-color: black;
    grid-template-columns: auto 40px;
    grid-template-rows: 40px auto;
    gap: 0;
  }
  .obj{
    grid-column: 1 / 3;
    grid-row: 1 / 3;
  }
  .estado{
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    background-color: black;
  }


</style>
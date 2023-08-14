<script>
  import Objeto from '$lib/components/objeto.svelte';
  import {crearObjeto} from '$lib/objeto'

  /**@type {Array.<import("$lib/objeto.js").default>}*/
  let objs = []

  function generar(){
    objs.push(crearObjeto())
    objs = objs
  }
</script>


<button
  on:click={generar}
>Generar</button>

<div>
  {#each objs as obj}
    <Objeto {obj}/>
  {/each}
</div>

<style>
  div{
    display: grid;
    grid-template-columns: repeat(4, auto);
    overflow: auto;
    height: 85vh;
    margin-top: 2rem;
  }
</style>
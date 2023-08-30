<script>
	import { inventario } from '$lib/stores';
	import Objcasilla from './objcasilla.svelte';

  /**@type {number}*/
  export let maxInvTam = 1
  /**@type {Array.<import('$lib/tipos').ObjetosTipos>}*/
  export let drop = []
  /**@type {Array.<import('$lib/tipos').ObjetosTipos>}*/
  export let nodrop = []

</script>



<ul>
  {#each Array(maxInvTam) as k,i}
    <li>
      <Objcasilla bind:obj={$inventario[i]} {drop} {nodrop}/>
    </li>
  {/each}
</ul>

<style>
  ul {
    display: grid;
    grid-template-columns: repeat(12, 60px);
    grid-template-rows: repeat(3, 60px);
    gap: 8px;
  }

  li {
    background-color: black;
    height: 60px;
    width: 60px;
  }

</style>
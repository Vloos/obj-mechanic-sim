<script>
	import { reciclar } from "$lib/reciclador";
	import { ObjetosTipos } from "$lib/tipos";
	import Objcasilla from "./objcasilla.svelte";

  let obj
  let result = []


  function recicla(){
    result = reciclar(obj)
    obj = undefined
  }
</script>

<Objcasilla bind:obj={obj} nodrop={[ObjetosTipos.Fragmento]}/>

<button
  on:click={recicla}
>
  Romper
</button>

{#each result as frag}
  <Objcasilla bind:obj={frag} drop={[undefined]}/>
{/each}
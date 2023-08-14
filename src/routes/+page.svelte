<script>
  import Icons from '$lib/components/icons.svelte';
	import Inventario from '$lib/components/inventario.svelte';
import Objeto from '$lib/components/objeto.svelte';
  import {crearObjeto} from '$lib/objeto'

  /**@type {Map.<string, import("$lib/objeto.js").default>}*/
  let objs = new Map()
  /**@type {import("$lib/objeto.js").default | undefined}*/
  let obj = undefined

  /**@type {string}*/
  let objOver = ''

  $: muestra(objOver)
  
  /**
   * 
   * @param {string} que
   */
  function muestra(que){
      obj = objs.get(que)
  }

  function generar(){
    let obj = crearObjeto()
    objs.set(obj.id, obj)
    objs = objs
  }
</script>

<button
  on:click={generar}
>Generar</button>

<Inventario {objs} bind:objOver={objOver}/>

{#if obj}
  <Objeto {obj}/>
{/if}


<style>
  div{
    display: grid;
    grid-template-columns: repeat(4, auto);
    overflow: auto;
    height: 85vh;
    margin-top: 2rem;
  }
</style>
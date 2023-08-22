<script>
	import { agarrado, mousePos, overado } from '$lib/stores.js';
	import Inventario from '$lib/components/inventario.svelte';
  import Objeto from '$lib/components/objeto.svelte';
  import {crearObjeto} from '$lib/objeto'
	import Objicon from '$lib/components/objicon.svelte';
	import Forja from '$lib/components/forja.svelte';

  /**@type {import("$lib/objeto.js").default | undefined}*/
  let obj = undefined
  /**@type {number}*/
  let maxInvTam = 36
  /**@type {Array.<import("$lib/objeto.js").default | undefined>}*/
  let objs = []
  for (let i = 0; i < maxInvTam; i++) {
    objs[i] = undefined
  }

  /**@type {number | undefined}*/
  let objOver = undefined

  
  /** @param {number} que */
  function muestra(que){
      obj = objs[que]
  }

  function generar(){
    let obj = crearObjeto()
    objs[objs.indexOf(undefined)] = obj
    objs = objs
  }
</script>




{#if Boolean($agarrado)}
  <div class="objicon" style={`top:${$mousePos.y}px; left:${$mousePos.x}px`}>
    <Objicon  obj={$agarrado}/>
  </div>
{/if}



<p>
  {$overado?.nombre || ''}
  {$mousePos.x} : {$mousePos.y}
  {$agarrado?.nombre || ''}
</p>

<button
  on:click={generar}
  disabled={!objs.some(o => o == undefined) || Boolean($agarrado)}
>Generar</button>

<Inventario bind:objs={objs} {maxInvTam}/>

<hr>
<h2>Forja</h2>
<Forja/>


{#if Boolean($overado)}
  <div class='objInfo'>
    <Objeto {obj}/>
  </div>
{/if}


<style>
  .objicon{
    margin: 0;
    padding: 0;
    position: fixed;
    width:60px;
    height: 60px;
    transform: translateX(-50%) translateY(-50%);
    pointer-events:none;
  }
</style>
<script>
	import { agarrado, mousePos } from '$lib/stores.js';
	import Inventario from '$lib/components/inventario.svelte';
  import Objeto from '$lib/components/objeto.svelte';
  import {crearObjeto} from '$lib/objeto'
	import Objicon from '$lib/components/objicon.svelte';

  /**@type {import("$lib/objeto.js").default | undefined}*/
  let obj = undefined
  /**@type {number}*/
  let maxInvTam = 36
  /**@type {Array.<import("$lib/objeto.js").default | undefined>}*/
  let objs = []
  for (let i = 0; i < maxInvTam; i++) {
    objs[i] = undefined
  }
  console.log('objs', objs);

  /**@type {number | undefined}*/
  let objOver = undefined

  $: muestra(objOver)
  $: console.log('agarrado:', $agarrado);
  
  /**
   * 
   * @param {number} que
   */
  function muestra(que){
      obj = objs[que]
  }

  function generar(){
    let obj = crearObjeto()
    console.log(objs.indexOf(undefined));
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
  {$mousePos.x} : {$mousePos.y}
  {$agarrado?.nombre || ''}
</p>

<button
  on:click={generar}
  disabled={!objs.some(o => o == undefined) || Boolean($agarrado)}
>Generar</button>

<Inventario bind:objs={objs} bind:objOver={objOver} {maxInvTam}/>

{#if obj}
  <Objeto {obj}/>
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
<script>
	import { agarrado } from '$lib/stores.js';
	import Objicon from "./objicon.svelte";
  
  /**@type {number | undefined}*/
  export let objOver = undefined
  /**@type {number}*/
  export let maxInvTam = 1
  /**@type {Array.<import("$lib/objeto.js").default | undefined>}*/
  export let objs = []


  /**@param {number} k*/
  function handleOver(k){
    objOver = k
  }


  function sale(){
    console.log('sale');
    objOver = undefined
  }

  /**@param {number} cual*/
  function agarrar(cual){
    $agarrado = objs[cual]
    objs[cual] = undefined
    objs = objs
  }

  /**@param {number} donde*/
  function soltar(donde){
    const aux = objs[donde] 
    objs[donde] = $agarrado
    $agarrado = aux
  }

</script>

<ul>
  {#each Array(maxInvTam) as k,i}
  <li
    role='menuitem' 
    draggable={Boolean(objs[i])}
    on:dragstart|preventDefault={() => {!$agarrado ? agarrar(i): null}}
    on:dragend={() => {console.log('soltar')}}
    on:mouseenter={() => {handleOver(i)}}
    on:mouseleave={() => {sale()}}
    on:mouseup={() => {Boolean($agarrado) ? soltar(i) : agarrar(i)}}
    class:sobre={objOver === i}
  >
    {#if objs[i]}
      <Objicon obj={objs[i]}/>
    {/if}
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

  .sobre{
    border: 1px solid grey;
  }
</style>
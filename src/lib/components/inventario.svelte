<script>
	import { agarrado } from '$lib/stores.js';
	import Objicon from "./objicon.svelte";
  
  /**@type {number | undefined}*/
  export let objOver = undefined
  /**@type {number}*/
  export let maxInvTam = 1
  /**@type {Array.<import("$lib/objeto.js").default | undefined>}*/
  export let objs = []


  function moverobj(ele, param) {
    /**@param {number} cual*/
    const agarrar = (cual) => {
      $agarrado = objs[cual]
      objs[cual] = undefined
      objs = objs
    }

    /**@param {number} donde*/
    const soltar = (donde) => {
      const aux = objs[donde] 
      objs[donde] = $agarrado
      $agarrado = aux
    }

    ele.addEventListener('dragstart', e => {
      e.preventDefault()
      !$agarrado ? agarrar(param.i): null
    })

    ele.addEventListener('mouseenter', () => {objOver = param.i})

    ele.addEventListener('mouseleave', () => {objOver = undefined})

    ele.addEventListener('mouseup', () => {Boolean($agarrado) ? soltar(param.i) : agarrar(param.i)})

    return {
      destroy(){
        ele.removeEventListener('dragstart')
        ele.removeEventListener('mouseenter')
        ele.removeEventListener('mouseleave')
        ele.removeEventListener('mouseup')
      }
    }
  }
</script>

<ul>
  {#each Array(maxInvTam) as k,i}
  <li
    role='menuitem' 
    draggable={Boolean(objs[i])}
    class:sobre={objOver === i}
    use:moverobj={{i}}
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
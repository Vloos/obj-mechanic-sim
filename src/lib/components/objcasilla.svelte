<script>
	import { agarrado, overado } from "$lib/stores";
  import Objicon from "./objicon.svelte";

  /**@type {import("$lib/objeto.js").default | undefined}*/
  export let obj = undefined
  /**@type {boolean}*/
  let sobre = false

  function moverobj(ele) {
    const agarrar = () => {
      $agarrado = obj
      obj = undefined
    }

    const soltar = () => {
      const aux = obj
      obj = $agarrado
      $agarrado = aux
    }

    const menter = () => {
      sobre = true
      $overado = obj
    }

    const mleave = () => {
      sobre = false
      $overado = undefined
    }

    const mup = () => {
      Boolean($agarrado) ? soltar() : agarrar()
    }

    const mdrag = (e) => {
      e.preventDefault()
      !$agarrado ? agarrar(): null
    }

    ele.addEventListener('dragstart', mdrag)
    ele.addEventListener('mouseenter', menter)
    ele.addEventListener('mouseleave', mleave)
    ele.addEventListener('mouseup', mup)

    return {
      destroy(){
        ele.removeEventListener('dragstart', mdrag)
        ele.removeEventListener('mouseenter', menter)
        ele.removeEventListener('mouseleave', mleave)
        ele.removeEventListener('mouseup', mup)
      }
    }
  }
</script>

<div
  role='menuitem' 
  draggable={Boolean(obj)}
  class:sobre={sobre}
  use:moverobj
>
  {#if obj}
    <Objicon {obj}/>
  {/if}
</div>


<style>
  div{
    width: 60px;
    height: 60px;
  }

  .sobre{
    outline: 1px solid grey;
  }
</style>
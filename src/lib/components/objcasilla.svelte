<script>
	import { agarrado, overado } from "$lib/stores";
  import Objicon from "./objicon.svelte";

  /**@type {import("$lib/objeto.js").default | undefined}*/
  export let obj = undefined
  /**@type {boolean}*/
  let sobre = false
  /**@type {Array.<import("$lib/tipos.js").ObjetosTipos>}*/
  export let nodrop = []
  /**@type {Array.<import("$lib/tipos.js").ObjetosTipos>}*/
  export let drop = []

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
    }

    const mleave = () => {
      sobre = false
    }

    const mup = (e) => {
      if ($agarrado) {
        let soltable = true
        
        // nodrop tiene preferencia sobre drop.
        // si hay algo en drop, lo que no hay, no se dropea
        if(drop.length > 0 && !drop.includes($agarrado.tipo)) {
          soltable = false
        }

        // si hay algo en no drop, no se dropea aunque esté en drop
        if(nodrop.includes($agarrado.tipo)) {
          soltable = false
        }

        if (soltable) {
          soltar()
        }
      } else {
        switch(e.button){
          case 0:
            agarrar()
            $overado = undefined
            break
          case 1:
            console.log('click central');
            break
          case 2:
          console.log('click derecho');
            break
        }
      }
      
    }

    const mdrag = (e) => {
      e.preventDefault()
      if (!$agarrado){
        agarrar()
        $overado = undefined
      } 
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
  on:contextmenu|preventDefault
>
  {#if obj}
    <Objicon {obj}/>
  {/if}
</div>


<style>
  div{
    width: 60px;
    height: 60px;
    background-color: black;
  }

  .sobre{
    outline: 1px solid grey;
  }
</style>
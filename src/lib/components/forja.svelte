<script>
	import { calculaProbs } from "$lib/forja";
	import { agarrado } from "$lib/stores";
	import Objicon from "./objicon.svelte";

  /**@type {import("$lib/objeto.js").default | undefined}*/
  let objAporte = undefined
  /**@type {import("$lib/objeto.js").default | undefined}*/
  let objOrigen = undefined
  /**@type {import("$lib/objeto.js").default | undefined}*/
  let objResult = undefined
  /**@type {number}*/
  let exito = 0
  let resultado = undefined

  $: if (Boolean(objOrigen) && Boolean(objAporte)){
    objResult = controlDeForja()
  }

  function controlDeForja(){
    console.log('controlando');
    exito =  calculaProbs(objOrigen, objAporte)
  }

  /**
   * @param {boolean} esAporte
   * @param {HTMLElement} ele
  */
  function moverobj(ele, esAporte) {
    function fdrag(e){
      console.log('draga')
      e.preventDefault()
      !$agarrado ? agarrar(): null
    }

    function fup(){
      Boolean($agarrado) ? soltar() : agarrar()
    }

    const agarrar = () => {
      if (esAporte){
        $agarrado = objAporte
        objAporte = undefined
      } else {
        $agarrado = objOrigen
        objOrigen = undefined
      }
    }

    const soltar = () => {
      let aux
      if (esAporte){
        aux = objAporte
        objAporte = $agarrado
        $agarrado = aux
      } else {
        aux = objOrigen
        objOrigen = $agarrado
        $agarrado = aux
      }
    }

    ele.addEventListener('dragstart', fdrag)

    ele.addEventListener('mouseup', fup)

    return {
      destroy(){
        ele.removeEventListener('mouseup', fup)
        ele.removeEventListener('mousedrag', fdrag)
      }
    }
  }
</script>


<div class="forja">
  <div>
    <p>Donante</p>
    <div class="aporte"
      use:moverobj={true}
      draggable={Boolean(objAporte)}
      role='none'
    >
      {#if Boolean(objAporte)}
        <Objicon obj={objAporte}/>
      {/if}
    </div>
  </div>

  &rightarrow;

  <div>
    <p>Base</p>
    <div class="origen"
      use:moverobj={false}
      draggable={Boolean(objOrigen)}
      role='none'
    >
      {#if objOrigen}
        <Objicon obj={objOrigen}/>
      {/if}
    </div>
  </div>
  &rightarrow;
  <div>
    <p>Éxito:{exito}%</p>
    <button>
      Forjar
    </button>
  </div>
  &rightarrow;
  <div>
    <p>Resultado</p>
    <div class="resultado">
  
    </div>
  </div>
</div>


<style>
  .forja{
    display: flex;
    gap: 1rem;
  }
  .forja > *{
    flex-basis: min-content;
  }
  .aporte, .origen, .resultado{
    width: 60px;
    height: 60px;
    background-color: black;
  }
</style>
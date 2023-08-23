<script>
	import Objcasilla from './objcasilla.svelte';
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
</script>


<div class="forja">
  <div>
    <p>Donante</p>
    <Objcasilla obj={objAporte}/>
  </div>

  &rightarrow;

  <div>
    <p>Base</p>
    <Objcasilla obj={objOrigen}/>
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
  .resultado{
    width: 60px;
    height: 60px;
    background-color: black;
  }
</style>
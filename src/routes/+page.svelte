<script>
	import { agarrado, mousePos, overado } from '$lib/stores.js';
	import Inventario from '$lib/components/inventario.svelte';
  import Objeto from '$lib/components/objeto.svelte';
  import {crearObjeto, generarFragmento} from '$lib/objeto'
	import Objicon from '$lib/components/objicon.svelte';
	import Forja from '$lib/components/forja.svelte';
	import Recicla from '$lib/components/recicla.svelte';
	import { Estados, ObjetosTipos, Prop } from '$lib/tipos';
	import { onMount } from 'svelte';

  /**@type {import("$lib/objeto.js").default | undefined}*/
  let obj = undefined
  /**@type {number}*/
  let maxInvTam = 36
  /**@type {Array.<import("$lib/objeto.js").default | undefined>}*/
  let objs = []
  for (let i = 0; i < maxInvTam; i++) {
    objs[i] = undefined
  }
  /**@type {Array.<import("$lib/objeto.js").default | undefined>}*/
  let mats = []
  Object.keys(Prop).forEach(p => {
    mats.push(generarFragmento(Prop[p]))
  })

  onMount(() => {
    document.addEventListener('keydown', (e) => {
      let estado = Estados.botonesEstados.get(e.key)
      if ($overado && estado){
        if (!$overado.estado) {
          $overado.estado = estado
        } else if ($overado.estado.tecla === estado.tecla) {
          $overado.estado = undefined
        }
      }

      console.log($overado);
    })
  })

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

{#if Boolean($overado)}
  <div 
    class='objInfo' style={`top:${$mousePos.y}px; left:${$mousePos.x}px`}
  >
    <Objeto obj={$overado}/>
  </div>
{/if}

<div class='inventario'>
  <h1>Inventario</h1>
  <div class="objs">
    <h2>Objetos</h2>
    <button
      on:click={generar}
      disabled={!objs.some(o => o == undefined) || Boolean($agarrado)}
    >Generar</button>
    <Inventario bind:objs={objs} {maxInvTam} nodrop={[ObjetosTipos.Fragmento]}/>
  </div>
  <div class="mats">
    <h2>Materiales</h2>
    <Inventario bind:objs={mats} maxInvTam={Object.keys(Prop).length} drop={[ObjetosTipos.Fragmento]}/>
  </div>
</div>

<!--
<hr>
<h2>Forja</h2>
<Forja/>
-->

<hr>
<h2>Reciclar</h2>
<Recicla/>

<style>
  .objs, .mats{
    width: min-content;
    display: flex;
    gap: 1rem;
    flex-direction: column;
  }

  .objicon{
    margin: 0;
    padding: 0;
    position: fixed;
    width:60px;
    height: 60px;
    transform: translateX(-50%) translateY(-50%);
    pointer-events:none;
  }

  .objInfo{
    position: fixed;
    margin: 0;
    padding: 0;
    pointer-events:none;
    transform: translateX(-40%) translateY(10%);
  }

  hr{
    margin: 1rem 0;
  }

  .inventario{
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
  }

  .inventario h1{
    flex-basis: 100%;
  }
</style>
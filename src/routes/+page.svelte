<script>
	import { agarrado, mousePos, overado, keypressed, mouseWheel, materiales, inventario } from '$lib/stores.js';
	import Inventario from '$lib/components/inventario.svelte';
  import Objeto from '$lib/components/objeto.svelte';
  import {crearObjeto, generarFragmento} from '$lib/objeto'
	import Objicon from '$lib/components/objicon.svelte';
	import Forja from '$lib/components/forja.svelte';
	import Recicla from '$lib/components/recicla.svelte';
	import { Estados, ObjetosTipos, Prop } from '$lib/tipos';
	import InventarioFrag from '$lib/components/inventario-frag.svelte';

  /**@type {import("$lib/objeto.js").default | undefined}*/
  let obj = undefined
  /**@type {number}*/
  let maxInvTam = 36

  for (let i = 0; i < maxInvTam; i++) {
    $inventario[i] = undefined
  }

  /**@type {Array.<import("$lib/objeto.js").default | undefined>}*/
  
  Object.keys(Prop).forEach(p => {
    $materiales.set(Prop[p], generarFragmento(Prop[p]))
  })


  /**
    @param {{key: string | undefined,
      charcode: number | undefined,
      keycode: number | undefined,
      ctrl: boolean,
      shift: boolean,
      alt: boolean}} e
    */
  function keyp (e) {   
    let tecla = e?.key
    console.log(tecla);
    if ($overado){
      if (!$overado.estado) {
        $overado.estado = Estados.botonesEstados.get(tecla)
      } else if ($overado.estado.tecla === tecla) {
        $overado.estado = undefined
      }
    }
  }
  

  function generar(){
    let obj = crearObjeto()
    $inventario[$inventario.indexOf(undefined)] = obj
  }


  function borrarBasura(){
    let objs = [...$inventario]
    objs.forEach((o, i) => {
      if (o?.estado?.tecla === Estados.Basura.tecla) {
        objs[i] = undefined
      }
    });
    $inventario = [...objs]
  }


  function borrarTodo(){
    let objs = [...$inventario]
    objs.forEach((o, i) => {
      if (o?.estado?.tecla !== Estados.Bloqueado.tecla) objs[i] = undefined
    })
    $inventario = [...objs]
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
    <div class="botones">
      <button class="generar"
        on:click={generar}
        disabled={!$inventario.some(o => o == undefined) || Boolean($agarrado)}
      >Generar</button>
      <button class="borrar" on:click={borrarBasura}>Borrar basura</button>
      <button class="borrar" on:click={borrarTodo}>Borrar todo</button>
    </div>
    <Inventario {maxInvTam} nodrop={[ObjetosTipos.Fragmento]}/>
  </div>


  <div class="mats">
    <h2>Materiales</h2>
    <!-- <Inventario bind:objs={mats} maxInvTam={Object.keys(Prop).length} drop={[ObjetosTipos.Fragmento]}/> -->
    <InventarioFrag/>
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

  .borrar{
    flex-basis: max-content;
    flex-grow: 1;
    flex-shrink: 0;
  }

  .botones{
    display: flex;
    flex-direction: row;
  }

  .mats{
    flex-grow: 1;
  }
</style>
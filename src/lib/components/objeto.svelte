<script>
	import { fade } from 'svelte/transition';
	import Icons from '$lib/components/icons.svelte';
	import { ObjetosTipos } from '$lib/tipos.js';
  /**@type {import("../objeto.js").default | undefined}*/
  export let obj = undefined
</script>

{#if obj?.tipo === ObjetosTipos.Fragmento}
  <div 
    transition:fade={{duration:100}}
  >
    <header>
      <h3>{obj.nombre}</h3>
      <p>{[...obj.props.keys()][0].nombre}</p>
      <span class="icon"><Icons name={obj.icon} width='50' height='50'/></span>
    </header>
      <p>x{obj.cantidad}</p>
  </div>
  {:else}
  <div 
    style={`border-color: ${obj.calidad.color}; box-shadow:inset 0 0 1rem ${obj.calidad.color};`}
    transition:fade={{duration:100}}
  >
    <header>
      <h3>{obj.nombre}</h3>
      <span>{obj.calidad.nombre}</span>
      <span class="icon"><Icons name={obj.icon} width='50' height='50'/></span>
    </header>
    <hr>
    {#each [...obj.props] as [k,v]}
      <p><span>{k.nombre}</span><span>+{v}%</span></p>
    {/each}
  </div>    
{/if}



<style>
  div{
    border: 4px solid;
    width: 350px;
    padding: 1rem;
    background-color: #111;
  }

  header{
    display: grid;
    grid-template-columns: auto 50px;
  }

  .icon{
    grid-column: 2 / 3;
    grid-row: 1 / 3;
  }

  hr{
    margin:1rem 0;
  }

  p{
    display: grid;
    grid-template-columns: auto 40px;
    text-align: left;
    margin: 0.25rem 0;
  }
</style>
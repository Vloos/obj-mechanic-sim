<script>
	import { reciclar } from "$lib/reciclador";
	import { materiales } from "$lib/stores";
	import { ObjetosTipos } from "$lib/tipos";
	import Icons from "$lib/components/icons.svelte";
	import Objcasilla from "./objcasilla.svelte";

  let obj
  /**@type {Array.<import('$lib/objeto').default>}*/
  let result = []


  function recicla(){
    result = reciclar(obj)
    obj = undefined
    result.forEach(frag => {
      console.log($materiales.get(frag.id).cantidad)
      $materiales.get(frag.id).cantidad ++
    })
    $materiales = $materiales  
  }
</script>

<Objcasilla bind:obj={obj} nodrop={[ObjetosTipos.Fragmento]}/>

<button
  on:click={recicla}
>
  Romper
</button>


<ul>
  {#each result as obj}
    <li>
      <span><Icons name={obj.icon}/></span><span>{obj.id.nombre}</span><span>1</span>
    </li>
  {/each}
</ul>


<style>
  ul{
    display: grid;
    flex-wrap: wrap;
    gap: 0.25rem;
    padding: 0.25rem;
    grid-template-columns: repeat(3, auto);
  }

  li{
    display: grid;
    grid-template-columns: auto 1fr 3rem;
    gap: 0.25 rem;
    padding: 0.25rem;
    background-color: #111;
  }
  span{
    width: max-content;
  }
</style>
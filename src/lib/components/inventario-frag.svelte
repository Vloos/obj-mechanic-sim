<script>
	import { materiales } from '$lib/stores';
	import Icons from './icons.svelte';


  function moverFrag(ele){
    function mdrag(){}

    function menter(){}

    function mleave(){}

    function mup(){}

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


<ul>
  {#each $materiales as [prop, obj]}
    <li>
      <span><Icons name={obj.icon}/></span><span>{prop.nombre}</span><span>{obj.cantidad}</span>
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
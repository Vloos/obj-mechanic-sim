<script>
	import Icons from './icons.svelte';

  /**@type {Array.<import('$lib/objeto').default>}*/
  export let objs = []

  /**@param {import('$lib/objeto').default} obj*/
  function prop(obj){ 
    return [...obj.props.keys()][0]
  }
</script>


<ul>
  {#each objs as obj}
    <li>
      <span><Icons name={obj.icon}/></span><span>{prop(obj).nombre}</span>
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
    grid-template-columns: 40px auto;
    gap: 0.25 rem;
    padding: 0.25rem;
    background-color: #111;
  }
  span{
    width: max-content;
  }
</style>
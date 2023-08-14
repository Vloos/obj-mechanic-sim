<script>
	import Objicon from "./objicon.svelte";
  
    /**@type {Map.<string, import("$lib/objeto.js").default>}*/
  export let objs = new Map()
  /**@type {string}*/
  export let objOver = ''

  function handleOver(k){
    objOver = k
  }

  function sale(){
    objOver = ''
  }

</script>

<ul>
  {#each [...objs] as [k,obj]}
  <li>
    <Objicon {obj} handleOver={() => {handleOver(k)}} {sale}/>
  </li>
  {/each}
</ul>

<style>
  ul {
    display: grid;
    grid-template-columns: repeat(12, 60px);
    grid-template-rows: repeat(3, 60px);
    gap: 8px;
  }

  li {
    background-color: black;
    height: 60px;
    width: 60px;
  }
</style>
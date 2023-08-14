<script>
	import Icons from "./icons.svelte";
  /**@type {import("../objeto.js").default | undefined}*/
  export let obj = undefined
  export let handleOver = () => null
  export let sale = () => null

</script>

<div 
  style={`border-color: ${obj?.calidad.color}; box-shadow:inset 0 0 0.5rem ${obj?.calidad.color};`}
  on:mouseenter={handleOver}
  on:mouseleave={sale}
  on:focus={handleOver}
  on:blur={sale}
  role="presentation"
  >
  <Icons name={obj?.icon || 'error'} height='50px' width='50px'/>
</div>

<style>
  div{
    display: grid;
    place-content: center;
    height: 60px;
    width: 60px;
    border: 2px solid;
  }
</style>
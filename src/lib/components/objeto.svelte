<script>
  /**@type {import("../objeto.js").default | undefined}*/
  export let obj = undefined
</script>

{#if obj}
  <div style={`border-color: ${obj.calidad.color}; box-shadow:inset 0 0 1rem ${obj.calidad.color};`}>
    <h3>{obj.nombre}</h3>
    <span>{obj.calidad.nombre}</span>
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
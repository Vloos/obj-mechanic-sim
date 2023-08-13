<script>
  import {crearObjeto} from '$lib/objeto'

  function generar(){
    crearObjeto()
  }
</script>


<button
  on:click={generar}
>Generar</button>
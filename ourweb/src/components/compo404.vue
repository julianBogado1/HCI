<template>
    <div class="myError">
        <div>
          <div class="icon">
          <svg-icon type="mdi" :path="path" size="80"></svg-icon>
          </div>
          <h1>404 Página no encontrada</h1>
        </div>
        <h3>Ocurrió un error buscando la página solicitada</h3>
    </div>
</template>

<script>
    import SvgIcon from '@jamescoyle/vue-icon';
import { mdiAlert } from '@mdi/js';

    export default {
  name: "my-component",
  components: {
    SvgIcon
  },
  data() {
    return {
       path: mdiAlert,
    }
  }
}
</script>

<style scoped>
  .icon{
    display: flex;
    align-items: center;
    justify-content: center;
    color: gold;
  }
  .myError{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
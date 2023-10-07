<template>
    <div class="mycontainer">
        <svg-icon type="mdi" :path="path1"></svg-icon>
        <svg-icon type="mdi" :path="path2"></svg-icon>
        <svg-icon type="mdi" :path="path3"></svg-icon>
    </div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiArmFlex } from '@mdi/js';
import { mdiArmFlexOutline } from '@mdi/js';

export default {
  name: "my-component",
  components: {
    SvgIcon
  },
  data() {
    return {
       path1: mdiArmFlex,
       path2: mdiArmFlexOutline,
       path3: mdiArmFlexOutline,
    }
  }
}
</script>

<style scoped>
  .mycontainer{
    margin: 0px;
  }
</style>
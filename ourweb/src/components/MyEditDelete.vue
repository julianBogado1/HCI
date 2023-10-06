<template>
    <div>
        <svg-icon type="mdi" :path="path1"></svg-icon>
        <svg-icon type="mdi" :path="path2"></svg-icon>
    </div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiPencilOutline } from '@mdi/js';
import { mdiTrashCanOutline } from '@mdi/js';

export default {
  name: "my-component",
  components: {
    SvgIcon
  },
  data() {
    return {
       path1: mdiPencilOutline,
       path2: mdiTrashCanOutline,
    }
  }
}
</script>
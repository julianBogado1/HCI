<template>
    <svg-icon type="mdi" :path="path" size="120"></svg-icon>
  </template>
  
  <script>
  import SvgIcon from '@jamescoyle/vue-icon';
  import { mdiAccountCircle } from '@mdi/js';
  
  export default {
    name: "my-component",
    components: {
      SvgIcon
    },
    data() {
      return {
         path: mdiAccountCircle,
      }
    }
  }
  </script>
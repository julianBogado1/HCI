<template >
  <v-row justify="end">
    <v-text-field
      v-model="avatarUrl_edit"
      class="space-below"
      :readonly="loading"
      :rules="reqRules"
      label="Inserte Url de la imagen"
      placeholder="Enter your password"
      variant="outlined"
    ></v-text-field>
    
  </v-row>
</template>

<script>
import { editAvatarUrl } from '@/api/api.js';
export default {
  methods: {
    async onSubmit () {
      this.errorMessage = '';
      let response = await editAvatarUrl(this.avatarUrl_edit);
      console.log(response);
  },
}}

</script>

<style scoped>
  .content{
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
<template >
  <v-row justify="end">
    <v-text-field
      v-model="avatarUrl_edit"
      class="space-below"
      :readonly="loading"
      :rules="reqRules"
      clearable
      label="Inserte Url de la imagen"
      placeholder="Enter your password"
      variant="outlined"
    ></v-text-field>
    <div class="button-with-mssg">
      <div class="message space-below">
        <div v-if="errorMessage" class="text-error">
          {{ errorMessage }}
        </div>
      </div>
    </div>
    <v-btn
      size="large"
      type="submit"
      variant="elevated"
      density="compact"
      rounded="xl"
      color="#73C7A4"
      class="text-white"
      @click="onSubmit"
    >
      Guardar Cambios
    </v-btn>
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
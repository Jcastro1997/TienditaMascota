<template>
  <v-container fluid class="fondo">
    <v-row>
      <v-col class="d-flex align-center justify-center" cols="12" sm="2">
        <v-img
          class="logo"
          max-width="100"
          :src="require('../assets/img/Logo.jpg')"
          eager
          contain
        />
      </v-col>
      <v-col cols="12" sm="auto" class="d-flex align-center justify-center">
        <v-container :class="$vuetify.breakpoint.mobile ? 'text-center':''">
            <p style="color: #fffaf2;" class="display-2">Tienda de mascotas</p>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
.logo {
  border-radius: 50%;
}
.fondo {
  background-color: #12171b;
}
</style>
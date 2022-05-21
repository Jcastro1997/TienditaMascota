<template>
  <div >
    <Header />
    <div >
      <v-row>
        <v-col class="pr-0 pb-0" cols="2">
        <IndexCategorias />
        </v-col>
        <v-col class="pb-0 pl-0" cols="10">
          <BodyIndex />
          <WidgetDrawer />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import IndexCategorias from './Categorias/Index.vue'
import Header from "../views/Header.vue";
import WidgetDrawer from "../components/WidgetDrawer/Index.vue";
import BodyIndex from "../components/BodyList/Index.vue";
export default {
  components: {
    Header,
    BodyIndex,
    WidgetDrawer,
    IndexCategorias
  },
};
</script>

<style>
</style>
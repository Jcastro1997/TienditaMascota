<template>
  <v-container style="height:100%!important" class="fondo " fluid>
    <div>
      <div class="text-center">
        <p style="color: white" class="display-1">Categorias</p>
      </div>
      <v-container>
        <v-list style="background-color: #887673">
          <v-list-item>
            <v-list-item-content>
              <v-btn @click="sendIdCategory({item:null})" class="text-capitalize" block>Todos los articulos</v-btn>
            </v-list-item-content>
          </v-list-item>
          <v-list-item v-for="(item, index) in categorias" :key="index">
            <v-list-item-content>
              <v-btn @click="sendIdCategory(item)" class="text-capitalize" block>{{ item.name }}</v-btn>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-container>
    </div>
  </v-container>
</template>

<script>
import { getCategorias } from "@/helpers/api/calls";
import { mapMutations } from 'vuex';
export default {
  data() {
    return {
      categorias: {},
    };
  },
  watch: {},
  created() {
    this.listaCategorias();
  },
  methods: {
    ...mapMutations(['setIdCategory']),
    async listaCategorias() {
      const data = await getCategorias();
      this.categorias = data.data;
      console.log("listCategorias", data);
    },
    sendIdCategory(item){
      console.log("items",item)
      this.setIdCategory(item.id)
    }
  },
};
</script>

<style scoped>
.fondo {
  background-color: #887673;
  min-height: 100vh;
}
</style>
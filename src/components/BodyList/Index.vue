<template>
  <v-container  class="fondo" fluid>
    <v-container>
      <v-row>
        <v-col cols="2">
          <p style="color: #f8efed" class="display-2">Productos</p></v-col
        >
        <v-col>
          <div>
            <v-text-field
              v-model="buscar"
              style="width:30%"
              solo
              background-color="white"
              class="rounded-lg"
              label="Buscar"
            />
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-col
          class="d-flex align-center justify-center"
          cols="12"
          sm="4"
          v-for="(item, index) in listado"
          :key="index"
        >
          <v-card width="500" min-height="500">
            <v-card-title>
              {{ item.name }}
            </v-card-title>
            <div class="d-flex align-center justify-center">
              <v-img contain max-width="200" eager :src="item.photo" />
            </div>
            <v-container class="mt-5">
              <div class="text-center">
                <v-btn
                  elevation="0"
                  color="#eac74a"
                  @click="openModalInfo(item)"
                  class="text-capitalize"
                >
                  Mas información
                </v-btn>
              </div>
            </v-container>
            <v-container>
              <div class="d-flex flex-row align-center justify-center">
                <p class="subtitle-1 mt-5">
                  Precio:
                  <span class="font-weight-bold"
                    >$ {{ item.price.toLocaleString("es-ES") }}</span
                  >
                </p>
                <v-btn
                  @click="togglePaymentWidget(item)"
                  style="color: white"
                  class="text-capitalize ml-5"
                  color="#00619f"
                >
                  Añadir al carro
                </v-btn>
              </div>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <MoreInfoIndex class="d-none" />
  </v-container>
</template>

<script>
import MoreInfoIndex from "./MoreInfo/Index.vue";
import { getProductos } from "@/helpers/api/calls";
import { mapMutations, mapState } from "vuex";
export default {
  components: {
    MoreInfoIndex,
  },
  data() {
    return {
      items: [],
      buscar:'',
      categoria:null,
    };
  },
  created() {
    this.listadoProductos();
  },
  watch: {
    idCategoria(newValue){
      // console.log(newValue)
      if(newValue != null){
        this.categoria = newValue
        // console.log("categoria",this.categoria)
      }
      else{
        this.categoria = this.datefilter
      }
    }
  },
  computed: {
    idCategoria:{
      get(){
        return this.$store.state.idCategory
      },
      set(newValue){
        return ''
      }
    },

    listado() {
      return this.items.filter((i) =>{
        let datefilter = true;
        if(this.categoria == null){
          datefilter = i
        }
        const typeCategory = !this.categoria || i.category.id.toString().includes(this.categoria.toString());
        const busqueda =  i.name.toLowerCase().includes(this.buscar.toLowerCase());
        return  busqueda &&  typeCategory && datefilter;
      }) 
    }
  },
  methods: {
    ...mapMutations(["setModalInfo", "setInformation"]),
    async listadoProductos() {
      const data = await getProductos();
      this.items = data.data;
      console.log(data);
    },
    openModalInfo(item) {
      this.$store.commit("setModalInfo", true);
      this.setInformation(item);
    },
    togglePaymentWidget(item) {
      this.$store.commit("setPaymentWidget", !this.$store.state.paymentWidget);
      this.$store.commit("setPaymentItems", item);
    },
  },
};
</script>

<style scoped>
.fondo {
  background-color: #1a264a;
  min-height: 100%;
}
</style>
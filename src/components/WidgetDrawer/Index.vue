<template>
  <v-navigation-drawer left  fixed  temporary v-model="drawer" :width="$vuetify.breakpoint.mobile ? '100%':'30%'">
  <v-container>
      <v-btn @click="drawer = false" icon>
          <v-icon>mdi-close</v-icon>
      </v-btn>
  </v-container>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h4 my-10">
          Su compra actual: ${{total}}
        </v-list-item-title>
        <v-btn depressed large outlined color="success">
          Comprar
        </v-btn>
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>
    <v-container md="12" lg="12">
      <v-row dense>
        <v-col v-for="(item, index) in items" :key="index" cols="12">
          <v-card>
            <v-card-title class="text-h5 pb-0">
              <p>{{ item.name }}</p>
            </v-card-title>

            <v-card-actions>
              <v-card-subtitle class="text-h6">
                Precio:
              </v-card-subtitle>
              <v-container>
                <v-row>
                  <v-col>
                    <v-btn text class="text-h6 success"> ${{ item.price }} </v-btn>
                  </v-col>
                  <v-col>
                    <div class="text-end">
                      <v-btn @click="deleteItem(index)" color="red" icon>
                        <v-icon>
                          mdi-delete
                        </v-icon>
                      </v-btn>
                    </div>
                  </v-col>
                </v-row>
              </v-container>

            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-navigation-drawer>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {
      items: {},
      drawer: false,
      total: 0,
    };
  },
  computed: {
...mapState(['paymentWidget','paymentItems'])
  },
  watch: {
    'paymentWidget'() {
      this.drawer = true;
    },
    'paymentItems'(newValue) {
      this.items = newValue;
    },
    items(newValue) {
      console.log(newValue);
      if(newValue){
        let sumaTotal = newValue.map(item => item.price).reduce((prev,curr) => prev + curr, 0)
        this.total = sumaTotal
        // console.log(sumaTotal);
      }
    },
  },
  methods: {
    deleteItem(index) {
      this.$delete(this.items, index)
    }
  },
}
</script>

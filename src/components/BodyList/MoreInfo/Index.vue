<template>
  <v-dialog width="600" persistent v-model="modalInfo">
    <v-card>
      <v-container class="mb-0">
        <v-btn @click="closeModal" icon>
          <v-icon> mdi-close </v-icon>
        </v-btn>
      </v-container>
      <v-container>
          <p class="title text-center">{{informations.name}}</p>
        <div class="d-flex align-center justify-center my-4">
          <v-img contain max-height="auto" max-width="200" eager :src="informations.photo" />
        </div>
        <v-container>
            <p class="subtitle-1">{{informations.description}}</p>
        </v-container>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      informations: {},
    };
  },
  watch: {
    information(newValue) {
      console.log("watch", newValue);
      if (newValue) {
        this.informations = newValue;
      }
    },
  },
  computed: {
    ...mapState(["modalInfo", "information"]),
  },
  methods: {
    ...mapMutations(["setModalInfo"]),

    closeModal() {
      this.$store.commit("setModalInfo", false);
    },
  },
};
</script>

<style>
</style>
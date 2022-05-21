import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    modalInfo:false,
    information:[],
    paymentWidget: false,
    paymentItems: [],
    idCategory:null,

  },
  getters: {

  },
  mutations: {
    setIdCategory(state, val){
      state.idCategory = val
      // console.log("ID",val)
    },
    setPaymentItems(state, value) {
      state.paymentItems.push(value);
    },
    setPaymentWidget(state, value) {
      state.paymentWidget = value;
    },    
    setModalInfo(state,val){
      state.modalInfo = val
    },
    setInformation(state,val){
      state.information = val
    }
  },
  actions: {
  },
  modules: {
  }
})

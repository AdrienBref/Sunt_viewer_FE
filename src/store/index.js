import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    title: '',
    volteadora: {
      activa: false,
      corriente: 0,
      cilindro: false,
    },
  },
  getters: {
    title: (state) => state.title,
    voltactivo: (state) => state.volteadora.activa,
    voltconsumo: (state) => state.volteadora.corriente,
    codigo: (state) => state.codigo,
  },
  mutations: {
    SET_TITLE: (state, data) => {
      state.title = data 
    },
    SET_VOLTEADORA_CORRIENTE: (state, data) => {
      state.volteadora.corriente = data
    },
    SET_CODIGO: (state, data) => {
      state.codigo = data
    }
  },
  actions: {
    setTitle: (context, data) => {
      axios.get('http://localhost:3000/').then((response) => {
        context.commit('SET_TITLE', data + response.data)
      })
    },
    setCodigo: (context,data)=>{
      
      axios.get('http://localhost:3000/').then((response)=>{
        context.commit('SET_CODIGO',data + response.data)
      })
    
    },
    setDataback: (context, data) => {
      var optionAxios = {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }
      axios
        .post('http://localhost:3000/der/', data, optionAxios)
        .then(function (response) {
          console.log(response)
          context.commit('SET_VOLTEDORA_CORRIENTE', response)
        })
        .catch(function (error) {
          console.log(error)
        })
    },
  },
  modules: {},
})

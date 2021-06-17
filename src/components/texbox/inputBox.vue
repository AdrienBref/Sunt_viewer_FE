<template>
  <div class="input-box">
    <label class="box-texto">Formulario de entrada</label>
    <input class="box-input" type="text" v-model="data.name" />
    <button class="box-btn" @click="onOK">OK</button>

  </div>
</template>

<script>
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()

    let data = {
      name: '',
      codigo: '',
    }
    function onOK() {
      store.dispatch('setTitle', data.name)
      
    }
    // function refresh(){

    //   setInterval(function(){

    //     store.dispatch('setTitle', data.codigo)
    
    //   }, 500);
      
     
      
    // }
    
    return {
      onOK,
      data,
      
      
    }
  },
}
</script>

<style>
.input-box {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  gap: 20px;
}
.box-input {
  grid-column: 1/4;
}
.box-btn {
  grid-column: 4/-1;
  grid-row: 3/6;
}
.box-texto {
  grid-column: 1/-1;
  grid-row: 1/3;
}
</style>

<template>
  <div class="about">
    <h2>Log: {{ titulo }}</h2>
    <h2 @click="refresh">Code: {{ codigo }}</h2>
    <BotonActivo :elemento="boton1" :onClick="pulsa" />
    <div v-if="show">hola estoy aqui</div>
    <InputCaja />
    <BotonActivo :elemento="boton1" :onClick="postExample" />
  </div> 
</template>
<script>
import { ref, computed} from 'vue'
import { useStore } from 'vuex'
import BotonActivo from '../components/button/Botonactivo'
import InputCaja from '../components/texbox/inputBox'

export default {
  components: {
    BotonActivo,
    InputCaja,
  },
  setup() {
    const store = useStore()
    const boton1 = {
      name: 'text',
    }
    const titulo = computed(() => {
      return store.getters.title
    })
    // const codigo = computed(()=>{
      
    //   return store.getters.codigo

    // })

    // const codigo = store.getters.codigo


    let show = ref(true)

    let data = {
      codigo:'' 
    }
   

    function pulsa() {
      console.log('hopla')
      show.value = !show.value
    }
    function postExample() {
      console.log('post')
      store.dispatch('setDataback', {
        variable: 300,
        rw: true,
      })
    }

    function refresh(){

      setInterval(function(){
        
        store.dispatch('setTitle', data.codigo)
    
      }, 500);

    }

    return {
      pulsa,
      postExample,
      titulo,
      boton1,
      show,
      data,
      refresh,
    }
  },
}
</script>

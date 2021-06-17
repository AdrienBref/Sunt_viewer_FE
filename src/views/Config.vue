<template>
  <div class="about">
    <h1>This is an about config</h1>
    <h1>This is an about config</h1>
    <BotonActivo
      v-for="(elemento, key) in nombres"
      v-bind:key="key"
      :elemento="elemento"
      :onClick="onClick"
    />
  </div>
</template>

<script>
import BotonActivo from '../components/button/Botonactivo'
export default {
  components: {
    BotonActivo,
  },
  setup() {
    let nombres = [
      {
        name: 'pablo',
        id: 1,
      },
      {
        name: 'pedro',
        id: 2,
      },
      {
        name: 'adrian',
        id: 3,
      },
    ]
    function onClick(data) {
      console.log('pulso ', data)
    }
    function onClickPedro() {
      console.log('pulso pedro')
    }
    function onClickPablo() {
      console.log('pulso pablo')
    }
    return {
      onClick,
      onClickPedro,
      onClickPablo,
      nombres,
    }
  },
}
</script>

<style></style>

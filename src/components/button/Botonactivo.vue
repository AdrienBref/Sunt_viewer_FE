<template>
  <button class="btn-activo" @click="onClick(elemento.id)">
    {{ elemento.name }}
  </button>
</template>

<script>
export default {
  props: {
    elemento: {
      type: Object,
    },
    onClick: Function,
  },
  setup() {},
}
</script>

<style>
.btn-activo {
  background: #21b43a;
  border: 1px solid black;
  border-radius: 5px;
  height: 30px;
  width: 50px;
}
</style>

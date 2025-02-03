<template>
  <div ref="dosbox" class="jsdos-container"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

import "/web-projects/assets/tcpp/js-dos.js"
const dosbox = ref(null)

onMounted(() => {
  const dos = new Dos(dosbox.value, {
    style: 'none', 
    emulator: 'dosbox'
  })

  dos.run('/web-projects/assets/tcpp/turbocpp.jsdos') // Path from public directory
})
</script>

<style>
.jsdos-container {
  width: 100%;
  height: 600px;
  border: 1px solid #ccc;
}
</style>

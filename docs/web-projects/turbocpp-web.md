<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const dosContainer = ref(null)
const errorMessage = ref('')
const loading = ref(true)
let dosInstance = null

// Dynamic JS-DOS loader
async function loadJsDos() {
  try {
    // Load js-dos.js from assets
    const { default: Dos } = await import('./assets/tcpp/js-dos.js')
    
    // Find turbocpp file using wildcard
    const turbocppFiles = import.meta.glob('./assets/tcpp/turbocpp-*.jsdos')
    const [firstFile] = Object.keys(turbocppFiles)
    
    if (!firstFile) {
      throw new Error('Turbo C++ file not found in assets/tcpp')
    }

    // Initialize DOS instance
    dosInstance = await Dos(dosContainer.value, {
      url: firstFile.replace('assets/', '/assets/') // Adjust path for VitePress
    })

    // Set up responsive container
    const updateSize = () => {
      dosContainer.value.style.height = `${dosContainer.value.offsetWidth * 0.75}px`
    }
    window.addEventListener('resize', updateSize)
    updateSize()

    // Cleanup
    onBeforeUnmount(() => {
      window.removeEventListener('resize', updateSize)
      dosInstance?.stop()
    })

    loading.value = false
  } catch (err) {
    errorMessage.value = `Error loading DOS environment: ${err.message}`
    loading.value = false
  }
}

onMounted(() => {
  loadJsDos()
})
</script>

<template>
  <div class="dos-wrapper">
    <div v-if="loading" class="loading">Initializing Turbo C++ environment...</div>
    <div v-else-if="errorMessage" class="error">{{ errorMessage }}</div>
    <div 
      v-else
      ref="dosContainer"
      class="dos-container"
      style="width: 100%; background: black; overflow: hidden;"
    ></div>
  </div>
</template>

<style scoped>
.dos-wrapper {
  position: relative;
  margin: 1rem 0;
  border: 2px solid #2c3e50;
  border-radius: 4px;
}

.loading, .error {
  padding: 2rem;
  text-align: center;
  background: #f8f9fa;
  color: #2c3e50;
}

.error {
  color: #e74c3c;
  background: #fdeded;
}

.dos-container :deep(canvas) {
  image-rendering: crisp-edges;
  width: 100% !important;
  height: 100% !important;
}
</style>

<setup />
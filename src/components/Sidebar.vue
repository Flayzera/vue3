<template>
  <header>
    <h1>
      <img src="../assets/logo.png" alt="">
    </h1>
    <button class="button" @click="changeTheme">
      {{ buttonText }}
    </button>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SideBar',

  emits: ['changedTheme'],

  methods: {
    changeTheme() {
      this.darkModeActive = !this.darkModeActive
      this.$emit('changedTheme', this.darkModeActive)
    }
  },

  computed: {
    buttonText() {
      if(this.darkModeActive) {
        return 'Desativar modo escuro'
      }
      return 'Ativar modo escuro'
    }
  },

  data() {
    return {
      darkModeActive: false
    }
  }
})
</script>

<style scoped>

header {
  padding: 1rem;
  background: #0d3b66;
  width: 100%;
  height: 100vh;
  text-align: center;
}

@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}
</style>
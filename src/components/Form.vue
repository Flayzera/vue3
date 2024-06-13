<template>
  <div class="box form">
    <div class="columns">
      <div class="column is-8" role="form" aria-label="Formulario para criacao de uma nova tarefa">
        <input type="text" class="input" placeholder="Qual tarefe você deseja iniciar?" v-model="description"/>
      </div>
      <div class="column">
        <Timer @finishedTimer="finishTask"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

import Timer from '@/components/Timer.vue'

export default defineComponent({
  name: "Form",

  emits: ['savingTask'],

  components: {
    Timer
  },

  methods: {
    finishTask(elapsedTime: number) : void {
      this.$emit('savingTask', {
        durationInSeconds: elapsedTime,
        description: this.description
      })

      this.description = ''
    }
  },

  data() {
    return {
      description: ''
    }
  }
})
</script>

<style>
.form {
  color: var(--text-primary);
  background-color: var(--bg-primary);
}
</style>


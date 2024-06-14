<template>
  <div class="box form">
    <div class="columns">
      <div class="column is-5" role="form" aria-label="Formulario para criacao de uma nova tarefa">
        <input type="text" class="input" placeholder="What task do you want to start?" v-model="description"/>
      </div>
      <div class="column is-3">
        <div class="select">
          <select v-model="projectId">
            <option value="">Select the project</option>
            <option 
              :value="project.id" 
              v-for="project in projects"
              :key="project.id"
            >
            {{ project.name }}
            </option>
          </select>
        </div>
      </div>
      <div class="column">
        <Timer @finishedTimer="finishTask"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

import Timer from '@/components/Timer.vue'

import { useStore } from '@/store'


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
        description: this.description,
        project: this.projects.find(proj => proj.id == this.projectId)
      })

      this.description = ''
    }
  },

  data() {
    return {
      description: '',
      projectId: ''
    }
  },

  setup() {
    const store = useStore()

    return {
      projects: computed(() => store.state.projects)
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


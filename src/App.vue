<template>
  <main class="columns is-gapless is-multiline" :class="{'dark-mode': darkModeActive}">
    <div class="column is-one-quarter">
      <Sidebar @changedTheme="changeTheme" />
    </div>
    <div class="column is-three-quarter content">
      <Form @savingTask="saveTask" />
      <div class="lista">
        <Task v-for="(task, index) in tasks" :key="index" :task="task" />
        <Box v-if="tasks.length === 0">
          Você não está muito produtivo hoje!
        </Box>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Sidebar from '@/components/Sidebar.vue'
import Form from '@/components/Form.vue'
import Task from '@/components/Task.vue'
import Box from '@/components/Box.vue'

import ITarefa from './interfaces/ITarefa'


export default defineComponent({
  name: 'App',

  components: {
    Sidebar,
    Form,
    Task,
    Box
  },

  methods: {
    saveTask(task: ITarefa) {
      this.tasks.push(task)
    },

    changeTheme(darkModeActive: boolean) {
      this.darkModeActive = darkModeActive
    }
  },

  data() {
    return {
      tasks: [] as ITarefa[],
      darkModeActive: false
    }
  }
})
</script>

<style>
.lista {
  padding: 1.25rem;
}

main {
  --bg-primary: #fff;
  --text-primary: #000;
}

main.dark-mode {
  --bg-primary: #2b2d42;
  --text-primary: #ddd;
}

.content {
  background-color: var(--bg-primary);
}
</style>

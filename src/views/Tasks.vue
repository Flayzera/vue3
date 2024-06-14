<template>
  <Form @savingTask="saveTask" />
  <div class="lista">
    <Box v-if="tasks.length === 0">
      You're not very productive today!
    </Box>
    <Task v-for="(task, index) in tasks" :key="index" :task="task" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import ITask from '../interfaces/ITask'

import Form from '../components/Form.vue'
import Box from '../components/Box.vue'
import Task from '../components/Task.vue'

export default defineComponent({
  name: 'App',

  components: {
    Form,
    Task,
    Box
  },

  methods: {
    saveTask(task: ITask) {
      this.tasks.push(task)
    }
  },

  data() {
    return {
      tasks: [] as ITask[]
    }
  }
})
</script>

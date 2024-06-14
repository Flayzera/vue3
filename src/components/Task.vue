<template>
  <Box>
    <div class="columns">
      <div class="column is-4">
        {{ task.description || 'Task without description' }}
      </div>
      <div class="column is-3">
        {{ task.project?.name || 'N/A' }}
      </div>
      <div class="column">
        <Stopwatch :timeInSeconds="task.durationInSeconds"/>
      </div>
    </div>
  </Box>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

import Stopwatch from '@/components/Stopwatch.vue'
import Box from '@/components/Box.vue'

import ITarefa from '../interfaces/ITask'

export default defineComponent({
  name: 'Task',

  components: {
    Stopwatch,
    Box
  },

  props: {
    task: {
      type: Object as PropType<ITarefa>,
      required: true
    }
  }
})
</script>


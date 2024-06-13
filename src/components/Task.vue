<template>
  <Box>
    <div class="columns">
      <div class="column is-7">
        {{ task.description || 'Tarefa sem descrição' }}
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

import ITarefa from '../interfaces/ITarefa'

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


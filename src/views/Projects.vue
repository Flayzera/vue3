<template>
  <div class="projects">
    <h1 class="title">Projects</h1>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent ({
  name: 'Projects'
})
</script>

<style>
.projects {
  padding: 1.25rem;
}
</style>
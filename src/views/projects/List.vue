<template>
  <section>
    <router-link to="/projects/new" class="button">
      <span class="icon is-small">
        <i class="fas fa-plus"></i>
      </span>
      <span>New project</span>
    </router-link>
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="project in projects" :key="project.id">
          <td>{{ project.id }}</td>
          <td>{{ project.name }}</td>
          <td>
            <router-link :to="`/projects/${project.id}`" class="button">
              <span class="icon is-small">
                <i class="fas fa-pencil-alt"></i>
              </span>
            </router-link>
            <button class="button ml-2 is-danger" @click="deleting(project.id)">
              <span class="icon is-smal">
                <i class="fas fa-trash"></i>
              </span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>

</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

import { useStore } from '@/store'
import { deleteProject } from '@/store/type-mutations'


export default defineComponent({
  name: 'List',

   methods: {
    deleting(id: string) {
      this.store.commit(deleteProject, id)
    }
   },

  setup() {
    const store = useStore()

    return {
      projects: computed(() => store.state.projects),
      store
    }
  }
})

</script>
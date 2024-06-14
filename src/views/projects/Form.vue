<template>
  <section>
    <form @submit.prevent="save">
      <div class="field">
        <label for="projectName" class="label">
          Project Name
        </label>
        <input type="text" class="input" v-model="projectName" id="projectName">
      </div>
      <div class="field">
        <button class="button" type="submit">
          Save
        </button>
      </div>
    </form>
  </section>

</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { useStore } from '@/store'
import { addProject, editProject} from '@/store/type-mutations'

import { TypeNotification } from '@/interfaces/INotify'

import useNotifier from '@/hooks/notifier'


export default defineComponent({
  name: 'Form',

  props: {
    id: {
      type: String
    }
  },

  methods: {
    save() {
      if(this.id) {
        this.store.commit(editProject, {
          id: this.id,
          name: this.projectName
        })
      } else {
        this.store.commit(addProject, this.projectName)
      }

      this.projectName = ''
      this.notifier(TypeNotification.warning,'Excelent',  'The project was registered successfully')
      this.$router.push('/projects')
    }
  },

  data() {
    return {
      projectName: ''
    }
  },

  mounted() {
    if(this.id) {
      const project = this.store.state.projects.find(proj => proj.id === this.id)

      this.projectName = project?.name || ''
    }
  },

  setup() {
    const store = useStore()
    const { notifier } = useNotifier()

    return {
      store,
      notifier
    }
  }
})

</script>
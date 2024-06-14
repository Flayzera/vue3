<template>
  <main class="columns is-gapless is-multiline" :class="{'dark-mode': darkModeActive}">
    <div class="column is-one-quarter">
      <Sidebar @changedTheme="changeTheme" />
    </div>
    <div class="column is-three-quarter content">
      <Notifications />
     <router-view></router-view>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'


import Sidebar from '@/components/Sidebar.vue'
import Notifications from '@/components/Notifications.vue'

export default defineComponent({
  name: 'App',

  components: {
    Sidebar,
    Notifications
    
  },

  methods: {
    changeTheme(darkModeActive: boolean) {
      this.darkModeActive = darkModeActive
    }
  },

  data() {
    return {
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

<template>
  <header>
    <h1>
      <img src="../assets/logo.png" alt="">
    </h1>
    <div class="has-text-centered">
      <button class="button" @click="changeTheme">
      {{ buttonText }}
    </button>
    </div>
    <nav class="panel mt-5">
      <ul>
        <li>
          <router-link to="/" class="link">
            <i class="fas fa-tasks"></i>
            Tasks
          </router-link>
        </li>
        <li>
          <router-link to="/projects" class="link">
            <i class="fas fa-project-diagram"></i>
            Projects
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SideBar',

  emits: ['changedTheme'],

  methods: {
    changeTheme() {
      this.darkModeActive = !this.darkModeActive
      this.$emit('changedTheme', this.darkModeActive)
    }
  },

  computed: {
    buttonText() {
      if(this.darkModeActive) {
        return 'Disable dark mode'
      }
      return 'Enable dark mode'
    }
  },

  data() {
    return {
      darkModeActive: false
    }
  }
})
</script>

<style scoped>

header {
  padding: 1rem;
  background: #0d3b66;
  width: 100%;
  height: 100vh;
  text-align: center;
}

@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}

.panel li {
    margin: 8px 0;
}
.link {
    color: #fff;
}
.link:hover {
    color: #FAF0CA;
}
.link.router-link-active {
    color: #FAF0CA;
}
</style>
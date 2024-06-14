import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router"

import Tasks from '@/views/Tasks.vue'
import Projects from '@/views/Projects.vue'
import Form from "@/views/projects/Form.vue"
import List from "@/views/projects/List.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Tasks',
    component: Tasks
  },
  {
    path: '/projects',
    component: Projects,
    children: [
      {
        path: '',
        name: 'Projects', 
        component: List
      },
      {
        path: 'new',
        name: 'New Projects', 
        component: Form
      },
      {
        path: ':id',
        name: 'Edit Projects', 
        component: Form,
        props: true
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
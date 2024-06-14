import IProject from '@/interfaces/IProject'
import { InjectionKey } from 'vue'
import { Store, createStore, useStore as vuexUseStore } from 'vuex'
import { addProject, editProject, deleteProject, notify } from './type-mutations'
import { INotify } from '@/interfaces/INotify'

interface State {
  projects: IProject[],
  notifications: INotify[]
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    projects: [],
    notifications: []
  },

  mutations: {
    [addProject] (state, projectName: string) {
      const project = {
        id: new Date().toISOString(),
        name: projectName
      } as IProject

      state.projects.push(project)
    },

    [editProject] (state, project: IProject) {
      const index = state.projects.findIndex(proj => proj.id == project.id)

      state.projects[index] = project
    },

    [deleteProject] (state, id: string) {
      state.projects = state.projects.filter(proj => proj.id !== id)
    },

    [notify] (state, newNotification: INotify) {
      newNotification.id = new Date().getTime()

      state.notifications.push(newNotification)

      setTimeout(() => {
        state.notifications = state.notifications.filter(notification => notification.id !== newNotification.id)
      }, 3000)
    }
  }
})

export function useStore(): Store<State> {
  return vuexUseStore(key)
}
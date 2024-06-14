import { TypeNotification } from '@/interfaces/INotify'
import { notify } from '@/store/type-mutations'

import { store } from '@/store'

export const notificationMixin = {
  methods: {
    notify(type: TypeNotification, title: string, text: string): void {
      store.commit(notify, {
        title,
        text,
        type
      })
    }
  }
}
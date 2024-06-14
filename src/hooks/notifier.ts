import { TypeNotification } from "@/interfaces/INotify"

import { store } from "@/store"
import { notify } from "@/store/type-mutations"

type Notifier = {
  notifier: (type: TypeNotification, title: string, text: string) => void
}

export default () : Notifier => {
  
  const notifier = (type: TypeNotification, title: string, text: string) : void => {
    store.commit(notify, {
      title,
      text,
      type
    })
  }

  return {
    notifier
  }
}
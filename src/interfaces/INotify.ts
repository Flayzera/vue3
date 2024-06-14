export enum TypeNotification {
  sucess,
  warning,
  danger
}

export interface INotify {
  title: string
  text: string
  type: TypeNotification
  id: number
}
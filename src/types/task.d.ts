export interface InterfaceBasicTask {
  /** Id of the task */
  id: string
  /** Title of the task */
  title: string
  /** Current state of the task */
  state: string
}

export interface InterfaceTask {
  task: InterfaceBasicTask
  /** Event to change the task to archived */
  onArchiveTask: (id: string) => void
  /** Event to change the task to pinned */
  onPinTask: (id: string) => void
}

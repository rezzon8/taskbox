import { InterfaceBasicTask } from './task'

interface InterfaceTaskList {
  /** Checks if it's in loading state */
  loading: boolean
  /** The list of tasks */
  tasks: InterfaceBasicTask[]
  /** Event to change the task to pinned */
  onPinTask: (id: string) => void
  /** Event to change the task to archived */
  onArchiveTask: (id: string) => void
}

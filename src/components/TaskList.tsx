import React from 'react'

import Task from './Task'

import { InterfaceBasicTask } from './../types/task'

import { InterfaceTaskList } from './../types/taskList'

export default function TaskList({
  loading = false,
  tasks,
  onPinTask,
  onArchiveTask
}: InterfaceTaskList): React.ReactElement {
  const events = {
    onPinTask,
    onArchiveTask
  }
  const LoadingRow = (
    <div className="loading-item">
      <span className="glow-checkbox" />
      <span className="glow-text">
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  )
  if (loading) {
    return (
      <div className="list-items" data-testid="loading" key={'loading'}>
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    )
  }
  if (tasks.length === 0) {
    return (
      <div className="list-items" key={'empty'} data-testid="empty">
        <div className="wrapper-message">
          <span className="icon-check" />
          <p className="title-message">You have no tasks</p>
          <p className="subtitle-message">Sit back and relax</p>
        </div>
      </div>
    )
  }

  const tasksInOrder = [
    ...tasks.filter((t: InterfaceBasicTask) => t.state === 'TASK_PINNED'),
    ...tasks.filter((t: InterfaceBasicTask) => t.state !== 'TASK_PINNED')
  ]
  return (
    <div className="list-items">
      {tasksInOrder.map((task: InterfaceBasicTask) => (
        <Task key={task.id} task={task} {...events} />
      ))}
    </div>
  )
}

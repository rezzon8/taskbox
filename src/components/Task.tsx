import React, { ReactElement, ReactNode } from 'react'

export default function Task({
  task: { id, title, state },
  onArchiveTask,
  onPinTask
}: interfaceTask): ReactElement {
  return (
    <div className={`list-item ${state}`}>
      <label
        htmlFor="checked"
        aria-label={`archiveTask-${id}`}
        className="checkbox"
      >
        <input
          type="checkbox"
          disabled={true}
          name="checked"
          id={`archiveTask-${id}`}
          checked={state === 'TASK_ARCHIVED'}
        />
        <span className="checkbox-custom" onClick={() => onArchiveTask(id)} />
      </label>

      <label htmlFor="title" aria-label={title} className="title">
        <input
          type="text"
          value={title}
          readOnly={true}
          name="title"
          placeholder="Input title"
        />
      </label>

      {state !== 'TASK_ARCHIVED' && (
        <button
          className="pin-button"
          onClick={() => onPinTask(id)}
          id={`pinTask-${id}`}
          aria-label={`pinTask-${id}`}
          key={`pinTask-${id}`}
        >
          <span className={`icon-star`} />
        </button>
      )}
    </div>
  )
}

interface interfaceTask {
  task: {
    /** Id of the task */
    id: string
    /** Title of the task */
    title: string
    /** Current state of the task */
    state: string
  }
  /** Event to change the task to archived */
  onArchiveTask: (id: string) => void
  /** Event to change the task to pinned */
  onPinTask: (id: string) => void
}

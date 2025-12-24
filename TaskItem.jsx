import { useTasks } from '../store/taskContext';

export default function TaskItem({ task }) {
  const { toggleTask, deleteTask } = useTasks();
  return (
    <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
      <div className="flex items-center gap-3">
        <input type="checkbox" checked={task.completed} onChange={() => toggleTask(task.id)} className="w-5 h-5" />
        <span className={`${task.completed ? 'line-through text-gray-400' : 'dark:text-white'}`}>{task.text}</span>
      </div>
      <button onClick={() => deleteTask(task.id)} className="text-red-500 text-sm font-bold">Delete</button>
    </div>
  );
}

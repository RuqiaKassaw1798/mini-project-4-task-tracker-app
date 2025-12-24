import { useTasks } from '../store/taskContext';

export default function Stats() {
  const { tasks } = useTasks();
  const done = tasks.filter(t => t.completed).length;
  return (
    <div className="p-6 max-w-md mx-auto bg-white dark:bg-gray-800 rounded m-4 dark:text-white">
      <h2 className="text-xl font-bold mb-4">Your Progress</h2>
      <p>Total: {tasks.length}</p>
      <p className="text-green-500">Completed: {done}</p>
      <p className="text-orange-500">Remaining: {tasks.length - done}</p>
    </div>
  );
}

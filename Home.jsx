import TaskInput from '../components/TaskInput';
import TaskItem from '../components/TaskItem';
import { useTasks } from '../store/taskContext';

export default function Home() {
  const { tasks } = useTasks();
  return (
    <div className="max-w-md mx-auto">
      <TaskInput />
      <div className="bg-white dark:bg-gray-800 rounded shadow m-4">
        {tasks.map(t => <TaskItem key={t.id} task={t} />)}
      </div>
    </div>
  );
}

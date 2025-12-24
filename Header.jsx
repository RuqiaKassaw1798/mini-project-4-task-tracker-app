import { useTasks } from '../store/taskContext';
import { Link } from 'react-router-dom';

export default function Header() {
  const { darkMode, setDarkMode } = useTasks();
  return (
    <header className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 shadow transition-colors">
      <h1 className="text-xl font-bold dark:text-white">Task Tracker</h1>
      <div className="flex gap-3 items-center">
        <Link to="/" className="text-blue-500 text-sm">Home</Link>
        <Link to="/stats" className="text-blue-500 text-sm">Stats</Link>
        <button onClick={() => setDarkMode(!darkMode)} className="p-2 bg-gray-100 dark:bg-gray-700 rounded text-sm">
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>
    </header>
  );
}

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TaskProvider } from './store/taskContext';
import Header from './components/Header';
import Home from './pages/Home';
import Stats from './pages/Stats';

export default function App() {
  return (
    <TaskProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stats" element={<Stats />} />
          </Routes>
        </div>
      </Router>
    </TaskProvider>
  );
}

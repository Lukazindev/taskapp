import React from 'react';
import Home from './src/pages/Home';
import { TasksProvider } from './src/context/TaskContext';

export default function App() {
  return (
    <TasksProvider>
      <Home />
    </TasksProvider>
  );
};

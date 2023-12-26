import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { TaskList } from "../components/TaskList";

interface IProps {
  children: React.ReactElement;
}

export interface ITask {
  id: string;
  title: string;
}


export interface ITasksContext {
  tasks: ITask[];
  addTask(task: ITask): void;
  removeTask(id: string): void;
}

const taskData = '@MyTasks:Tasks';

export const TaskContext = React.createContext<ITasksContext>(
  {} as ITasksContext,
);

export const TasksProvider: React.FunctionComponent<IProps> = ({children}) => {
  const [data, setData] = React.useState<ITask[]>([]);

  React.useEffect(() => {
    async function loadTasks() {
      const tasList = await AsyncStorage.getItem(taskData);
      if (TaskList) {
        setData(JSON.parse(tasList));
      }
    }
    loadTasks();
  }, []);

  const  addTask = async (task: ITask) => {
   try {
    const newTaskList = [...data, task];
    setData(newTaskList);
    await AsyncStorage.setItem(taskData, JSON.stringify(newTaskList));
   } catch (error) {
    throw new Error(error as string);
   }
  };

  const removeTask = async (id: string) => {
    const newTaskList = data.filter(task => task.id != id);
    setData(newTaskList);
    await AsyncStorage.setItem(taskData, JSON.stringify(newTaskList));
  }


  return (
    <TaskContext.Provider value={{tasks: data, addTask, removeTask}}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTaskList(): ITasksContext {
  const context = React.useContext(TaskContext);

  if (!context) {
    throw new Error('useTaskList deve ser usado em um taskProvider');
  }

  return context;
}

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Platform,
  TouchableOpacity,
  FlatList
} from 'react-native';
import { TaskList } from '../../components/TaskList';
import { useTaskList } from '../../context/TaskContext';

export default function Home() {
  const [newTask, setNewTask] = React.useState('');

  const {addTask} = useTaskList();


  const handleAddNewTask = () => {
    const data = {
      id: String(new Date().getTime()),
      title: newTask ? newTask : 'Task empty',
    };

    addTask(data);
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome Dev!</Text>
        <TextInput
        onChangeText={setNewTask}
        placeholderTextColor='#555'
        placeholder='Nova Tarefa...'
         style={styles.input}

        />
        <TouchableOpacity onPress={handleAddNewTask} activeOpacity={0.7} style={styles.button}>
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>

        <Text style={styles.titleTasks}>Minhas Tarefas</Text>

        <TaskList />
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  safeArea: {
    flex:1,
    backgroundColor: '#121214',
  },
  container: {
      flex:1,
      backgroundColor: '#121214',
      paddingHorizontal: 30,
      paddingVertical: 50,
    },
  title: {
    color: '#f1f1f1',
    fontSize: 24,
    fontWeight: 'bold',
  },
  titleTasks: {
    color: '#f1f1f1',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 50,
  },
  input: {
    backgroundColor: '#29292e',
    color: '#f1f1f1',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15: 12,
    marginTop: 30,
    borderRadius: 5,
  },

  button: {
    backgroundColor: '#eba417',
    padding: Platform.OS === 'ios' ? 15: 12,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#121214',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonTask: {
    backgroundColor: '#29292e',
    padding: 10,
    marginTop: 10,
    borderRadius: 50,
    alignItems: 'center',
  },
  titleTask: {
    color: '#f1f1f1',
    fontSize: 20,
    fontWeight: 'bold',
  }
});

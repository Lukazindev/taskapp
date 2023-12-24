import React from "react";
import {
   FlatList,
   TouchableOpacity,
   StyleSheet,
    Text }
 from "react-native";

interface Task {
  id: string;
  title: string;
}

interface TaskListPros {
  tasks: Task[];
}

export const TaskList = ({tasks}: TaskListPros) => {
  return (
    <FlatList
          data={tasks}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.buttonTask}>
            <Text style={styles.titleTask}>{item.title}</Text>
          </TouchableOpacity>
          )}
        />
  );
}

const styles = StyleSheet.create({
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

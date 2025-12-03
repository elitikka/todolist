import React from 'react'; 
import { View, Text, StyleSheet, Button } from 'react-native'; 
import { SwipeListView } from 'react-native-swipe-list-view'; 
import AddItem from './components/AddItem';
import Toggle from './components/Toggle';
import type { Item } from './types/types';
import { useTodos } from './hooks/useTodos';

export default function App() {
  const { todos, addTodo, toggleTodo, removeTodo } = useTodos([]);

return ( 
<View style={styles.container}> 
  <Text style={styles.title}>Todo List</Text> 

  <AddItem onAdd={addTodo}/>

  <SwipeListView
     data={todos}
     keyExtractor={(item: Item) => item.id}
     renderItem={({ item }) => (
       <Toggle item={item} onToggle={toggleTodo} />
     )}
     renderHiddenItem={({ item }) => (
       <View style={styles.rowBack}>
         <Button
           title="Delete"
           color="#d11a2a"
           onPress={() => removeTodo(item.id)}
         />
       </View>
     )}
     rightOpenValue={-75}
     disableRightSwipe
    />
  </View>
 );
}
 
const styles = StyleSheet.create({ 
  container: { 
    flex: 1, 
    paddingTop: 60, 
    paddingHorizontal: 16, 
    backgroundColor: '#fff', 
  }, 
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 16, 
    textAlign: 'center', 
  }, 
  rowFront: { 
    backgroundColor: '#f9f9f9', 
    borderBottomWidth: 1, 
    borderColor: '#eee', 
    padding: 16, 
  }, 
  rowBack: { 
    backgroundColor: '#ddd', 
    flex: 1, 
    alignItems: 'flex-end', 
    justifyContent: 'center', 
    paddingRight: 5, 
  }, 
  inputRow: { 
    flexDirection: 'row', 
    marginBottom: 16, 
  }, 
  input: { 
    flex: 1, 
    borderWidth: 1, 
    borderColor: '#ccc', 
    borderRadius: 4, 
    padding: 8, 
    marginRight: 8, 
  },  
}); 
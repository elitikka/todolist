import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react'; 
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'; 
import { SwipeListView } from 'react-native-swipe-list-view'; 
import AddItem from './components/AddItem';
interface Item { 
id: string; 
name: string; 
done: boolean;
} 

const STORAGE_KEY = 'TODO_LIST_ITEMS'; 

export default function App () { 
const [items, setItems] = useState<Item[]>([]); 

// Load items from AsyncStorage on mount 
useEffect(() => { 
  (async () => { 
    try { 
      const json = await AsyncStorage.getItem(STORAGE_KEY); 
      if (json) setItems(JSON.parse(json)); 
    } catch (e) { 
      // handle error 
    } 
  })(); 
}, []);

// Save items to AsyncStorage whenever items change 
useEffect(() => { 
  AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(items)); 
}, [items]); 


return ( 
<View style={styles.container}> 
  <Text style={styles.title}>Todo List</Text> 

  <AddItem onAdd={(name) => {
    setItems(prev => [
      ...prev,
      { id: Date.now().toString(), name, done: false },
    ]);
  }} />

  <SwipeListView 
    data={items}
    keyExtractor={item => item.id} 
    renderItem={({ item }) => ( 
      <View style={styles.rowFront}> 
        <Text>{item.name}</Text> 
      </View> 
    )} 
    renderHiddenItem={({ item }) => ( 
      <View style={styles.rowBack}> 
        <Button 
          title="Delete" 
          color="#d11a2a" 
          onPress={() => { 
            setItems(prev => prev.filter(i => i.id !== item.id)); 
          }} 
        /> 
      </View> 
    )} 
    rightOpenValue={-75} 
    disableRightSwipe 
    /> 
    </View> 
  ); 
}; 
 
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
 
//export default App; 
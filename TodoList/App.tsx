import React, { useState } from 'react'; 
import { View, Text, StyleSheet } from 'react-native'; 
import { SwipeListView } from 'react-native-swipe-list-view'; 
interface Item { 
id: string; 
name: string; 
} 
export default function App () { 
const [items, setItems] = useState<Item[]>([]); 
return ( 
<View style={styles.container}> 
<Text style={styles.title}>Shopping List</Text> 
<SwipeListView 
data={items} 
keyExtractor={item => item.id} 
renderItem={({ item }) => ( 
<View style={styles.rowFront}> 
 
            <Text>{item.name}</Text> 
          </View> 
        )} 
        renderHiddenItem={() => <View style={styles.rowBack} />} 
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
    paddingRight: 20, 
  }, 
}); 
 
//export default App; 
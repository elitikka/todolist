import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export type AddItemProps = {
    onAdd: (name: string) => void;
};

export default function AddItem({ onAdd }: AddItemProps) {
    const [input, setInput] = useState('');

  const handleAdd = () => {
    const trimmed = input.trim();

    if (trimmed.length === 0) return;

    onAdd(trimmed);
    setInput('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add item"
        value={input}
        onChangeText={setInput}
        returnKeyType="done"
        onSubmitEditing={handleAdd}
      />

      <Button title="Add" onPress={handleAdd} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
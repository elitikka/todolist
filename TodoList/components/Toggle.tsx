import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import type { Item } from '../types/types';


export type ToggleProps = {
  item: Item;
  onToggle: (id: string) => void;
};

export default function Toggle({ item, onToggle }: ToggleProps) {
  return (
    <Pressable
      onPress={() => onToggle(item.id)}
      style={({ pressed }) => [
        styles.row,
        pressed && styles.pressedRow, // only darken when pressing
      ]}
    >
      <Text
        style={[
          styles.text,
          item.done ? styles.doneText : null, // strike-through only if done
        ]}
      >
        {item.name}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 1,
    borderColor: '#eee',
    padding: 16,
  },
  pressedRow: {
    backgroundColor: '#e0e0e0', // darker when pressing
  },
  text: {
    fontSize: 16,
    color: '#000',
  },
  doneText: {
    textDecorationLine: 'line-through',
    color: '#3d3d3dff',
  },
});
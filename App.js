import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [prompt, setPrompt] = useState('');
  const [layoutConfig, setLayoutConfig] = useState({
    backgroundColor: 'white',
    showProfile: true,
    fontSize: 16,
  });

  const handlePrompt = () => {
    if (prompt.toLowerCase() === 'make text large') {
      setLayoutConfig({ ...layoutConfig, fontSize: 24 });
    } else if (prompt.toLowerCase() === 'hide profile') {
      setLayoutConfig({ ...layoutConfig, showProfile: false });
    } else if (prompt.toLowerCase() === 'change background') {
      setLayoutConfig({ ...layoutConfig, backgroundColor: 'green'});
    } else if (prompt.toLowerCase() === 'reset') {
      setLayoutConfig({ backgroundColor: 'white', showProfile: true, fontSize: 16 });
    }
    setPrompt('');
  };

  return (
    <View style={[styles.container, { backgroundColor: layoutConfig.backgroundColor }]}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Mobile UI Playground</Text>

      {layoutConfig.showProfile && (
        <View style={styles.card}>
          <Text style={{ fontSize: layoutConfig.fontSize }}>Name: Bhanu Sravani</Text>
          <Text style={{ fontSize: layoutConfig.fontSize }}>Role: Software Developer</Text>
        </View>
      )}

      <TextInput
        style={styles.input}
        value={prompt}
        onChangeText={setPrompt}
        placeholder="Type your command..."
      />

      <Button title="Submit Prompt" onPress={handlePrompt} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    alignItems: 'center',
    gap: 10,
  },
  card: {
    padding: 20,
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 20,
    backgroundColor: 'lightgray',
  },
  input: {
    borderWidth: 1,
    width: '80%',
    padding: 10,
    marginVertical: 10,
  },
});

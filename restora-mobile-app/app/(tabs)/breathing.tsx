import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const BreathingExerciseScreen: React.FC = () => {
  const router = useRouter();

  const startBreathingExercise = () => {
    console.log('Starting breathing exercise...');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Breathing Exercises</Text>
        <Text style={styles.subHeaderText}>Calm your mind and body with guided exercises</Text>
      </View>

      {/* Breathing Instructions */}
      <View style={styles.instructionsContainer}>
        <Text style={styles.instructionsText}>Follow these steps to relax:</Text>
        <Text style={styles.breathingStep}>1. Breathe in deeply through your nose for 4 seconds.</Text>
        <Text style={styles.breathingStep}>2. Hold your breath for 7 seconds.</Text>
        <Text style={styles.breathingStep}>3. Exhale slowly through your mouth for 8 seconds.</Text>
        <Text style={styles.breathingStep}>4. Repeat for 5-10 cycles to feel calm and relaxed.</Text>
      </View>

      {/* Start Button */}
      <TouchableOpacity style={styles.startButton} onPress={startBreathingExercise}>
        <Ionicons name="play-circle-outline" size={40} color="white" />
        <Text style={styles.startButtonText}>Start Breathing Exercise</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
    justifyContent: 'space-between',
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
  },
  subHeaderText: {
    fontSize: 16,
    color: '#777',
    marginTop: 5,
    textAlign: 'center',
  },
  instructionsContainer: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 20,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  instructionsText: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
    color: '#333',
  },
  breathingStep: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  startButton: {
    backgroundColor: '#6C63FF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  startButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 10,
  },
});

export default BreathingExerciseScreen;

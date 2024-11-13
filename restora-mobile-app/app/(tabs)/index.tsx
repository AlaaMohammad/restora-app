import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen: React.FC = () => {
  const router = useRouter();
  const [predictedMood, setPredictedMood] = useState<string>('');

  useEffect(() => {
    // Placeholder for mood prediction logic based on period data
    const predictMood = () => {
      // Example: Random mood prediction
      const moods = ['Happy', 'Sad', 'Anxious', 'Calm'];
      const randomMood = moods[Math.floor(Math.random() * moods.length)];
      setPredictedMood(randomMood);
    };

    predictMood();
  }, []);

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Welcome to Elara</Text>
        <Text style={styles.subHeaderText}>Your AI companion for mental wellness</Text>
      </View>

      {/* Mood Tracking Section */}
      <View style={styles.moodTrackerContainer}>
        <Text style={styles.moodTrackerHeader}>How are you feeling today?</Text>
        <View style={styles.moodOptionsContainer}>
          <TouchableOpacity style={styles.moodOption} onPress={() => console.log('Feeling Happy')}>
            <Ionicons name="happy-outline" size={40} color="#FFD700" />
            <Text style={styles.moodText}>Happy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.moodOption} onPress={() => console.log('Feeling Sad')}>
            <Ionicons name="sad-outline" size={40} color="#1E90FF" />
            <Text style={styles.moodText}>Sad</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.moodOption} onPress={() => console.log('Feeling Anxious')}>
            <Ionicons name="alert-circle-outline" size={40} color="#FF6347" />
            <Text style={styles.moodText}>Anxious</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.moodOption} onPress={() => console.log('Feeling Calm')}>
            <Ionicons name="leaf-outline" size={40} color="#32CD32" />
            <Text style={styles.moodText}>Calm</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Mood Prediction Section */}
      <View style={styles.predictionContainer}>
        <Text style={styles.predictionHeader}>Predicted Mood for You Today</Text>
        <Text style={styles.predictedMoodText}>{predictedMood}</Text>
      </View>

      {/* Suggested Actions */}
      <View style={styles.suggestionsContainer}>
        <Text style={styles.suggestionsHeader}>How can I help you today?</Text>
        <View style={styles.suggestionBoxContainer}>
          <TouchableOpacity style={styles.suggestionBox} onPress={() => router.push('/chat')}>
            <Text style={styles.suggestionTitle}>Chat with Elara</Text>
            <Text style={styles.suggestionSubtitle}>Discuss your thoughts or feelings</Text>
            <Ionicons name="chatbubble-ellipses-outline" size={24} color="#6C63FF" style={styles.suggestionIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.suggestionBox} onPress={() => router.push('/breathing-exercise')}>
            <Text style={styles.suggestionTitle}>Breathing Exercises</Text>
            <Text style={styles.suggestionSubtitle}>Calm yourself with guided exercises</Text>
            <Ionicons name="leaf-outline" size={24} color="#6C63FF" style={styles.suggestionIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.suggestionBox} onPress={() => router.push('/mood-tracker')}>
            <Text style={styles.suggestionTitle}>Track Your Mood</Text>
            <Text style={styles.suggestionSubtitle}>Monitor how you're feeling over time</Text>
            <Ionicons name="analytics-outline" size={24} color="#6C63FF" style={styles.suggestionIcon} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Features */}
      <View style={styles.featuresContainer}>
        <Text style={styles.featuresHeader}>Main Features</Text>
        <TouchableOpacity style={styles.featureItem} onPress={() => router.push('/journal')}>
          <Ionicons name="book-outline" size={30} color="#6C63FF" />
          <Text style={styles.featureText}>Daily Journal</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.featureItem} onPress={() => router.push('/resources')}>
          <Ionicons name="information-circle-outline" size={30} color="#6C63FF" />
          <Text style={styles.featureText}>Mental Health Resources</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.featureItem} onPress={() => router.push('/crisis-support')}>
          <Ionicons name="help-circle-outline" size={30} color="#6C63FF" />
          <Text style={styles.featureText}>Crisis Support</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  headerContainer: {
    paddingVertical: 30,
    backgroundColor: '#FFF',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
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
  },
  moodTrackerContainer: {
    padding: 20,
    backgroundColor: '#FFF',
    marginBottom: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  moodTrackerHeader: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
    color: '#333',
  },
  moodOptionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  moodOption: {
    alignItems: 'center',
  },
  moodText: {
    marginTop: 5,
    fontSize: 14,
    color: '#333',
  },
  predictionContainer: {
    padding: 20,
    backgroundColor: '#FFF',
    marginBottom: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    alignItems: 'center',
  },
  predictionHeader: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
  },
  predictedMoodText: {
    fontSize: 16,
    color: '#6C63FF',
  },
  suggestionsContainer: {
    padding: 20,
  },
  suggestionsHeader: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
    color: '#333',
  },
  suggestionBoxContainer: {
    flexDirection: 'column',
    gap: 15,
  },
  suggestionBox: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  suggestionTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  suggestionSubtitle: {
    fontSize: 14,
    color: '#777',
  },
  suggestionIcon: {
    marginLeft: 15,
  },
  featuresContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  featuresHeader: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
    color: '#333',
  },
  featureItem: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginBottom: 10,
  },
  featureText: {
    fontSize: 16,
    marginLeft: 15,
    color: '#333',
  },
});

export default HomeScreen;
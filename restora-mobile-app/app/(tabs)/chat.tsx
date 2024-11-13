import React, { useState } from 'react';
import { View, TextInput, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { sendMessageToGemini } from '@services/GeminiService';
import { Ionicons } from '@expo/vector-icons';

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

const ChatScreen: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');

  const handleSend = async () => {
    if (input.trim()) {
      // Add user message to chat history
      const userMessage: Message = { text: input, sender: 'user' };
      setMessages((prevMessages) => [...prevMessages, userMessage]);

      // Call Gemini API to get response
      const botReply = await sendMessageToGemini(input);
      const botMessage: Message = { text: botReply, sender: 'bot' };
      setMessages((prevMessages) => [...prevMessages, botMessage]);

      // Clear input field
      setInput('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Elara</Text>
      </View>
      <FlatList
        data={messages}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={item.sender === 'user' ? styles.userMessage : styles.botMessage}>
            <Text style={item.sender === 'user' ? styles.userText : styles.botText}>{item.text}</Text>
          </View>
        )}
        style={styles.chatContainer}
      />
      <View style={styles.inputContainer}>
        <TextInput
          value={input}
          onChangeText={setInput}
          placeholder="Ask me anything..."
          style={styles.input}
        />
        <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
          <Ionicons name="send" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  headerContainer: {
    paddingVertical: 20,
    backgroundColor: '#FFF',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  headerText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  chatContainer: {
    flex: 1,
    paddingHorizontal: 15,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6',
    padding: 10,
    borderRadius: 20,
    marginVertical: 5,
    maxWidth: '80%',
  },
  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 20,
    marginVertical: 5,
    maxWidth: '80%',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  userText: {
    color: '#303030',
  },
  botText: {
    color: '#303030',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  input: {
    flex: 1,
    borderColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: '#FFF',
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#6C63FF',
    padding: 10,
    borderRadius: 50,
  },
});

export default ChatScreen;


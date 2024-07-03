import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';

const ImageCard = () => {
  const [expanded, setExpanded] = useState(false);

  const handlePress = () => {
    setExpanded(!expanded);
  };


  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={[styles.card]}>
        <Image
          style={styles.image}
          source={require('./img/nature.jpg')}
          resizeMode="cover"
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Beautiful Nature</Text>
          <Text style={styles.description}>Experience the serene beauty of nature.</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 20,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    shadowColor: '#000',
    minHeight:300,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 200,
  },
  textContainer: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
});

export default ImageCard;

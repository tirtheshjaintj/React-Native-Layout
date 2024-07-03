import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from "./styles";

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card,styles.elevated]}>
            <Text style={styles.headingText2}>😃</Text>
        </View>
        <View style={[styles.card,styles.elevated]}>
            <Text style={styles.headingText2}>😃</Text>
        </View>
        <View style={[styles.card,styles.elevated]}>
            <Text style={styles.headingText2}>😃</Text>
        </View>
        <View style={[styles.card,styles.elevated]}>
            <Text style={styles.headingText2}>😃</Text>
        </View>
        <View style={[styles.card,styles.elevated]}>
            <Text style={styles.headingText2}>😃</Text>
        </View>
        <View style={[styles.card,styles.elevated]}>
            <Text style={styles.headingText2}>😃</Text>
        </View>
      </ScrollView>
    </View>
  )
}


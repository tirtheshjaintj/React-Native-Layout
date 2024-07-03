import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import styles from "./styles";
export default function FlatCards() {
    return (
        <View>
            <Text style={styles.headingText}>Flat Cards</Text>
            <ScrollView horizontal={true} style={styles.container}>
            <View style={[styles.box,styles.box1]}>
                    <Text style={styles.text}>Red</Text>
                </View>
                <View style={[styles.box,styles.box2]}>
                    <Text style={styles.text}>Blue</Text>
                </View>
                <View style={[styles.box,styles.box3]}>
                    <Text style={styles.text}>Green</Text>
                </View>
                <View style={[styles.box,styles.box4]}>
                    <Text style={styles.text}>Black</Text>
                </View>
                <View style={[styles.box,styles.box5]}>
                    <Text style={styles.text}>Purple</Text>
                </View>
            </ScrollView>
        </View>
    )
}


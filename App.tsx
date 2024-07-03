import { View, Text, SafeAreaView,StyleSheet, ScrollView} from 'react-native'
import React from 'react'
import { FlatCards, ElevatedCards, FancyCard, ActionCard } from "./components/index";
const App = () => {
  return (
    <SafeAreaView>
    <ScrollView>
      <FlatCards/>
      <ElevatedCards/>
      {/* <FancyCard/> */}
      <ActionCard/>
    </ScrollView>
    </SafeAreaView>
  )
}

export default App
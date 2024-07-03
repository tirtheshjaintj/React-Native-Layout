import React from "react";
import {View,Text,StyleSheet,useColorScheme} from "react-native";

export default function AppPro():JSX.Element{
const isDarkMode=useColorScheme()==="light";

return(
    <View style={styles.container}>
      <Text style={isDarkMode?styles.whiteText:styles.darkText}>Tirthesh Jain</Text>
    </View>
)
}
const styles=StyleSheet.create({
    container:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:700,
        fontSize:50
    },
    whiteText:{
        color:"#ffffff",
        backgroundColor:"#000000",
        padding:100,
        fontSize:30
    },
    darkText:{
        color:"#000000",
        backgroundColor:"#ffffff",
        padding:100,
        fontSize:30
    }
})


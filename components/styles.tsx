import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    card:{
      width:100,
      height:100,
      alignItems:"center",
      justifyContent:"center"
    },
    elevated:{
         backgroundColor:"#CAD5E2",
         margin:5,
         elevation:10,
         shadowOffset:{
            width:10,
            height:10
         },
         shadowColor:"white"
    },
    headingText: {
        fontSize: 24,
        marginHorizontal: 30,
        marginVertical: 10,
        fontWeight: "bold"
    },
    headingText2: {
        fontSize: 40
    },
    container: {
        flex:1,
        flexDirection: "row",
        overflow:"scroll",
        paddingVertical:20
    },
    img:{
       height:100,
       padding:100,
    },
    box:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        width:100,
        height:100,
        margin:5
    },
    box1:{
        backgroundColor:"red"
    },
    box2:{
        backgroundColor:"blue"
    },
    box3:{
        backgroundColor:"green"
    },
    box4:{
        backgroundColor:"black"
    },
    box5:{
        backgroundColor:"purple"
    },
    text:{
        fontSize:20
    }

})

export default styles;
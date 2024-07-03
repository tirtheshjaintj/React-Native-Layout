import { StyleSheet, Text, View ,Linking,Image,TouchableOpacity} from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(link:string){
        Linking.openURL(link);
    }
  return (
    <View>
      <Text style={[styles.title,{color:"white"}]}>ActionCard</Text>
      <View style={[styles.card]}>
        <Image
          style={styles.image}
          source={require('./img/nature.jpg')}
          resizeMode="cover"
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Beautiful Nature</Text>
          <Text style={styles.description} numberOfLines={3}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque excepturi unde consequuntur a saepe at? Enim expedita sunt blanditiis dolores aperiam harum earum adipisci odio, voluptas molestias in, nam quas cumque architecto reprehenderit voluptate rerum ipsa vitae. Amet magni alias tempora consequatur doloribus harum, omnis ducimus officiis non ullam, a veritatis, qui quam autem pariatur dolore impedit odio aperiam ea quisquam enim distinctio fuga. Soluta modi, obcaecati provident harum cum necessitatibus quibusdam et odit. Quae doloremque excepturi ex eligendi, natus, necessitatibus eaque, molestias eum harum nobis provident cumque nemo. Consequatur ipsum ipsa, error quae sit sint! Quasi ad, nemo id voluptate sequi cumque debitis totam consectetur quidem sunt quis voluptatibus. Odio molestias eligendi itaque eveniet voluptatem odit doloribus cum nobis delectus sunt repudiandae repellat ut veritatis ab, dicta similique obcaecati quia neque ea deleniti possimus, reiciendis doloremque voluptate commodi. Minima, itaque! Et aliquid, suscipit rerum similique consequatur tempore voluptatibus itaque nisi consectetur facere ipsa saepe omnis adipisci ullam ut laborum nam possimus exercitationem ipsum enim asperiores deserunt eos! Molestiae esse quibusdam consectetur nihil voluptas tempore iste corrupti! Magni molestias rem autem sapiente. Necessitatibus corrupti voluptatibus exercitationem et nulla asperiores quidem. Quos commodi fugiat debitis a obcaecati dolor eum modi sunt.</Text>
        <View>
            <TouchableOpacity onPress={()=>{openWebsite('https://tirtheshjain.netlify.app')}}>
                <Text style={[styles.title,styles.title2]}>Read More...</Text>
            </TouchableOpacity>
        </View>
        </View>
      </View>
    </View>
  )
}



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
      padding:20
    },
    image: {
      width: '100%',
      height: 200,
    },
    textContainer: {
      padding: 10,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#333',
      paddingVertical:10,
    },
    title2: {
      fontSize: 15,
    },
    description: {
      fontSize: 14,
      color: '#666',
      marginTop: 5,
    },
  });
  
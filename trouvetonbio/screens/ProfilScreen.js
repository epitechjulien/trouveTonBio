import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  ScrollView,
  FlatList,
  ImageBackground
} from 'react-native';
import Colors from '../constants/Colors';



export default class ProfilScreen extends Component {

  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
      <ImageBackground source={require('../assets/home.png')} style={{height: 180}}></ImageBackground>
          <Image style={styles.avatar} source={require('../assets/profil/maxime.jpg')}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>Maxime André</Text>
              <Text style={styles.info}>Producteur</Text>


              <Text style={styles.description}>Profil Dashboard</Text>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.text2}>Mon profil</Text>  
              </TouchableOpacity>              
              <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.text2}>Votre panier</Text>  
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.text2}>Vos commandes</Text>  
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.text2}>Historiques</Text>  
              </TouchableOpacity>


              <Text style={styles.description}>Producteur Dashboard</Text>
              <TouchableOpacity style={styles.buttonContainer2}>
              <Text style={styles.text2}>Ma ferme</Text>  
              </TouchableOpacity>

              <TouchableOpacity style={styles.buttonContainer2}>
              <Text style={styles.text2}>Mes produits</Text>  
              </TouchableOpacity>

              <TouchableOpacity style={styles.buttonContainer2}>
              <Text style={styles.text2}>Mes ventes</Text>  
              </TouchableOpacity>
              

            </View>
        </View>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: Colors.primary,
    height:150,
  },
  text:{
    color: "white",
  },
  text2:{
    color: "black",
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:110
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:5,
    width:'90%',
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: 'white',
    overflow: 'hidden',
    borderWidth: 0.5,
    borderColor:'#dddddd',
    elevation:3,
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    position:'relative',
    // backgroundColor: Colors.primary,
  },
  buttonContainer2: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:5,
    width:'90%',
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: Colors.activeColor,
    overflow: 'hidden',
    borderWidth: 0.5,
    borderColor:'#dddddd',
    elevation:3,
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    position:'relative',
  },
});
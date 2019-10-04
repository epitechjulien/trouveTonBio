import React, { Component, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  ScrollView,
  FlatList,
  ImageBackground,
  ActivityIndicator,
  AsyncStorage,
  Platform,
  SafeAreaView
} from 'react-native';
import { createSwitchNavigator, DrawerItems, createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { useDispatch } from 'react-redux';
import Colors from '../constants/Colors';
import * as authActions from '../store/actions/auth';

const ProfilScreen = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    const tryLogin = async () => {
      const userData = await AsyncStorage.getItem('userData');
      if (!userData) {
        props.navigation.navigate('Auth');
        return;
      }
      const transformedData = JSON.parse(userData);
      const { token, userId, email } = transformedData;
      const expirationDate = new Date(expiryDate);

      if (expirationDate <= new Date() || !token || !email || !userId) {
        props.navigation.navigate('Auth');
        return;
      }

      const expirationTime = expirationDate.getTime() - new Date().getTime();

      props.navigation.navigate('Profil');
      dispatch(authActions.authenticate(userId, token, email));

    };

    tryLogin();
  }, [dispatch]);

  return (
    <ScrollView>
    <View style={styles.container}>
    <ImageBackground source={require('../assets/home.png')} style={{height: 180}}></ImageBackground>
        {/* <Image style={styles.avatar} source={require('../assets/profil/maxime.jpg')}/> */}
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <Text style={styles.name}>Name</Text>
            <Text style={styles.info}>Votre statut</Text>


            <Text style={styles.description}>Profil Dashboard</Text>
            <View style={[{ width: "90%", margin: 10, backgroundColor: Colors.activeColor,borderRadius: 5, borderWidth: 1,borderWidth: 0.5, borderColor:'#dddddd',elevation:3,shadowOpacity: 0.2,shadowRadius: 1.41, }]}>
              <Button
                onPress={() => props.navigation.navigate({routeName : 'EditProfil'})}
                title="Mon profil"
                color={Colors.primary}
              />
            </View>

            <View style={[{ width: "90%", margin: 10, backgroundColor: Colors.activeColor,borderRadius: 5, borderWidth: 1,borderWidth: 0.5, borderColor:'#dddddd',elevation:3,shadowOpacity: 0.2,shadowRadius: 1.41, }]}>
              <Button
                onPress={() => props.navigation.navigate({routeName : 'Cart'})}
                title="VOTRE PANIER"
                color={Colors.primary}
              />
            </View>

            <View style={[{ width: "90%", margin: 10, backgroundColor: Colors.activeColor,borderRadius: 5, borderWidth: 1,borderWidth: 0.5, borderColor:'#dddddd',elevation:3,shadowOpacity: 0.2,shadowRadius: 1.41, }]}>
              <Button
                onPress={() => props.navigation.navigate({routeName : 'OrdersScreen'})}
                title="VOS COMMANDES"
                color={Colors.primary}
              />
            </View>

            <Text style={styles.description}>Producteur Dashboard</Text>

            <View style={[{ width: "90%", margin: 10, backgroundColor: Colors.activeColor,borderRadius: 5, borderWidth: 1,borderWidth: 0.5, borderColor:'#dddddd',elevation:3,shadowOpacity: 0.2,shadowRadius: 1.41, }]}>
              <Button
                onPress={() => props.navigation.navigate({routeName : 'UserProducts'})}
                title="Mes produits"
                color={Colors.activeColor}
              />
            </View>

            <View style={[{ width: "90%", margin: 10, backgroundColor: Colors.activeColor,borderRadius: 5, borderWidth: 1,borderWidth: 0.5, borderColor:'#dddddd',elevation:3,shadowOpacity: 0.2,shadowRadius: 1.41, }]}>
              <Button
                onPress={() => props.navigation.navigate({routeName : 'UserEvents'})}
                title="Mes évènements"
                color={Colors.activeColor}
              />
            </View>


            <View style={[{ width: "90%", margin: 10, backgroundColor: Colors.activeColor,borderRadius: 5, borderWidth: 1,borderWidth: 0.5, borderColor:'#dddddd',elevation:3,shadowOpacity: 0.2,shadowRadius: 1.41, }]}>
              <Button
                onPress={() => props.navigation.navigate({routeName : ''})}
                title="Ma ferme"
                color={Colors.activeColor}
              />
            </View>

            <View style={[{ width: "90%", margin: 10, backgroundColor: Colors.activeColor,borderRadius: 5, borderWidth: 1,borderWidth: 0.5, borderColor:'#dddddd',elevation:3,shadowOpacity: 0.2,shadowRadius: 1.41, }]}>
              <Button
                onPress={() => props.navigation.navigate({routeName : ''})}
                title="Mes ventes"
                color={Colors.activeColor}
              />
            </View>

            <View style={[{ width: "90%", margin: 10, borderRadius: 5, borderWidth: 1,borderWidth: 0.5, borderColor:'#dddddd',elevation:3,shadowOpacity: 0.2,shadowRadius: 1.41, }]}>
              <Button
                onPress={() => {
                  dispatch(authActions.logout());
                  props.navigation.navigate('Accueil');
                }}
                title="LOGOUT"
                color={Colors.activeColor}
              />
            </View>


            {/* <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
            <DrawerItems {...props} />
            <Button
              title="Logout"
              color={Colors.primary}
              onPress={() => {
                dispatch(authActions.logout());
                props.navigation.navigate('Accueil');
              }}
            />
          </SafeAreaView> */}
            
            

          </View>
      </View>
    </View>
    </ScrollView>
  );
};

ProfilScreen.navigationOptions = {
  headerTitle: 'Mon profil'
};


export default ProfilScreen;


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
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
  Button:{
    backgroundColor: 'white',
  },
});
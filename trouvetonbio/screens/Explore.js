import React, { Component } from 'react'
import { Text, View, StyleSheet,ImageBackground, SafeAreaView , Platform, StatusBar, TextInput, ScrollView, Image, Dimensions} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'; 
import Category from './components/Explore/Category';
import { Thumbnail} from 'native-base';
import Colors from '../constants/Colors';

const { height, width} = Dimensions.get('window')

export class Explore extends Component {

    componentWillMount(){
        this.startHeaderHeight = 80
        if(Platform.OS == 'android'){
            this.startHeaderHeight= 100 + StatusBar.currentHeight
        }
    }
    //page d'aceuil:
    render() {
        return (
            <SafeAreaView style = {{flex:1}}>
                <View style= {{flex: 1}}>
                    <View style={styles.SearchContainer}>
                    <ImageBackground source={require('../assets/home.png')} style={{width: '100%', height: '100%'}}>
                        <View style={styles.SearchArea}>
                            <Icon name= "ios-search" size={20}/>
                            <TextInput underlineColorAndroid="transparent" placeholder="Que recherchez vous ?" placeholderTextColor= "grey" style={styles.SearchInput}/>
                        </View>
                        </ImageBackground>
                    </View>
            <ScrollView scrollEventThrottle={16}>
                <View style={{flex:1, backgroundColor:'white', paddingTop: 20}}>
                    <Text style={styles.title}>Faites vos courses</Text>

                            <Text style={styles.subtitle}>Catégories</Text>
                            <View style={{height :130, marginTop:20}}>
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                    <Category image={require('../assets/home.jpg')} name="Home"/>
                                    <Category image={require('../assets/experiences.jpg')} name="Experiences"/>
                                    <Category image={require('../assets/restaurant.jpg')} name="Restaurant"/>
                                </ScrollView>
                            </View>

                            <Text style={styles.subtitle}>Promotions</Text>
                            <View style={{height :130, marginTop:20}}>
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                    <Category image={require('../assets/home.jpg')} name="Home"/>
                                    <Category image={require('../assets/experiences.jpg')} name="Experiences"/>
                                    <Category image={require('../assets/restaurant.jpg')} name="Restaurant"/>
                                </ScrollView>
                            </View>

                            <Text style={styles.subtitle}>Evenements</Text>
                            <View style={{height :130, marginTop:20}}>
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                    <Category image={require('../assets/home.jpg')} name="Home"/>
                                    <Category image={require('../assets/experiences.jpg')} name="Experiences"/>
                                    <Category image={require('../assets/restaurant.jpg')} name="Restaurant"/>
                                </ScrollView>
                            </View>
                </View>
            </ScrollView>

                </View>
            </SafeAreaView>
        )
    }
}

export default Explore;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        color:'#107848',
        fontWeight:'700',
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    subtitle: {
        fontSize: 18,
        color:'#000',
        fontWeight:'700',
        paddingHorizontal: 20
    },
    SearchContainer:{
        height : 200,
        backgroundColor: '#107848',
        borderBottomWidth: 1,
        borderBottomColor: '#dddddd'
    },
    SearchArea:{
        flexDirection: 'row',
        padding:10,
        backgroundColor: 'white',
        marginHorizontal: 20,
        shadowOffset : { width: 0, height :0},
        shadowColor: 'black',
        shadowOpacity: 0.2,
        elevation :1,
        marginTop: 50,
    },
    SearchInput: {
        flex:1,
        fontWeight:'700',
        color: 'white',
        backgroundColor: 'white',
    },
  });



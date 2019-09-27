import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList, ImageBackground, SafeAreaView , Platform, StatusBar, TextInput, ScrollView, Image, Dimensions} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'; 
import Category from '../components/Explore/Category';
import { Thumbnail} from 'native-base';
import Colors from '../constants/Colors';

import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';


const { height, width} = Dimensions.get('window')



export class Explore extends Component {

    renderGridItem = itemData => {
        return (
    
    
            
        <CategoryGridTile
            title={itemData.item.title}
            color={itemData.item.color}
            image={itemData.item.image}
            onSelect = {() => {
                this.props.navigation.navigate({
                    routeName: 'CategoryProducts',
                    params: {
                      categoryId: itemData.item.id
                }
        });
            }} />
    
            );
    };

    componentWillMount(){
        this.startHeaderHeight = 80
        if(Platform.OS == 'android'){
            this.startHeaderHeight= 100 + StatusBar.currentHeight
        }
    }
    render() {
        return (
            <SafeAreaView style = {{flex:1}}>
                <View style= {{flex: 1}}>
                    <View style={styles.SearchContainer}>
                    <ImageBackground source={require('../assets/home.png')} style={{width: '100%', height: '100%'}}>
                        <View style={styles.SearchArea}>
                            <Icon name= "ios-search" size={24} color="white" style={{marginLeft:10,}}/>
                            <TextInput underlineColorAndroid="transparent" placeholder="Que recherchez vous ?" placeholderTextColor= "white" style={styles.SearchInput}/>
                        </View>
                        </ImageBackground>
                    </View>
            <ScrollView scrollEventThrottle={16}>
                <View style={{flex:1, backgroundColor:'white', paddingTop: 20, paddingBottom: 20}}>
                    <Text style={styles.title}>Faites vos courses</Text>

                            <Text style={styles.subtitle}>Catégories</Text>
                            <View style={{height :165, marginTop:5, marginBottom: 15,}}>
                            <FlatList
                                keyExtractor={(item, index) => item.id}
                                data={CATEGORIES}
                                renderItem={this.renderGridItem}
                                // numColumns={2}
                                horizontal={true}
                                onSelect = {() => {
                                    props.navigation.navigate({
                                        routeName: 'CategoryProducts',
                                        params: {
                                          categoryId: itemData.item.id
                                    }
                            });
                                }}
                                style={styles.FlatList}
                                />
                            </View>

                            <Text style={styles.subtitle}>Promotions</Text>
                            <View style={{height :130, marginTop:5, marginBottom: 15,}}>
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                                    <Category style={styles.border} image={require('../assets/pomme1.jpg')} name="Pomme Golden: 4€"/>
                                    <Category style={styles.border} image={require('../assets/banane.png')} name="BANANE naturelle: 7€"/>
                                    <Category style={styles.border} image={require('../assets/raisins.jpg')} name="Grappe de Raisins: 2€"/>
                                    <Category style={styles.border} image={require('../assets/carrot.jpg')} name="Carrottes longues: 1€"/>
                                    <Category style={styles.border} image={require('../assets/asperge.jpg')} name="Asperges: 1€"/>
                                    <Category style={styles.border} image={require('../assets/raisins.jpg')} name="Grappe de Raisins: 2€"/>
                                </ScrollView>
                            </View>

                            <Text style={styles.subtitle}>Evenements</Text>
                            <View style={{height :130, marginTop:5, marginBottom: 15,}}>
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                    <Category image={require('../assets/visite1.png')} name="La ferme de Gally"/>
                                    <Category image={require('../assets/visite2.png')} name="Visite Champs de Monique"/>
                                    <Category image={require('../assets/visite3.png')} name="Visite Cave vins"/>
                                    <Category image={require('../assets/visite1.png')} name="La ferme de Gally"/>
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
        textAlign: 'center',
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
        paddingHorizontal: 20,
        marginTop: 20,
    },
    SearchContainer:{
        height : '30%',
        backgroundColor: '#107848',
        borderBottomWidth: 1,
        borderBottomColor: '#dddddd'
    },
    SearchArea:{
        flexDirection: 'row',
        padding:10,
        backgroundColor: '#107848',
        marginHorizontal: 20,
        shadowOffset : { width: 0, height :0},
        shadowColor: 'black',
        shadowOpacity: 0.2,
        elevation :1,
        marginTop: 50,
        color: 'white',
        borderRadius: 10,
    },
    SearchInput: {
        flex:1,
        fontWeight:'700',
        color: 'white',
        paddingLeft: 15,
    },
    border: {
        borderRadius: 5,
        borderWidth: 1,
        height: 120,
        width: 140,
        backgroundColor: 'white',
        overflow: 'hidden',
        borderWidth: 0.5,
        borderColor:'#dddddd',
        elevation:3,
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        position:'relative',
    },
  });



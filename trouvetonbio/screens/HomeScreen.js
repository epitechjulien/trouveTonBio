import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList, ImageBackground, SafeAreaView , Platform, StatusBar, TextInput, ScrollView, Image, Dimensions} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'; 
import Category from '../components/Explore/Category';
import { Thumbnail} from 'native-base';
import Colors from '../constants/Colors';

import { CATEGORIES, SUBCATEGORIES, PRODUCTS } from '../data/dummy-data';
import { EVENT } from '../data/event-data';
import CategoryGridTile from '../components/categories/CategoryGridTile';
import EventsGridTile from '../components/eventtypes/EventsGridTile';
const { height, width} = Dimensions.get('window')



export class Explore extends Component {

    renderGridItem = itemData => {
        return (

        <CategoryGridTile
            title={itemData.item.title}
            image={itemData.item.image}
            onSelect = {() => {
                this.props.navigation.navigate({
                    routeName: 'SousCategories',
                    params: {
                      categoryId: itemData.item.id
                }
        });
            }} />
    
            );
    };


    renderGridProduct = itemData => {
        return (

        <CategoryGridTile
            title={itemData.item.title}
            image={itemData.item.image}
            onSelect = {() => {
                this.props.navigation.navigate({
                    routeName: 'ProductDetailScreen',
                    params: {
                      productId: itemData.item.id
                }
        });
            }} />
    
            );
    };


    renderGridEvent = itemData => {
        return (

        <EventsGridTile
            title={itemData.item.title}
            image={itemData.item.image}
            onSelect = {() => {
                this.props.navigation.navigate({
                    routeName: 'EventsScreen',
                    params: {
                      eventId: itemData.item.id
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
                    <ImageBackground source={require('../assets/header.png')} style={{width: '100%', height: '100%'}}>
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
                            <View style={{height :140, marginTop:5, marginBottom: 15,}}>
                            <FlatList
                                keyExtractor={(item, index) => item.id}
                                data={CATEGORIES}
                                renderItem={this.renderGridItem}
                                // numColumns={2}
                                horizontal={true}
                                onSelect = {() => {
                                    props.navigation.navigate({
                                        routeName: 'SousCategories',
                                        params: {
                                            categoryId: itemData.item.id,
                                    }
                            });
                                }}
                                style={styles.FlatList}
                                />
                            </View>

                            <Text style={styles.subtitle}>Nos produits</Text>
                            <View style={{height :140, marginTop:5, marginBottom: 15,}}>
                            <FlatList
                                keyExtractor={(item, index) => item.id}
                                data={PRODUCTS}
                                renderItem={this.renderGridProduct}
                                // numColumns={2}
                                horizontal={true}
                                onSelect = {() => {
                                    props.navigation.navigate({
                                        routeName: 'ProductDetailScreen',
                                        params: {
                                            productIdId: itemData.item.id,
                                            productIdTitle: itemData.item.title,
                                            productIdImage: itemData.item.image,
                                            productIdDescription: itemData.item.Description,

                                    }
                            });
                                }}
                                style={styles.FlatList}
                                />
                            </View>

                            <Text style={styles.subtitle}>Evènements</Text>
                            <View style={{height :140, marginTop:5, marginBottom: 15,}}>
                            <FlatList
                                keyExtractor={(item, index) => item.id}
                                data={EVENT}
                                renderItem={this.renderGridEvent}
                                // numColumns={2}
                                horizontal={true}
                                onSelect = {() => {
                                    props.navigation.navigate({
                                        routeName: 'EventsScreen',
                                        params: {
                                            eventId: itemData.item.id,
                                            eventTitle: itemData.item.title,
                                            eventImage: itemData.item.image,
                                            eventDescription: itemData.item.Description,

                                    }
                            });
                                }}
                                style={styles.FlatList}
                                />
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
        paddingHorizontal: 10,
        marginTop: 10,
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



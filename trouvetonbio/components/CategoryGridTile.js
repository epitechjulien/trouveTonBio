import React from 'react';
import { TouchableOpacity, View, Text, ImageBackground, StyleSheet } from 'react-native';

//mise en page de la page events
const CategoryGridTile = props => {
    console.log(props.image);
    return (
        <View style={styles.shadow}>
        <View style={styles.gridItem}>
            <TouchableOpacity style={{flex: 1}}
                onPress={props.onSelect}
            >
                <View style={styles.border}>
                <View style={{ ...styles.container, ...styles.mealHeader}}>
                    <ImageBackground source={props.image} style={styles.bgImage} />
                </View>
                <View style={{ ...styles.mealRow, ...styles.mealDetail}}>
                    <Text style={styles.title}>{props.title}</Text>
                </View>
                </View>
          </TouchableOpacity>
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
    border: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
        borderRadius: 5,
        height: 150,
        width: 150,
        backgroundColor: '#FFFAFA',
        overflow: 'hidden'
    },
    mealRow: {
        flexDirection: 'row',
        height: 30,
        backgroundColor: 'white',
    },
    mealHeader: {
        height: '90%'
    },
    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between'
    },
    bgImage: {
        width: '150%',
        height: '110%'
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        overflow: 'hidden',
        borderColor: 'black'
    },
    container: {
        flex: 1,
        //borderRadius: 25,
        borderColor: 'black',
        //padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        overflow: 'hidden'
    },
    image: {
        height: 200,
        width: '150%',
        overflow: 'hidden'
    },
    shadow: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5
    },
    title: {
        flex: 1,
        fontSize: 15,
        textAlign: 'center',
        borderColor: '#000000'
    }
});

export default CategoryGridTile;
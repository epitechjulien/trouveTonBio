import React from 'react';
import { CATEGORIES, SUBCATEGORIES } from '../../data/dummy-data';
import { TouchableOpacity, View, Text, ImageBackground, StyleSheet } from 'react-native';

//mise en page des sous categories
const SubcategoryGridTile = props => {
    
    return (

        <View style={styles.gridItem}>
            <TouchableOpacity style={{flex: 1}}
                onPress={props.onSelect}
            >
                <View style={styles.border} >
                <View style={{ ...styles.container, ...styles.mealHeader}}>
                    <ImageBackground source={props.image} style={styles.bgImage} />
                </View>
                <View style={{ ...styles.mealRow, ...styles.mealDetail}}>
                    <Text style={styles.title}>{props.title}</Text>
                </View>
                </View>
          </TouchableOpacity>
        </View>

    );
};
  
const styles = StyleSheet.create({
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
    mealRow: {
        flexDirection: 'row',
    },
    mealHeader: {
        height: '100%'
    },
    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between'
    },
    bgImage: {
        width: '100%',
        height: 100,
    },
    gridItem: {
        flex: 1,
        marginLeft: 20,
        height: 125,
        overflow: 'hidden',
        marginTop: 20,

    },
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        overflow: 'hidden'
    },
    image: {
        height: 150,
        width: '100%',
        overflow: 'hidden'
    },
    title: {
        marginTop: 5,
        flex: 1,
        fontSize: 12,
        textAlign: 'left',
        height:25,
        justifyContent: 'center',
        fontWeight: 'bold',
    }
});

export default SubcategoryGridTile;
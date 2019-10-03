import React, { Component } from 'react';
import { Text, StyleSheet, View, FlatList, Button,ListView, TextInput, ActivityIndicator,SearchBar, ScrollView, Alert } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from './categories/CategoryGridTile';
import CategoriesScreen from '../screens/categories/CategoriesScreen';
import renderGridItem from '../screens/categories/CategoriesScreen';


export default class Search extends Component {
  earchDirectory(itemsRef) {

    var searchText = this.state.searchText.toString();

    if (searchText == "") {
      this.listenForItems(itemsRef);
    } else {
      itemsRef.orderByChild("searchable").startAt(searchText).endAt(searchText).on('value', (snap) => {

        items = [];
        snap.forEach((child) => {
          items.push({
            subcat: child.val().subcat,
            firstLetter: child.val().firstLetter,
            title: child.val().title,
          });
        });


        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(items)
        });

      });
    }

  }


  render() {
    return (
      <View style={styles.SearchArea}>
        <ScrollView>
          <SearchBar
            returnKeyType='search'
            // lightTheme
            placeholder='Que cherchez vous...'
            onChangeText={(text) => this.setState({ searchText: text })}
            onSubmitEditing={() => this.firstSearch()}
          />
          {
            // this.state.loading &&

            <ActivityIndicator
              size="large"
              color="#3498db"
              style={styles.activityStyle}
            />

          }
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this._renderItem.bind(this)}
            enableEmptySections={true}
          />
        </ScrollView>
      </View>
    )
  };
}
  //  export default Search;

  const styles = StyleSheet.create({

    SearchArea: {
      flexDirection: 'row',
      padding: 10,
      backgroundColor: '#107848',
      marginHorizontal: 20,
      shadowOffset: { width: 0, height: 0 },
      shadowColor: 'black',
      shadowOpacity: 0.2,
      elevation: 1,
      marginTop: 50,
      color: 'white',
      borderRadius: 10,
    },
    SearchInput: {
      flex: 1,
      fontWeight: '700',
      color: 'white',
      paddingLeft: 15,
    },
  })

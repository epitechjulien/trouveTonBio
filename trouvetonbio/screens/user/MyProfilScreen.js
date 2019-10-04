import React from 'react';
import { View, Text, FlatList, Button, Platform, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../../components/UI/HeaderButton';
import ProfilItem from '../../components/shop/ProfilItem';
import Colors from '../../constants/Colors';
import * as profilsActions from '../../store/actions/profils';

const UserProfilsScreen = props => {
  const userProfils = useSelector(state => state.profils.userProfils);
  const dispatch = useDispatch();

  const editProfilHandler = id => {
    props.navigation.navigate('EditProfil', { profilId: id });
  };

  const deleteHandler = id => {
    Alert.alert('Are you sure?', 'Do you really want to delete your profil ?', [
      { text: 'No', style: 'default' },
      {
        text: 'Yes',
        style: 'destructive',
        onPress: () => {
          dispatch(profilsActions.deleteProfil(id));
        }
      }
    ]);
  };

  if (userProfils.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>No profilsfound, maybe start creating your's?</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={userProfils}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <ProfilItem
          ownerAddress={itemData.item.ownerAddress}
          ownerZip={itemData.item.ownerZip}
          ownerTel={itemData.item.ownerTel}
          ownerTown={itemData.item.Town}
          price={itemData.item.price}
          onSelect={() => {
            editProfilHandler(itemData.item.id);
          }}
        >
          <Button
            color={Colors.primary}
            title="Edit"
            onPress={() => {
              editProfilHandler(itemData.item.id);
            }}
          />
          <Button
            color={Colors.primary}
            title="Delete"
            onPress={deleteHandler.bind(this, itemData.item.id)}
          />
        </ProfilItem>
      )}
    />
  );
};

UserProfilsScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Your Profils',
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Add"
          iconName={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
          onPress={() => {
            navData.navigation.navigate('EditProfil');
          }}
        />
      </HeaderButtons>
    )
  };
};

export default UserProfilsScreen;

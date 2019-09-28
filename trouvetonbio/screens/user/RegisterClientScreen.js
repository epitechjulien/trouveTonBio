import React from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import Colors from '../../constants/Colors';


export default class RegisterClient extends React.Component {
render() {
   return (
     <View style={styles.container}>
       <Text>Register client</Text>  
     </View>
   );
 }
}

RegisterClient.navigationOptions = {
  headerTitle: 'CLIENT : Register/Login '
};

const styles = StyleSheet.create({
 container: {
   flex: 1,
   alignItems: 'center',
   justifyContent: 'center',
   backgroundColor: '#ecf0f1',
 },
});

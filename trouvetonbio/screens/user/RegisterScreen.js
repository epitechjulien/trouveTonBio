import React from 'react';
import { View, StyleSheet, Button, ImageBackground } from 'react-native';
import Colors from '../../constants/Colors';
import authHandler from './AuthScreen';

export default class RegisterScreen extends React.Component {
render() {
   return (
    <ImageBackground source={require('./login.png')} style={{width: '100%', height: '100%',flex: 1,
    alignItems: 'center',
    justifyContent: 'center'}}>
     {/* <View style={styles.container}> */}
       <Button color={Colors.primary} title="Client" onPress={() => this.props.navigation.navigate('AuthScreen')}/>
       <Button color={Colors.primary} title="Producteur" onPress={() => this.props.navigation.navigate('AuthScreenFarmer')}/>
       {/* <Button
                  title={'Client'}
                  color={Colors.primary}
               onPress={() => this.props.navigation.navigate('RegisterClient')}
        />    
        <Button
                  title={'Farmer'}
                  color={Colors.primary}
               onPress={() => this.props.navigation.navigate('RegisterFarmer')}
        />       */}
     {/* </View> */}
     </ImageBackground>
   );
 }
}

RegisterScreen.navigationOptions = {
  headerTitle: 'Bienvenue'
};

const styles = StyleSheet.create({
 container: {
   flex: 1,
   alignItems: 'center',
   justifyContent: 'center',
   
   backgroundColor: '#ecf0f1',
 },
});

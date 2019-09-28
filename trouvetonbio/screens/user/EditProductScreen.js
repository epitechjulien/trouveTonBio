import React from "react";
import { View, ScrollView, Text, StyleSheet} from 'react-native';
import { TextInput } from "react-native-paper";

const EditProductScreen = props => {
    return (
       <ScrollView>
           <View>
               <Text>Title</Text>
               <TextInput />
           </View>
       </ScrollView>
    );
};

const styles = StyleSheet.create({});

export default EditProductScreen;


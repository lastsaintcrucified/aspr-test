import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Tag({name}) {
   alert
  return (
    <View style={styles.main}>
        <TouchableOpacity>
            <Text style={styles.text}>{name}</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    main:{
        backgroundColor:"#C5C5C5",
        padding:10,
        paddingLeft:15,
        paddingRight:15,
        borderRadius:10,
        marginLeft:10,
        marginTop:10
    },
    text:{
        color:"#565656",
        fontSize:15
    }
})
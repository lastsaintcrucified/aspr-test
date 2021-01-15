import React from 'react';
import {connect} from "react-redux";
import {postTagStartAsync} from "../../../redux/tags/tags.action.js";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

 function Arrow({able,match,postTagStartAsync}) {
    
  return (
    <View style={styles.arrow}>
        <TouchableOpacity
           

            style={styles.roundButton1}>
            <TouchableOpacity 
                style={able?styles.roundButton3:styles.roundButton2}
                onPress={()=>postTagStartAsync(match)}
            >
                <Text  style={styles.text}>&#8250;</Text>
            </TouchableOpacity>
            
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    arrow: {
        flex: 1,
        alignItems:"flex-end"
      },
      roundButton1: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        backgroundColor: 'white',
        zIndex:3,
        shadowColor: 'rgba(0, 0, 0, 0.7)',
        shadowOpacity: 1,
        elevation: 6,
        shadowRadius: 15 ,
        shadowOffset : { width: 4, height: 13}
      },
      roundButton2:{
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height:40,
        backgroundColor:"#1C8FC2",
        borderRadius: 100
      },
      roundButton3:{
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height:40,
        backgroundColor:"grey",
        borderRadius: 100
      },
      text:{
          color:"white",
          fontSize:40,
          marginTop:-10
      }
});
const mapDispatchToProps = dispatch =>({
    postTagStartAsync:(tags) =>dispatch(postTagStartAsync(tags))
  })

export default connect(null,mapDispatchToProps)(Arrow);
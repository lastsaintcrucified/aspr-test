import React,{useEffect} from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

import Radio from "../../component/footer/radio/radio.js";
import Arrow from "../../component/footer/arrow/arrow.js";
import { connect } from 'react-redux';

import { fetchTagStartAsync } from "../../redux/tags/tags.action.js";

function Home({navigation,fetchTagStartAsync,tags}) {
  useEffect(() => {
    fetchTagStartAsync(tags)
    
  }, [fetchTagStartAsync])
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.home}>
          <TouchableOpacity style={styles.home} onPress={() => navigation.navigate('Todo')}>
            <Text style={styles.text}>go on...</Text>
            <View style={styles.hairline}></View>
            <Text style={styles.text}>add a new activity</Text>
          </TouchableOpacity>
          <View style={styles.footer}>
            <Radio able={true}/>
            <Arrow able={true}/>
          </View>
        </View>
      </View>
      
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  main:{
    height:"60%",
    width:"90%",
    backgroundColor:"#FEFEFE",
    borderRadius:10,
    alignItems:"center",
    justifyContent:"center"
  },
  footer:{
    width:"90%",
    height:"30%",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"baseline"
  },  
  home:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:0,
        width:"100%"
    },
    text:{
        color:"#909090",
        fontSize:30,
        borderColor:"black",
        padding:20
  
    },
    hairline: {
        backgroundColor: '#A2A2A2',
        height: 2,
        width: "70%"
      }, 
});


const mapStateToProps = state =>({
  tags: state.tags.tag
})
const mapDispatchToProps = dispatch =>({
  fetchTagStartAsync:() =>dispatch(fetchTagStartAsync())
})

export default connect(mapStateToProps,mapDispatchToProps)(Home);
import React, {useState} from 'react';

import Radio from "../../component/footer/radio/radio.js";
import Arrow from "../../component/footer/arrow/arrow.js";
import Tag from "../../component/tags/tag.js"

import { StyleSheet, View, TextInput  } from 'react-native';
import {connect} from "react-redux";

function ToDo({tags}) {
    const [isFocused, setIsFocused] = useState(false)
    const [str,setStr] = useState('');
    const [words, setWords] = useState([]);
    const [match,setMatch] = useState([]);
    const handleChange = text =>{
      setStr(text);
      setWords(text.trim().split(" "));
      if(words.length>0){
        let result = tags.filter(tag=>tag.toLowerCase()===words[words.length-1].toLowerCase())
        // console.log("result->",result)
        // console.log("words->",words)
        setMatch(match=>{
          if( !match.includes(...result)){
            return [...match,...result]
          }
          return [...match]
        })
        
      }
    }
    // console.log(match)
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.inpt}>
          <TextInput
            multiline
            numberOfLines={4}
            style={[styles.inpt, isFocused && {outline:0}]}
            onChangeText={text => handleChange(text)}
           
            placeholder={"write here..."}
            value={str}
            onFocus={()=> setIsFocused(true)}
          />
          <View style={styles.tag}>
            {
              match.map(tag=>(
                <Tag key={Math.random()} name={tag}/>
              ))
            }
          </View>
        </View>
        <View style={styles.footer}>
            <Radio/>
            <Arrow match={match}/>
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
    alignItems:"flex-end"
  },
  inpt:{
    width:"80%",
    height:"60%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    color:"#909090",
    fontSize:25,
    
  },
  tag:{
    flexWrap:"wrap",
    flexDirection:"row",
    marginTop:0
  }
});

const mapStateToProps = state =>({
  tags: state.tags.tag
})

export default connect(mapStateToProps)(ToDo)
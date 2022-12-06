import React,{useState} from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import styles from './ToDoCard.styles';

const ToDoCard =(props)=>{
  const [HelloFlag,setHelloFlag]=useState(true);
  function updateFlag(){
    setHelloFlag(!HelloFlag);
  }
    return(
        <View style={HelloFlag?styles.container : styles.container1}>
            <TouchableOpacity onPress={updateFlag}>
            <Text  style={HelloFlag? styles.txtbox :styles.txtbox1}>{props.setTodo.item.title}</Text>
            </TouchableOpacity>
        </View>
    );
}
export default ToDoCard;
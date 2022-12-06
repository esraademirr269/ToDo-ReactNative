import React , {useState} from 'react';
import {View,Text,TextInput,TouchableOpacity} from 'react-native';
import styles from './SaveToDo.styles';

const SaveToDo = (props) =>{
    
    return(
        <View style={styles.container}>
            <TextInput style={props.text.length >0 ? styles.txtinput1 :styles.txtinput}  value={props.text} onChangeText={props.settext} placeholder='Yapılacaklar..'/>
            <TouchableOpacity style={props.text.length>0 ? styles.btn1 : styles.btn}  onPress={props.setUpdate}><Text>KAYDET</Text></TouchableOpacity>
        </View>
    );
}
export default SaveToDo;
import React from 'react';
import {View,Text} from 'react-native';
import styles from './Header.styles';
const Header = (props) =>{
    return (
        <View style={styles.container}>
            <Text style={styles.intxt}>Yapılacaklar</Text>
            <Text style={styles.counter} >{props.setCounter}</Text>
        </View>
    );
}
export default Header;
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const myImage = require('../../assets/1.png');

interface AuthProps{
    onAuthenticate: ()=> void;
}

export default function Auth({onAuthenticate}:AuthProps){
    return(
        <View>
            <Image source={myImage} style={styles.image}/>
            <Text style={styles.title}>sPAY</Text>
            <Text style={styles.description}>Оплата</Text>
            <TouchableOpacity
                onPress={onAuthenticate}
                style={styles.btn}>
                 <Text style={styles.login}>Войти</Text>   
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    btn: {
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#0893FC',
        padding: 10,
        borderRadius: 5,
    },
    image: {
        width: 400,
        height: 461,
    },
    login: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '500',
    },
    title: {
        fontSize: 50,
        fontWeight: '400',
        marginVertical: 30,
        textAlign: 'center',
    },
    description: {
        fontSize: 18,
        color: 'gray',
        textAlign: 'center',
        marginHorizontal: 20,
        marginBottom: 50,
    }
})
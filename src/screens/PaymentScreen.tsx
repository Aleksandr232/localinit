import React from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity, TextInput, SafeAreaView, Button } from "react-native";
import SvgComponent from "../components/CardSvg";


const myImgs = require('../../assets/me.jpg');

 interface PaymentScreenProps{
    setIsAuthenticated: any;
}   


export default function PaymentScreen({setIsAuthenticated}:PaymentScreenProps){
    return(
        <SafeAreaView style={styles.container}>
                <Image source={myImgs} style={styles.image}/>
            <Text style={{color: 'gray', fontWeight: 'bold', marginTop: 15}}>Пользователь </Text>
            <Text style={{ color: 'gray',fontSize: 20, fontWeight: '500', marginBottom: 15}}>Александр Мельников </Text>
            <Text style={{ color: 'gray',fontSize: 55, fontWeight: '500', marginBottom: 15}}>₽150000</Text>
            <TextInput
                style={styles.textInput}
                placeholder="Добавить заметку"
                placeholderTextColor="gray"
            />
            <SvgComponent/>
            <TouchableOpacity 
                 onPress={setIsAuthenticated} 
                style={styles.btn}>
                <Text style={styles.text}>Выйти</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
    },
    textInput: {
        width: '90%',
        height: 50,
        padding: 10,
        borderRadius: 15,
        backgroundColor: '#fff',
        marginBottom: 20,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 100,
    },
    btn: {
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0893FC',
        padding: 10,
        margin: 10,
        borderRadius: 15,
        marginTop: 50,
    },
    text: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '500',
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        paddingLeft: 15,
        paddingBottom: 20,
    }

})


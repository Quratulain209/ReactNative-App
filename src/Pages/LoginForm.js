import React, { useState, useEffect, useReducer, useContext } from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import TextInputField from '../Component/TextInputField';

function LoginForm(props) {

    const [UserName, setUserName] = useState('')
    const [Password, setPassword] = useState('')

    return (
        <View style={{ flex: 1, justifyContent: 'center', margin: 130 }} >
            <Image style={{ width: 60, height: 60, marginLeft: 30, marginBottom: 13 }}
                source={require('../../assets/login-logo.png')}
            />
            <Text>{'Username'}</Text>

            <TextInputField
                autoCapitalize="none"
                placeholder={"Enter User Name "}
                eye={false}
                SetEditinfo={setUserName}
                value={UserName}
                inputWidth={200}
            />

            <Text>{'Password'}</Text>
            <TextInputField
                value={Password}
                inputWidth={200}
                autoCapitalize="none"
                placeholder={"Enter Password "}
                eye={true}
                SetEditinfo={setPassword}
            />

            <TouchableOpacity onPress={() => { props.navigation.navigate('Home') }}>
                <Text style={styles.button} >
                    {'login'}</Text>
            </TouchableOpacity>
        </View>)
}
export default LoginForm

const styles = StyleSheet.create({
    button: {
        padding: 5,
        backgroundColor: '#00264d',
        color: 'white',
        textAlign: 'center'
    }
})
import React, {useReducer} from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { reducer } from '../UseReducer/reducer'

const Profile = (props) => {
    const [state, dispatch] = useReducer(reducer);
    console.log(state)

    return (
        <View>
            <Text style={{ margin: 20, textAlign: "center" }}>Profile</Text>
            <TouchableOpacity onPress={() => { props.navigation.navigate('Home') }}>
                <Text style={styles.button} >
                    {'Go back to Home'} </Text>
                    {/* <Text>{state.Username}</Text> */}
            </TouchableOpacity>
        </View>
    )
}
export default Profile

const styles = StyleSheet.create({
    button: {
        padding: 5,
        backgroundColor: '#00264d',
        color: 'white',
        textAlign: 'center'
    }
})
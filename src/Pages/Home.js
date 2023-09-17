import React, { useContext, useReducer } from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import UserContext from '../Context/UserInfo';
import TextInputField from '../Component/TextInputField'
import { reducer } from '../UseReducer/reducer'
import { Colors } from "react-native/Libraries/NewAppScreen";

const initialState = { Username: 'Taylor', age: 42 }

const Home = (props) => {
    const user = useContext(UserContext)
    const [state, dispatch] = useReducer(reducer, initialState);

    const HandleName = (e) => {
        dispatch({
            type: 'Profile_Name',
            UpdatedName: e
        });
    }
    const HandleAge = (e) => {
        dispatch({
            type: 'Age',
            Age: e
        });
    }
    const UpdateAge = () => {
        dispatch({
            type: 'Update_Age'
        });
    }
    return (
        <View >
            <Text style={{ margin: 20, textAlign: "center" }}>Home </Text>
            <Text style={{ margin: 20, textAlign: "center", color: 'green' }}>{user}</Text>

            <Text >{'Name'}</Text>
            <TextInputField
                autoCapitalize="none"
                placeholder={"Enter your name "}
                eye={false}
                SetEditinfo={(e) => HandleName(e)}
                value={state.Username}
                inputWidth={200}
            />

            <Text>{'Age'}</Text>
            <TextInputField
                autoCapitalize="none"
                placeholder={"Enter your age "}
                eye={false}
                SetEditinfo={(e) => HandleAge(e)}
                value={state.age}
                inputWidth={200}
            />

            <TouchableOpacity onPress={UpdateAge}>
                <Text>
                    Increment age
                </Text>
            </TouchableOpacity>

            <Text>
                Hello, {state.Username}. You are  {state.age}
            </Text>

            <TouchableOpacity onPress={() => { props.navigation.navigate('Profile') }}>
                <Text style={styles.button} >
                    {'Go to Profile'}</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Home

const styles = StyleSheet.create({
    button: {
        padding: 5,
        backgroundColor: '#00264d',
        color: 'white',
        textAlign: 'center'
    }
})
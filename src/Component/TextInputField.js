import React, { useContext, useState, useRef, useEffect } from "react";
import { View, Text, TouchableOpacity, TextInput,  Animated, Easing, } from "react-native";
import { Feather, Entypo, FontAwesome5 } from "@expo/vector-icons";

export default function TextInputField(props) {
 const [eye, setEye] = useState(false);
 const {value, onBlur, onFocus, StyleError} = props;
 const inputRef = useRef(null)
 return (
   <View style={{ width: props.inputWidth }}>
    
     <View style = {{flexDirection: "row", marginTop: 5}} >
       <TextInput
          ref={inputRef}
         autoCapitalize="none"
         maxLength={30}
         keyboardType="default"
         underlineColorAndroid="transparent"
         returnKeyType={"next"}
         placeholder={props.PlaceholderInfo}
         placeholderTextColor={'#000'}
         autoCorrect={false}
         secureTextEntry={props.eye ? (!eye ? true : false) : false}
         value={value}
         onChangeText={props.SetEditinfo}
         {...props}
       />
       {props.eye ? (
         <TouchableOpacity style = {{marginTop : 7, marginLeft: 15, position : 'absolute', left : 90}}
           onPress={() => setEye(!eye)}
         >
           <FontAwesome5
             name={eye ? "eye" : "eye-slash"}
             size={14}
           />
         </TouchableOpacity>
       ) : null}
       
     </View>
   </View>
 );
}

import React, { useState } from "react";
import {
    Alert,
    Button,
    TextInput,
    View
} from "react-native";

import api from "../services/api";

export default function RegisterScreen() {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const register = async () => {

    try {

      await api.post(
        "/api/auth/register",
        {
          name,
          email,
          password,
          role:"PATIENT"
        }
      );

      Alert.alert("Success");

    } catch(error) {

      Alert.alert("Failed");
    }
  };

  return (

    <View style={{padding:20}}>

      <TextInput
        placeholder="Name"
        onChangeText={setName}
      />

      <TextInput
        placeholder="Email"
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
      />

      <Button
        title="Register"
        onPress={register}
      />

    </View>
  );
}
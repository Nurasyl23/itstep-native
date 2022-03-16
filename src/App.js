import React, { useState } from "react";
import {
  TextInput,
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  onPress
} from "react-native";

function App() {
  let [number1, setNumber1] = useState("");
  let [number2, setNumber2] = useState("");
  return (
    <View>
      <TextInput
        defaultValue=""
        style={{ borderWidth: 1, borderColor: "black", height: 30 }}
        onChangeText={(number1) => setNumber1(number1)}
      />
      <TextInput
        defaultValue=""
        style={{ borderWidth: 1, borderColor: "black", height: 30 }}
        onChangeText={(number2) => setNumber2(number2)}
      />
      <Button
        title="+"
        onPress={() => {
          alert(Number(number1) + Number(number2));
        }}
      />
      <Button
        title="-"
        onPress={() => {
          alert(Number(number1) - Number(number2));
        }}
      />
      <Button
        title="/"
        onPress={() => {
          alert(Number(number1) / Number(number2));
        }}
      />
      <Button
        title="*"
        onPress={() => {
          alert(Number(number1) * Number(number2));
        }}
      />
    </View>
  );
}

export default App;

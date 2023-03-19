import React from "react";
import { View, Text, StyleSheet, TextInput, SafeAreaView, TouchableOpacity, Button } from "react-native";
import { useState } from "react";
import HomeScreen from "./HomeScreen";
import Navigation from "../Navigation";

const LoginScreen = ({navigation}) => {
    const [username, onChangeUsername] = React.useState('');
    const [password, onChangePassword] = React.useState('');
return (
    <View>
    <TextInput
        style={styles.input}
        onChangeText = {onChangeUsername}
        value={username}
        placeholder="Username"
    />
    <TextInput
        style={styles.input}
        onChangeText = {onChangePassword}
        value={password}
        placeholder="Password"
    />
    <Button title="LOGIN" onPress={() => navigation.navigate("Home")}>
    </Button>
    </View>
);
};

const styles = StyleSheet.create ({
    input: {
        height: 40,
        margin: 20,
        borderWidth: 1,
        padding: 10,
        justifyContent: "center"
    }
});

export default LoginScreen;
import { typeAlias } from '@babel/types';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

export default function LoginForm(){

    return(
        <View>
            <TextInput
                mode="outlined"
                label="Användarnamn"
                style={styles.input}
            />
            <TextInput
                mode="outlined"
                label="Lösenord"
                secureTextEntry={true}
                style={styles.input}
            />
            <Button
                icon="login"
                mode="contained"
                onPress={() => console.log('Pressed')}
                style={styles.button}
            >
                Logga in
            </Button>
            <Button
                icon="pen"
                mode="contained"
                onPress={() => console.log('Pressed')}
                style={styles.button}
            >
                Skapa konto
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 5,
        height: 50
    },
    button: {
        marginBottom: 5,
        height: 50,
        justifyContent: 'center'
    }
})

import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import LoginForm from '../components/LoginForm';
import { Headline, Paragraph } from 'react-native-paper';

export default function LoginScreen(){

    return(
        <View style={styles.container}>
            <Headline style={styles.title}>Välkommen</Headline>
            <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Paragraph>
            <LoginForm />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        padding: 20,
    },
    title: {
        textAlign: 'center'
    }
});

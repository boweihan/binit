import * as firebase from 'firebase';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, TouchableHighlight, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import Logo from '../components/Logo';
import Form from '../components/Form';
import SmallButton from '../components/SmallButton';
import LargeButton from '../components/LargeButton';

const firebaseConfig = {
    apiKey: 'AIzaSyCObkyhfqQMdrX9ksfDL0oR9tvy1WfNJFk',
    authDomain: 'adaptbox-90580.firebaseapp.com',
    databaseURL: 'https://adaptbox-90580.firebaseio.com',
    projectId: 'adaptbox-90580',
    storageBucket: 'adaptbox-90580.appspot.com',
    messagingSenderId: '785163518370',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class Login extends Component {
    login = () => {
        const email = 'bowei.han100@gmail.com';
        const password = 'password';
        if (email != null && password != null) {
            firebaseApp.auth().signInWithEmailAndPassword(email, password).then(() => {
                this.props.navigation.navigate('JobList');
            });
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Logo />
                <Form
                    title="LOGIN"
                    fields={['Username', 'Password']}
                />
                <SmallButton buttonText="SUBMIT" disabled={false} />
                <View style={{ flex: 1 }}>
                    <LargeButton buttonText="REGISTER" disabled={false} />
                    <LargeButton buttonText="GUEST LOGIN" disabled={false} />
                </View>
                <View style={{ flex: 1 }} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.green1,
    },
});

Login.propTypes = {
    navigation: PropTypes.object.isRequired,
};

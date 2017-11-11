import * as firebase from 'firebase';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import Colors from '../constants/Colors';
import Localization from '../constants/Localization';
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
    handleLogin = () => {
        // const email = 'bowei.han100@gmail.com';
        // const password = 'password';
        // if (email != null && password != null) {
        //     firebaseApp.auth().signInWithEmailAndPassword(email, password).then(() => {
        //         // todo implement
        //         this.props.navigation.navigate('JobList');
        //     });
        // }
        this.props.navigation.navigate('TOC');
    }

    handleRegister = () => {
        // todo implement
    }

    handleGuest = () => {
        this.props.navigation.navigate('GuestLogin');
    }

    render() {
        return (
            <View style={styles.container}>
                <Logo />
                <Form
                    title={Localization.login}
                    fields={[Localization.username, Localization.password]}
                />
                <SmallButton
                    buttonText={Localization.submit}
                    disabled={false}
                    onPress={this.handleLogin}
                    color={Colors.green2}
                    textColor={Colors.white1}
                    shadow={true}
                />
                <View style={{ flex: 1 }}>
                    <LargeButton
                        buttonText={Localization.register}
                        disabled={false}
                        onPress={this.handleRegister}
                    />
                    <LargeButton
                        buttonText={Localization.guestLogin}
                        disabled={false}
                        onPress={this.handleGuest}
                    />
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

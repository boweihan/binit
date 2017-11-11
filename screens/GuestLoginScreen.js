import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import Colors from '../constants/Colors';
import Localization from '../constants/Localization';
import Logo from '../components/Logo';
import ScrollableText from '../components/ScrollableText';
import SmallButton from '../components/SmallButton';
import LargeButton from '../components/LargeButton';

export default class GuestLogin extends Component {
    handleLogin = () => {
        // implement
    }

    handleRegister = () => {
        // implement
    }

    render() {
        return (
            <View style={styles.container}>
                <Logo />
                <ScrollableText
                    title={Localization.login}
                    text={Localization.guestTerms}
                />
                <SmallButton
                    buttonText={Localization.agreeAndContinue}
                    disabled={false}
                    onPress={this.handleLogin}
                />
                <View style={{ flex: 1 }}>
                    <LargeButton
                        buttonText={Localization.register}
                        disabled={false}
                        onPress={this.handleRegister}
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

GuestLogin.propTypes = {
    navigation: PropTypes.object.isRequired,
};

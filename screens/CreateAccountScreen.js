import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import Colors from '../constants/Colors';
import Localization from '../constants/Localization';
import Logo from '../components/Logo';
import Form from '../components/Form';
import SmallButton from '../components/SmallButton';

export default class CreateAccount extends Component {
    handleCreate = () => {
        this.props.navigation.navigate('TOC');
    }

    handleDecline = () => {
        this.props.navigation.navigate('Home');
    }

    render() {
        return (
            <View style={styles.container}>
                <Logo />
                <Form
                    fields={[
                        Localization.name,
                        Localization.email,
                        Localization.username,
                        Localization.password,
                        Localization.notARobot,
                    ]}
                />
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <SmallButton
                        buttonText={Localization.cancel}
                        disabled={false}
                        onPress={this.handleDecline}
                        color={Colors.transparent}
                        textColor={Colors.green2}
                        shadow={false}
                    />
                    <SmallButton
                        buttonText={Localization.submit}
                        disabled={false}
                        onPress={this.handleCreate}
                        color={Colors.green2}
                        textColor={Colors.white1}
                        shadow={true}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.green1,
    },
    form: {
        flex: 4,
    },
});

CreateAccount.propTypes = {
    navigation: PropTypes.object.isRequired,
};

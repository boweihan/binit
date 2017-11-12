import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import Colors from '../constants/Colors';
import Localization from '../constants/Localization';
import Logo from '../components/Logo';
import Form from '../components/Form';
import SmallButton from '../components/SmallButton';

export default class Login extends Component {
    handleCreate = () => {
        this.props.navigation.navigate('TOC');
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
                <SmallButton
                    buttonText={Localization.submit}
                    disabled={false}
                    onPress={this.handleCreate}
                    color={Colors.green2}
                    textColor={Colors.white1}
                    shadow={true}
                />
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

Login.propTypes = {
    navigation: PropTypes.object.isRequired,
};

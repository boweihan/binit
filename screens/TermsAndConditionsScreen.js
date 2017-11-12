import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import Colors from '../constants/Colors';
import Localization from '../constants/Localization';
import Logo from '../components/Logo';
import ScrollableText from '../components/ScrollableText';
import SmallButton from '../components/SmallButton';

export default class TermsAndConditions extends Component {
    handleAccept = () => {
        this.props.navigation.navigate('Main');
    }

    handleDecline = () => {
        this.props.navigation.navigate('Home');
    }

    render() {
        return (
            <View style={styles.container}>
                <Logo />
                <View style={{ flex: 4 }}>
                    <ScrollableText
                        title={Localization.termsOfService}
                        text={Localization.termsAndConditions}
                    />
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <SmallButton
                        buttonText={Localization.decline}
                        disabled={false}
                        onPress={this.handleDecline}
                        color={Colors.transparent}
                        textColor={Colors.green2}
                        shadow={false}
                    />
                    <SmallButton
                        buttonText={Localization.accept}
                        disabled={false}
                        onPress={this.handleAccept}
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
});

TermsAndConditions.propTypes = {
    navigation: PropTypes.object.isRequired,
};

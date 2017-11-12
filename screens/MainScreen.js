import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Image } from 'react-native';
import Colors from '../constants/Colors';
import Localization from '../constants/Localization';
import Logo from '../components/Logo';
import MainLink from '../components/MainLink';

export default class MainScreen extends Component {
    handleRubbish = () => {
        // implement
    }

    handleLocator = () => {
        // implement
    }

    handleInfo = () => {
        // implement
    }

    handleContact = () => {
        // implement
    }

    render() {
        return (
            <View style={styles.container}>
                <Logo />
                <MainLink
                    disabled={false}
                    color={Colors.green1}
                    shadow={true}
                    onPress={this.handleRubbish}
                    header={Localization.rubbishTitle}
                    body={Localization.rubbishText}
                />
                <MainLink
                    disabled={false}
                    color={Colors.green1}
                    shadow={true}
                    onPress={this.handleLocator}
                    header={Localization.locatorTitle}
                    body={Localization.locatorText}
                />
                <MainLink
                    disabled={false}
                    color={Colors.green1}
                    shadow={true}
                    onPress={this.handleInfo}
                    header={Localization.infoTitle}
                    body={Localization.infoText}
                />
                <MainLink
                    disabled={false}
                    color={Colors.green1}
                    shadow={true}
                    onPress={this.handleContact}
                    header={Localization.contactTitle}
                    body={Localization.contactText}
                />
                <Image
                    style={styles.image}
                    source={require('../assets/images/footer.png')}
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
    image: {
        flex: 1,
        padding: 20,
        height: undefined, // wtf, setting height and width to undefined makes image responsive
        width: undefined,
        resizeMode: 'contain',
    },
});

MainScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
};

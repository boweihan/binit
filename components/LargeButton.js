import React from 'react';
import { TouchableHighlight, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import Layout from '../constants/Layout';
import Colors from '../constants/Colors';

class LargeButton extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight
                    disabled={this.props.disabled}
                    underlayColor={Colors.green1}
                    activeOpacity={0.5}
                    style={this.props.disabled ? styles.buttonDisabled : styles.button}
                    onPress={() => this.props.onPress}
                >
                    <View style={styles.textContainer}>
                        <Text style={styles.buttonText}>
                            {this.props.buttonText}
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        height: 40,
        width: Layout.window.width - 80,
        backgroundColor: Colors.green2,
        borderRadius: 10,
        shadowOffset: { width: 3, height: 3 },
        shadowColor: 'black',
        shadowOpacity: 1.0,
    },
    buttonDisabled: {
        height: 40,
        width: Layout.window.width - 80,
        backgroundColor: Colors.green2,
        borderRadius: 10,
        shadowOffset: { width: 3, height: 3 },
        shadowColor: 'black',
        shadowOpacity: 1.0,
        opacity: 0.7,
    },
    textContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        padding: 10,
        backgroundColor: 'transparent',
        textAlign: 'center',
        fontWeight: '700',
        color: Colors.white1,
    },
});

LargeButton.propTypes = {
    disabled: PropTypes.bool,
    onPress: PropTypes.func.isRequired,
    buttonText: PropTypes.string.isRequired,
};

export default LargeButton;

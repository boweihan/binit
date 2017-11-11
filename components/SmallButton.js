import React from 'react';
import { TouchableHighlight, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../constants/Colors';

class SmallButton extends React.Component {
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
        justifyContent: 'flex-start',
    },
    button: {
        height: 80,
        width: 80,
        backgroundColor: Colors.green2,
        borderRadius: 40,
        shadowOffset: { width: 3, height: 3 },
        shadowColor: 'black',
        shadowOpacity: 1.0,
        transform: [{ translateY: -10 }],
    },
    buttonDisabled: {
        height: 80,
        width: 80,
        backgroundColor: Colors.green2,
        borderRadius: 40,
        shadowOffset: { width: 3, height: 3 },
        shadowColor: 'black',
        shadowOpacity: 1.0,
        transform: [{ translateY: -10 }],
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

SmallButton.propTypes = {
    disabled: PropTypes.bool,
    onPress: PropTypes.func.isRequired,
    buttonText: PropTypes.string.isRequired,
};

export default SmallButton;

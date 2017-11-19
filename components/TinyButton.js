import React from 'react';
import { TouchableHighlight, StyleSheet, Image, View } from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../constants/Colors';

class TinyButton extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight
                    disabled={this.props.disabled}
                    underlayColor={Colors.green1}
                    activeOpacity={0.5}
                    style={[this.props.disabled ? styles.buttonDisabled : styles.button,
                        {},
                        this.props.shadow ? {
                            shadowColor: 'black',
                            shadowOpacity: 1.0,
                            transform: [{ translateY: 10 }],
                        } : {},
                    ]}
                    onPress={this.props.onPress}
                >
                    <Image
                        style={styles.imageContainer}
                        source={this.props.image}
                    />
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
        height: 40,
        width: 40,
        borderRadius: 20,
        shadowOffset: { width: 2, height: 2 },
    },
    buttonDisabled: {
        height: 40,
        width: 40,
        borderRadius: 20,
        shadowOffset: { width: 2, height: 2 },
        opacity: 0.7,
    },
    imageContainer: {
        height: 40,
        width: 40,
        borderRadius: 20,
        resizeMode: 'contain',
    },
});

TinyButton.propTypes = {
    disabled: PropTypes.bool,
    onPress: PropTypes.func.isRequired,
    shadow: PropTypes.bool.isRequired,
    image: PropTypes.number.isRequired,
};

export default TinyButton;

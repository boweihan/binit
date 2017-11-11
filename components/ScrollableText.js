import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';
import Layout from '../constants/Layout';
import Colors from '../constants/Colors';

class Form extends React.Component {
    render() {
        return (
            <View style={styles.textContainer}>
                <View style={styles.info}>
                    <Text style={styles.title}>{this.props.title}</Text>
                    <Text style={styles.text}>{this.props.text}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 5,
    },
    text: {
        fontSize: 14,
        textAlign: 'justify',
        fontWeight: 'bold',
        padding: 5,
    },
    textContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    info: {
        flex: 1,
        width: Layout.window.width - 40,
        padding: 20,
        borderRadius: 20,
        backgroundColor: Colors.gray1,
    },
});

Form.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default Form;

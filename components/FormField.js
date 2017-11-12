import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../constants/Colors';

class FormField extends React.Component {
    render() {
        return (
            <TextInput
                style={styles.formField}
                onChangeText={text => this.props.update(this.props.name, text)}
                value={this.props.value}
                placeholder={this.props.name}
                secureTextEntry={this.props.secure}
            />
        );
    }
}

const styles = StyleSheet.create({
    formField: {
        flex: 1,
        paddingLeft: 30,
        paddingRight: 30,
        backgroundColor: Colors.white1,
        margin: 5,
        borderRadius: 10,
    },
});

FormField.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    update: PropTypes.func.isRequired,
    secure: PropTypes.bool,
};

export default FormField;

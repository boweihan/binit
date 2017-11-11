import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';
import Layout from '../constants/Layout';
import Colors from '../constants/Colors';
import FormField from '../components/FormField';

class Form extends React.Component {
    constructor(props) {
        super();
        this.state = props.fields.reduce((acc, cur) => {
            acc[cur] = '';
            return acc;
        }, {});
    }

    updateField = (field, value) => {
        const newState = this.state;
        newState[field] = value;
        this.setState(newState);
    }

    render() {
        return (
            <View style={styles.formContainer}>
                <View style={styles.form}>
                    <Text style={styles.title}>{this.props.title}</Text>
                    {this.props.fields.map(name => (
                        <FormField
                            key={name}
                            name={name}
                            value={this.state[name]}
                            update={this.updateField}
                            secure={name === 'Password'}
                        />
                    ))}
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
    formContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    form: {
        flex: 1,
        width: Layout.window.width - 40,
        padding: 20,
        borderRadius: 20,
        backgroundColor: Colors.gray1,
    },
});

Form.propTypes = {
    title: PropTypes.string.isRequired,
    fields: PropTypes.array.isRequired,
};

export default Form;

import React from 'react';
import { TouchableHighlight, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import Layout from '../constants/Layout';
import Colors from '../constants/Colors';

class MainLink extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.background}>
                    <View style={{ flex: 1 }} />
                    <View style={styles.templateContainer}>
                        <View style={styles.header}>
                            <Text style={styles.headerText}>{this.props.header}</Text>
                        </View>
                        <View style={styles.body}>
                            <Text style={styles.bodyText}>{this.props.body}</Text>
                        </View>
                    </View>
                </View>
                <TouchableHighlight
                    disabled={this.props.disabled}
                    underlayColor={Colors.green1}
                    activeOpacity={0.5}
                    style={[this.props.disabled ? styles.buttonDisabled : styles.button,
                        {
                            backgroundColor: this.props.color,
                            borderWidth: 5,
                            borderColor: this.props.color,
                            marginLeft: ((Layout.window.width / 3) - 90) / 2,
                            zIndex: 1000,
                        },
                        this.props.shadow ? {
                            shadowColor: 'black',
                            shadowOpacity: 1.0,
                        } : {},
                    ]}
                    onPress={this.props.onPress}
                >
                    <View style={styles.textContainer} />
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        height: 80,
        width: Layout.window.width,
        backgroundColor: Colors.green2,
        position: 'absolute',
        flex: 1,
        flexDirection: 'row',
    },
    templateContainer: {
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    header: {
        flex: 1,
    },
    headerText: {
        fontWeight: '700',
        fontSize: 20,
    },
    body: {
        flex: 3,
        justifyContent: 'center',
    },
    bodyText: {
        fontWeight: '700',
        fontSize: 12,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    button: {
        height: 90,
        width: 90,
        borderRadius: 45,
        shadowOffset: { width: 3, height: 3 },
    },
    buttonDisabled: {
        height: 90,
        width: 90,
        borderRadius: 45,
        shadowOffset: { width: 3, height: 3 },
        opacity: 0.7,
    },
    textContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        padding: 5,
        backgroundColor: 'transparent',
        textAlign: 'center',
        fontWeight: '700',
    },
});

MainLink.propTypes = {
    disabled: PropTypes.bool,
    onPress: PropTypes.func.isRequired,
    color: PropTypes.string.isRequired,
    shadow: PropTypes.bool.isRequired,
    header: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
};

export default MainLink;

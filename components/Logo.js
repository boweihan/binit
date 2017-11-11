import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Layout from '../constants/Layout';

class Logo extends React.Component {
    render() {
        return (
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require('../assets/images/logo.png')}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    logoContainer: {
        flex: 1,
        zIndex: 1000,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        transform: [{ translateY: 20 }],
    },
    logo: {
        resizeMode: 'contain',
        width: Layout.window.width,
        height: 80,
    },
});

export default Logo;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MapView } from 'expo';
import { StyleSheet, View, Image, Text } from 'react-native';
import Layout from '../constants/Layout';
import Colors from '../constants/Colors';
import Localization from '../constants/Localization';
import MapNav from '../components/MapNav';
import MapFooter from '../components/MapFooter';

export default class RubbishMap extends Component {
    render() {
        return (
            <View style={styles.container}>
                <MapNav title={Localization.rubbishMap} />
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                />
                <View style={styles.footer}>
                    <MapFooter />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        position: 'absolute',
        height: Layout.window.height,
        width: Layout.window.width,
        zIndex: -1,
    },
    footer: {
        position: 'absolute',
        bottom: 0,
    },
});

RubbishMap.propTypes = {
    navigation: PropTypes.object.isRequired,
};

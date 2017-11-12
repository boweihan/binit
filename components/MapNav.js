import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import Layout from '../constants/Layout';
import Colors from '../constants/Colors';

class MapNav extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.rows}>
                    <View style={styles.row}>
                        <Text style={styles.navText}>{this.props.title}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        width: Layout.window.width,
        backgroundColor: Colors.green1,
    },
    rows: {
        flex: 1,
        flexDirection: 'row',
    },
    row: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    navText: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '700',
        paddingTop: 10,
    },
});

MapNav.propTypes = {
    title: PropTypes.string,
};

export default MapNav;

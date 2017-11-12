import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import Layout from '../constants/Layout';
import Colors from '../constants/Colors';
import TinyButton from '../components/TinyButton';
import Localization from '../constants/Localization';

class MapNav extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.rows}>
                    <View style={{ flex: 1 }} />
                    <View style={styles.row}>
                        <TinyButton
                            buttonText="X"
                            disabled={false}
                            onPress={this.handleDecline}
                            color={Colors.green1}
                            textColor={Colors.white1}
                            shadow={true}
                        />
                    </View>
                    <View style={styles.row}>
                        <TinyButton
                            buttonText="X"
                            disabled={false}
                            onPress={this.handleDecline}
                            color={Colors.green1}
                            textColor={Colors.white1}
                            shadow={true}
                        />
                    </View>
                    <View style={styles.row}>
                        <TinyButton
                            buttonText="X"
                            disabled={false}
                            onPress={this.handleDecline}
                            color={Colors.green1}
                            textColor={Colors.white1}
                            shadow={true}
                        />
                    </View>
                    <View style={styles.row}>
                        <TinyButton
                            buttonText="X"
                            disabled={false}
                            onPress={this.handleDecline}
                            color={Colors.green1}
                            textColor={Colors.white1}
                            shadow={true}
                        />
                    </View>
                    <View style={{ flex: 1 }} />
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

};

export default MapNav;

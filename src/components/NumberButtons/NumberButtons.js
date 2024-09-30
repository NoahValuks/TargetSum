import React from "react";

import PropTypes from 'prop-types'

import { Text, StyleSheet, TouchableOpacity } from "react-native";

class NumberButtons extends React.Component {
    static propTypes = {
        randomNumber: PropTypes.number.isRequired,
        isDisabled: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
        onPress: PropTypes.func.isRequired
    };

    handlePress = () => {
        if(!this.props.isDisabled){
        this.props.onPress(this.props.id)}
    }

    render() {
        return (
            <TouchableOpacity onPress={this.handlePress}>
                <Text style={[styles.random, this.props.isDisabled && styles.isDisabled]}>
                    {this.props.randomNumber}
                </Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    random: {
        backgroundColor: '#d999',
        width: 100,
        marginHorizontal: 15,
        marginVertical: 25,
        fontSize: 35,
        textAlign: 'center',
    },
    isDisabled: {
        opacity: 0.3
    }
})

export default NumberButtons
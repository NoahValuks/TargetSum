import React from "react";

import PropTypes from 'prop-types';

import {Button, View, StyleSheet, Text} from 'react-native';

import NumberButtons from '../NumberButtons/NumberButtons';

import shuffle from 'lodash.shuffle';


class Game extends React.Component {
    static propTypes = {
        randomNumberCount: PropTypes.number.isRequired,
        initialSeconds: PropTypes.number.isRequired,
        onPlayAgain: PropTypes.func.isRequired,
    }

    state = {
        selectedIds: [],
        remainingSeconds: this.props.initialSeconds,
    }

    gameStatus= 'PLAYING'

    randomNumbers = Array
    .from({length: this.props.randomNumberCount})
    .map(()  =>2 + Math.floor(10 * Math.random()));
    target = this.randomNumbers
    .slice(0, this.props.randomNumberCount - 2)
    .reduce((acc, curr) => acc + curr, 0);
    shuffledRandomNumbers = shuffle(this.randomNumbers);

    componentDidMount(){
        this.intervalId = setInterval(() => {
            this.setState((prevState) => {
                return { remainingSeconds: prevState.remainingSeconds -1 };
            }, () =>{
                if(this.state.remainingSeconds === 0 || this.gameStatus === 'WON'){
                    clearInterval(this.intervalId)
                }
            })
        }, 1000)
    }

    componentWillUnmount(){
        clearInterval(this.intervalId);
    }

    isNumberSelected = (numberIndex) => {
        return this.state.selectedIds.indexOf(numberIndex) >= 0;
    }
    selectNumber = (numberIndex) => {
        this.setState((prevState) => ({
            selectedIds: [...prevState.selectedIds, numberIndex]
        }));
    };

    componentWillUpdate(nextProps, nextState){
        if(nextState.selectedIds !== this.state.selectedIds || nextState.remainingSeconds === 0){
            this.gameStatus = this.calcGameStatus(nextState);
        };
    };

    calcGameStatus = (nextState) => {
        const sumSelected = nextState.selectedIds.reduce((acc, curr) => { 
            return acc + this.shuffledRandomNumbers[curr]
        }, 0)
        if(nextState.remainingSeconds === 0){
            return 'LOST'
        }
        if(sumSelected < this.target){
            return 'PLAYING'
        }else if(sumSelected === this.target){
            return 'WON'
        }else{
            return 'LOST'
        }
    };

    render() {
        const gameStatus = this.gameStatus;
        return (
            <View style={styles.container}>
                <Text style={[styles.target, styles[`STATUS_${gameStatus}`]]}>
                    {this.target}
                </Text>
                <View style={styles.randomContainer}>
                {this.shuffledRandomNumbers.map((number, index) => 
                    <NumberButtons 
                        key={index}
                        id={index} 
                        randomNumber={number}
                        isDisabled={this.isNumberSelected(index) || gameStatus !== 'PLAYING'}
                        onPress={this.selectNumber}
                    />
                )}
                </View>
                { gameStatus === 'WON' &&
                 <Text style={styles.winningText}>CONGRATULATIONS</Text>
                }
                { gameStatus !== 'Playing' &&  <Button title="Play Again" onPress={this.props.onPlayAgain}/> }
                
                <Text>{this.state.remainingSeconds}</Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ddd',
        flex: 1,
        paddingTop: 30,
    },
    target: {
        fontSize: 40,
        marginHorizontal: 50,
        textAlign: 'center'
    },
    randomContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    random: {
        backgroundColor: '#d999',
        width: 100,
        marginHorizontal: 15,
        marginVertical: 25,
        fontSize: 35,
        textAlign: 'center'
    },
    winningText:{
        color: 'green',
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center'
    },

    STATUS_PLAYING: {
        backgroundColor: '#aaa',
    },
    STATUS_WON:{
        backgroundColor: 'green',
    },
    STATUS_LOST:{
        backgroundColor: 'red'
    }
})

export default Game;
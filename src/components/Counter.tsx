import React from 'react';
import { Button, Text, View } from 'react-native';
import {
  incrementCounter,
  decrementCounter,
  setName,
} from '../../redux/action-creators';
import { connect } from 'react-redux';
import { store, store2 } from '../../redux/store';

class Counter extends React.Component<any> {
  incrementCounter = () => {
    this.props.incrementCounterProps();
    console.log({ store: store.getState(), store2: store2.getState() });
    store2.dispatch(setName(''));
  };
  decrementCounter = () => {
    this.props.decrementCounterProps();
  };

  setName = () => {
    const newName = this.props.firstname === 'Aditya' ? 'Manish' : 'Aditya';
    this.props.setName(newName);
  };

  render = () => (
    <View>
      <Button
        title='Increment Counter'
        onPress={this.incrementCounter}
      ></Button>
      <Button
        title='Decrement Counter'
        onPress={this.decrementCounter}
      ></Button>
      <Button title='Set name' onPress={this.setName}></Button>
    </View>
  );
}

const mapStateToProps = (state) => ({
  //   counter: state.counter,
  firstname: state.firstname,
});

const mapDispatchToProps = (dispatch) => ({
  incrementCounterProps: () => dispatch(incrementCounter()),
  decrementCounterProps: () => dispatch(decrementCounter()),
  setName: (name) => dispatch(setName(name)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Counter);

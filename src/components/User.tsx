import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
class User extends React.Component<any> {
  render = () => {
    return (
      <View>
        <Text>{this.props.counter}</Text>
        <Text>{this.props.firstname}</Text>
      </View>
    );
  };
}

const mapStateToProps = (state) => ({
  counter: state.counter,
  firstname: state.firstname,
});

const userReduxConnector = connect(mapStateToProps, null);
export default userReduxConnector(User);

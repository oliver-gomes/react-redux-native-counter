import React from "react";
import { TouchableHighlight, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import {increment, decrement, reset} from './actions'

class Counter extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 32 }}>Basic React Redux</Text>
        <Text>{this.props.count}</Text>
        <View>
          <TouchableHighlight
            onPress={() => this.props.increment({payload: 5})}
            style={{ backgroundColor: "green", marginRight: 5, padding: 10 }}
          >
            <Text>Increment</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={this.props.decrement}
            style={{ backgroundColor: "red", marginRight: 5, padding: 10 }}
          >
            <Text>Decrement</Text>
          </TouchableHighlight>
        </View>
        <View style={{ marginTop: 10 }}>
          <TouchableHighlight
            onPress={this.props.reset}
            style={{ backgroundColor: "green", marginRight: 5, padding: 10 }}
          >
            <Text>Reset</Text>
         
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

const mapDispatchToProps = dispatch => ({
  increment: (payload) => dispatch(increment(payload)),
  decrement: () => dispatch(decrement()),
  reset: () => dispatch(reset())
});

const mapStateToProps = state => ({
  count: state.count
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

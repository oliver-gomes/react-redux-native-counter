import React from "react";
import { TouchableHighlight, StyleSheet, Text, View } from "react-native";

export default class Counter extends React.Component {
  state = {
    count: 0
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 32 }}>Basic React Redux</Text>
        <Text>{this.state.count}</Text>
        <View>
          <TouchableHighlight
            onPress={this.increment}
            style={{ backgroundColor: "green", marginRight: 5, padding: 10 }}
          >
            <Text>Increment</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={this.decrement}
            style={{ backgroundColor: "red", marginRight: 5, padding: 10 }}
          >
            <Text>Decrement</Text>
          </TouchableHighlight>
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

import React from "react";
import { TouchableHighlight, StyleSheet, Text, View } from "react-native";
import Counter from "./src/Counter";
import { Provider } from "react-redux";
import store from "./src/store/";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Counter />
      </Provider>
    );
  }
}

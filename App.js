import React from "react";
import { TouchableHighlight, StyleSheet, Text, View } from "react-native";
import Counter from "./src/Counter";
import { createStore } from "redux";
import { Provider } from "react-redux";

const initialState = {
  count: 0
};

const reducert = (state = initialState, action) => {
  return state;
};

const store = createStore(reducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Counter />
      </Provider>
    );
  }
}

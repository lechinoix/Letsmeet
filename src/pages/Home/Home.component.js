// @flow

import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import Page from 'Letsmeet/src/components/Page';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

type PropsType = {};

type StateType = {};

class Home extends Component {
  render() {
    return (
      <Page>
        <Text>Hello !!</Text>
      </Page>
    );
  }
}

export default Home;

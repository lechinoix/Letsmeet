import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import * as Pages from 'Letsmeet/src/pages';

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    borderBottomWidth: 1,
    elevation: 0,
  },
});

const Navigator = StackNavigator({
  home: {
    screen: Pages.Home,
    path: 'home',
    navigationOptions: ({ navigation }) => ({
      headerTitle: "Letsmeet",
      headerTitleStyle: { alignSelf: 'center' },
      headerLeft: <View />,
      headerStyle: styles.header,
    }),
  },
}, {
  initialRouteName: 'home',
  navigationOptions: {
    headerBackTitle: null,
    headerStyle: styles.header,
  },
});

export default Navigator;

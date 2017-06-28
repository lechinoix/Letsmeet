import React, { PropTypes } from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
  },
});

const Page = props => (
  <View style={styles.page}>
    {props.children}
  </View>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

Page.defaultProps = {
  children: null,
};

export default Page;

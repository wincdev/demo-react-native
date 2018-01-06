import React from 'react';
import { Root } from 'native-base';
import RootNavigation from './src/app/navigations/RootNavigation';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentWillMount() {
    this.setState({ isReady: true });
  }

  _renderLoader() {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator animating={true} size="large" color="#9d0000" />
      </View>
    );
  }

  render() {
    if (!this.state.isReady) {
      return this._renderLoader();
    }
    return (
      <Root>
        <RootNavigation />
      </Root>
    )
  }
}

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  }
});

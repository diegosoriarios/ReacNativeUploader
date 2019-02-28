import React from 'react'
import { View, StyleSheet } from 'react-native'
import NewPhoto from './src/components/NewPhoto'
import Navigator from './src/components/Navigator'

export default class App extends React.Component {
  state = {
    screen: 0
  }

  handleClick = i => {
    this.setState({
      screen: i
    })
  }

  render(){
    switch(this.state.screen){
      case 0:
        return <Navigator page={this.handleClick} />
      case 1:
        return(
          <View style={styles.container}>
              <NewPhoto />
              <Navigator page={this.handleClick} />
          </View>
        );
      case 2:
      return <Navigator page={this.handleClick} />
    }
    
  }
}

const styles = StyleSheet.create({
  container: {
    height: "100%"
  },
})
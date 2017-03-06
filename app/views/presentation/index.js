// index.js
/**
 * Studya Classroom
 * https://www.studya.us
 * @flow
 */
'use strict'

import React, { Component } from 'react'
import {
  ListView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  WebView
} from 'react-native'
import { Spinner } from 'native-base'

export default class Presentation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      presentation: null
    }
  }
  componentDidMount() {
    let dataURL = 'http://ec2-35-161-28-132.us-west-2.compute.amazonaws.com/wp-json/wp/v2/presentations'
    fetch(dataURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          presentation: res[0]
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }
  render() {
    const { presentation } = this.state

    if (!presentation) {
      return (
        <View style={styles.container}>
          <Spinner color='green' />
        </View>
      )
    }
    const content = '<h1>' + presentation.title.rendered + '</h1>' + presentation.content.rendered
    return (
      <WebView
        source={{html: content}}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 0,
    backgroundColor: '#F5FCFF'
  }
})
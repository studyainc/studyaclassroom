// index.js
/**
 * Studya Classroom
 * https://www.studya.us
 * @flow
 */
'use strict'

import React, { Component } from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native'

export default class Presentation extends Component {
  render() {
    return (
      <View>
        <Text>Hello World!!!</Text>
        <ScrollView>
          <Text>Presentation</Text>
          <Text>Presentation</Text>
          <Text>Presentation</Text>
          <Text>Presentation</Text>
        </ScrollView>
      </View>
    )
  }
}

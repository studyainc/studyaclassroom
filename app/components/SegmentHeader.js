// SegmentHeader.js
/**
 * Studya Classroom
 * https://www.studya.us
 * @flow
 */
'use strict'

import React, { Component } from 'react'
import { Body, Button, Container, Content, Header, Icon, Left, Right, Segment, Text } from 'native-base'
import { Actions, ActionConst } from 'react-native-router-flux'

export default class SegmentHeader extends Component {
  render() {
    return (
      <Segment>
        <Button first active onPress={() => Actions.Presentation({type:ActionConst.REPLACE})}><Text>Presentation</Text></Button>
        <Button last onPress={() => Actions.Discussion({type:ActionConst.REPLACE})}><Text>Discussion</Text></Button>
      </Segment>
    )
  }
}

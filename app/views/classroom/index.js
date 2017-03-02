// index.js
/**
 * Studya Classroom
 * https://www.studya.us
 * @flow
 */
'use strict'

import React, { Component } from 'react'
import { Body, Button, Container, Content, Header, Icon, Left, Right, Segment, Text } from 'native-base'
import { Actions } from 'react-native-router-flux'

export default class Classroom extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Segment>
            <Button first onPress={() => Actions.Presentation()}><Text>Presentation</Text></Button>
            <Button last active onPress={() => Actions.Discussion()}><Text>Discussion</Text></Button>
          </Segment>
        </Header>
      </Container>
    )
  }
}

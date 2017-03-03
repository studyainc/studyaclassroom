// SegmentHeader.js
/**
 * Studya Classroom
 * https://www.studya.us
 * @flow
 */
'use strict'

import React, { Component } from 'react'
import { Navigator } from 'react-native'
import { Button, Segment, Text } from 'native-base'
import { Actions, ActionConst } from 'react-native-router-flux'

const FIRST = 1, LAST = 2

export default class SegmentHeader extends Component {
  constructor(props) {
    super(props);
    this.onPresentation = this.onPresentation.bind(this)
    this.onDiscussion = this.onDiscussion.bind(this)

    this.state = {
      selected: FIRST
    }
  }

  onPresentation (p) {
    this.setState({selected: p})
    console.log(p)
    Actions.Presentation({type:ActionConst.REPLACE})
  }

  onDiscussion (p) {
    this.setState({selected: p})
    console.log(p)
    Actions.Discussion({type:ActionConst.REPLACE})
  }

  render () {
    const { selected } = this.state
    return  (
      <Segment style={{backgroundColor: 'transparent', marginTop: Navigator.NavigationBar.Styles.General.StatusBarHeight}}>
        <Button first active={selected === FIRST} onPress={() => this.onPresentation(FIRST)}><Text>Presentation</Text></Button>
        <Button last  active={selected === LAST} onPress={() => this.onDiscussion(LAST)}><Text>Discussion</Text></Button>
      </Segment>
    )
  }
}

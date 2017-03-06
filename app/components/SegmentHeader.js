// SegmentHeader.js
/**
 * Studya Classroom
 * https://www.studya.us
 * @flow
 */
'use strict'

import React, { Component } from 'react'
import { Dimensions, Navigator, View } from 'react-native'
import { Actions, ActionConst } from 'react-native-router-flux'
import { SegmentedControls } from 'react-native-radio-buttons'

const {height, width} = Dimensions.get('window')

const options = [
  'Presentation',
  'Discussion',
]

export default class SegmentHeader extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedSegment: this.props.param
    }
  }

  setSelectedOption (selectedSegment, selectedIndex){
    this.setState({ selectedSegment })

    if (selectedIndex === 0) {
      Actions.Discussion({type:ActionConst.BACK})
    } else if (selectedIndex === 1) {
      Actions.Discussion({type:ActionConst.PUSH})
    }
  }

  render () {
    return (
      <View style={{backgroundColor: 'transparent', justifyContent: 'center', alignSelf: 'center', alignItems: 'center', width: width*2/3, marginTop: 5+Navigator.NavigationBar.Styles.General.StatusBarHeight}}>
        <SegmentedControls
          options={ options }
          onSelection={ this.setSelectedOption.bind(this) }
          selectedOption={ this.state.selectedSegment } />
      </View>
    )
  }
}

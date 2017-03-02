// index.js
/**
 * Studya Classroom
 * https://www.studya.us
 * @flow
 */
'use strict'

import {
  AppRegistry
} from 'react-native'

import React, { Component } from 'react'
import {
  Navigator,
  StyleSheet,
  Text,
  View
} from 'react-native'

import { Actions, Router, Scene } from 'react-native-router-flux'
import Menu, {
  MenuContext,
  MenuOptions,
  MenuOption,
  MenuTrigger
} from 'react-native-popup-menu'
import Icon from 'react-native-vector-icons/MaterialIcons'

import SegmentHeader from './components/SegmentHeader'
import Discussion from './views/discussion/index'
import Presentation from './views/presentation/index'
import Whiteboard from './views/whiteboard/index'
import Classroom from './views/classroom/index'

const NavigatorMenu = () => (
  <Menu>
    <MenuTrigger style={styles.trigger}>
      <Icon name="more-horiz" size={30} color="#900" />
    </MenuTrigger>
    <MenuOptions customStyles={optionsStyles}>
      <MenuOption onSelect={() => Actions.Discussion()} text="Discussion" />
      {/* <View style={styles.divider}/> */}
      <MenuOption onSelect={() => Actions.Whiteboard()} text="Whiteboard" />
    </MenuOptions>
  </Menu>
)

const scenes = Actions.create(
  <Scene key="root">
    {/*navBar={SegmentHeader}*/}
    {/* <Scene key="Classroom" component={Classroom} title="Classroom" direction="vertical" hideNavBar={true} initial={true} > */}
    <Scene key="Presentation" component={Presentation} title="Presentation"
      sceneStyle={{paddingTop: Navigator.NavigationBar.Styles.General.TotalNavHeight}} />
    <Scene key="Discussion" component={Discussion} title="Discussion"
      sceneStyle={{paddingTop: Navigator.NavigationBar.Styles.General.TotalNavHeight}} />
    <Scene key="Whiteboard" component={Whiteboard} title="Whiteboard" initial={true} />
  </Scene>
)

export default class StudyaClassroom extends Component {
  render() {
    return (
      <MenuContext>
        <Router scenes={scenes}/>
      </MenuContext>
    )
  }
}

const styles = StyleSheet.create({
  divider: {
    marginVertical: 5,
    marginHorizontal: 2,
    borderBottomWidth: 1,
    borderColor: '#ccc'
  },
})

const optionsStyles = {
  optionsContainer: {
    padding: 5,
  },
  optionsWrapper: {
  },
  optionWrapper: {
    margin: 5,
  },
  optionTouchable: {
    activeOpacity: 70,
  },
  optionText: {
    color: 'black',
  },
}

AppRegistry.registerComponent('StudyaClassroom', () => StudyaClassroom)
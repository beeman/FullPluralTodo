import React from 'react-native'

const {
  Text,
  TouchableHighlight,
  View,
} = React

export default function render (styles) {
  return (
    <View style={styles.container}>
      <Text
          style={styles.label}
      >ios: {this.props.todo.task}</Text>

      <TouchableHighlight
          onPress={this.onDonePressed.bind(this)}
          style={styles.doneButton}
      >
        <Text>Done</Text>
      </TouchableHighlight>
    </View>
  )
}

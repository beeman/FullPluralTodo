import React from 'react-native'

const {
  Image,
  Text,
  TouchableHighlight,
  View,
} = React

const localStyle = React.StyleSheet.create({
  doneButton: {
    borderRadius: 5,
    padding: 5
  },
})

export default function render (styles) {
  return (
    <View style={styles.container}>
      <Text
          style={styles.label}
      >{this.props.todo.task}</Text>

      <TouchableHighlight
          onPress={this.onDonePressed.bind(this)}
          style={localStyle.doneButton}
          underlayColor='#ddd'
      >
        <Image
          source={require('../images/done.png')}
        />
      </TouchableHighlight>
    </View>
  )
}

import React from 'react-native'
import TaskList from './TaskList'
import TaskForm from './TaskForm'
import store from './todoStore'

let {
  AppRegistry,
  Component,
  Navigator,
} = React

class PluralTodo extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = store.getState()

    store.subscribe(() => {
      this.setState(store.getState()) // eslint-disable-line react/no-set-state
    })
  }

  onAddStarted () {
    this.nav.push({
      name: 'taskform'
    })
  }

  onCancel () {
    this.nav.pop()
  }

  onDone (todo) {
    console.log('Todo completed', todo)
    const filteredTodos =
      this.state.todos.filter((filterTodo) => {
        return filterTodo !== todo
      })
    this.setState({ todos: filteredTodos })
  }

  onAdd (task) {
    console.log('A task was added', task)
    store.dispatch({
      type: 'ADD_TODO',
      task,
    })
    this.nav.pop()
  }

  renderScene (route, nav) {
    switch (route.name) {
    case 'taskform':
      return (
          <TaskForm
              onAdd={this.onAdd.bind(this)}
              onCancel={this.onCancel.bind(this)}
          />
      )
    default:
      return (
        <TaskList
            onAddStarted={this.onAddStarted.bind(this)}
            onDone={this.onDone.bind(this)}
            todos={this.state.todos}
        />
      )
    }
  }

  configureScene () {
    return Navigator.SceneConfigs.FloatFromBottom
  }

  render () {
    return (
      <Navigator
          configureScene={this.configureScene}
          initialRoute={{ name: 'tasklist', index: 0 }}
          ref={((nav) => {
            this.nav = nav
          })}
          renderScene={this.renderScene.bind(this)}
      />
    )
  }

}

export default PluralTodo

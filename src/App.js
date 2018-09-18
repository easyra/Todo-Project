import React, { Component } from "react";
import logo from "./logo.svg";
import { connect } from "react-redux";
import TodoList from "./component/TodoList";
import TodoForm from "./component/TodoForm";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoForm />
        <TodoList />
      </div>
    );
  }
}

const mapPropsToState = state => {
  return {
    todos: state.todos
  };
};

export default connect(mapPropsToState)(App);

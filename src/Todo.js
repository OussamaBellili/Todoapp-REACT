import React, { Component } from "react";
import "./App.css";

export default class Todo extends Component {
  state = {
    Listtaks: [],
    task: ""
  };

  // WE CAN USE CONSTRUCTOR
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //         Listtaks: [],
  //         task: ""
  //     };
  //   }

  // GET TASK FROM INPUT TEXT AND CHANGE THE STATE TASK
  handleChange = (event) => {
    this.setState({
      task: event.target.value
    });
  };

  // ADD TASK IN THE LISTTASKS TAB WITH CHANGING THE STATE LISTTASKS
  addTask = (task) => {
    this.setState({
      Listtaks: [
        ...this.state.Listtaks,
        { task, completed: false, status: "Complete" }
      ],
      task: ""
    });
  };

  // DELETING TASK FROM THE TAB LISTTASKS
  deleteTask = (id) => {
    this.setState({
      Listtaks: this.state.Listtaks.filter((el, index) => index !== id)
    });
  };

  // MARKING THE DONE TASK BY CLICKING ON COMPLETE OR WE CAN CANCEL IF IT'S UNDONE
  completeTask = (id) => {
    this.setState({
      Listtaks: this.state.Listtaks.map((el, index) => {
        if (index === id) {
          el.completed = !el.completed;
          el.status === "Complete"
            ? (el.status = "Undo")
            : (el.status = "Complete");
          return el;
        } else return el;
      })
    });
  };

  render() {
    return (
      <div>
        <section className="todo-header">
          <h1>To-Do App!</h1>
          <h3>Add New To-Do</h3>
          <input
            type="text"
            placeholder="Enter new task"
            className="new-task"
            onChange={event => this.handleChange(event)}
            value={this.state.task}
          />
          <button
            className="add-button"
            onClick={() => this.addTask(this.state.task)}
          >
            Add
          </button>
        </section>
        <section className="display-tasks">
          <h2>Let's get some work done!</h2>
          <hr />
          <ul className="tasks-list">
            {this.state.Listtaks.map((element, index) => (
              <li key={index}>
                <button
                  className="task-button"
                  onClick={() => this.completeTask(index)}
                >
                  {element.status}
                </button>
                <button
                  className="task-button"
                  onClick={() => this.deleteTask(index)}
                >
                  Delete
                </button>
                <span className={`task ${element.completed && "completed-task"}`}>
                  {element.task}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    );
  }
}

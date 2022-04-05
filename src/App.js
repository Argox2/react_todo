import React, {Component} from "react";
import Table from "./Table";
import Form from "./Form";

class App extends Component {

    state = {
        todos: [],
    }

    removeTodo = (index) => {
        const {todos} = this.state;

        this.setState({
            todos: todos.filter((todo, i) => {
                return i !== index;
            }),
        })
    }

    handleSubmit = (todo) => {
        this.setState({todos: [...this.state.todos, todo]})
    }

    render() {
        const {todos} = this.state;
            
        return (
            <div className="container">
                <Form handleSubmit={this.handleSubmit}/>
                <Table todoData={todos} removeTodo={this.removeTodo}/>
            </div>
        )
    }
}

export default App;
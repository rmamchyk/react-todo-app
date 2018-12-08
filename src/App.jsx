import React from 'react';
import PropTypes from 'prop-types';

import Header from './components/Header';
import Todo from './components/Todo';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: this.props.initialData
        };

        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleStatusChange(id) {
        let todos = this.state.todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });

        this.setState({todos});
    }

    handleDelete(id) {
        let todos = this.state.todos.filter(todo => todo.id !== id);
        this.setState({todos});
    }
    
    render() {
        return (
            <main>
                <Header title={this.props.title} />
    
                <section className="todo-list">
                    {this.state.todos.map(todo => 
                        <Todo key={todo.id} 
                            id={todo.id}
                            title={todo.title} 
                            completed={todo.completed}
                            onDelete={this.handleDelete}
                            onStatusChange={this.handleStatusChange} />)
                    }
                </section>
            </main>
        );
    }
};

App.propTypes = {
    title: PropTypes.string,
    initialData: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    })).isRequired
};

App.defaultProps = {
    title: 'React Todo'
};

export default App;
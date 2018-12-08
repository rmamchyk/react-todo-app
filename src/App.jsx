import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup , CSSTransition } from 'react-transition-group';
import axios from 'axios';

import Header from './components/Header';
import Todo from './components/Todo';
import Form from './components/Form';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: this.props.initialData
        };

        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    componentDidMount() {
        axios.get('/api/todos')
            .then(res => res.data)
            .then(todos => {
                this.setState({todos});
            })
            .catch(this.handleError);
    }

    handleStatusChange(id) {
        axios.patch(`/api/todos/${id}`)
            .then(res => {
                let todos = this.state.todos.map(todo => {
                    if (todo.id === id) {
                        todo = res.data;
                    }
                    return todo;
                });
                this.setState({todos});
            })
            .catch(this.handleError);
    }

    handleAdd(title) {
        axios.post('/api/todos', {title})
            .then(res => res.data)
            .then(todo => {
                let todos = [...this.state.todos, todo];
                this.setState({todos});
            })
            .catch(this.handleError);
    }

    handleDelete(id) {
        axios.delete(`/api/todos/${id}`)
            .then(() => {
                let todos = this.state.todos.filter(todo => todo.id !== id);
                this.setState({todos});
            })
            .catch(this.handleError);
    }
    
    handleEdit(id, title) {
        axios.put(`/api/todos/${id}`, {title})
            .then(res => {
                let todos = this.state.todos.map(todo => {
                    if (todo.id === id) {
                        todo = res.data;
                    }
                    return todo;
                });
                this.setState({todos});
            })
            .catch(this.handleError);
    }

    handleError(err) {
        console.log(err);
    }

    render() {
        return (
            <main>
                <Header title={this.props.title} todos={this.state.todos} />
    
                <TransitionGroup
                    component="section"
                    className="todo-list"
                    appear={true}
                    timeout={500}>
                    {this.state.todos.map((todo, index) => 
                        <CSSTransition
                            key={todo.id}
                            timeout={500}
                            classNames="slide"
                            unmountOnExit
                            >
                            <Todo key={todo.id} 
                                id={todo.id}
                                title={todo.title} 
                                completed={todo.completed}
                                onDelete={this.handleDelete}
                                onEdit={this.handleEdit}
                                onStatusChange={this.handleStatusChange} />
                        </CSSTransition>
                            )
                    }
                </TransitionGroup>

                <Form onAdd={this.handleAdd}/>
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
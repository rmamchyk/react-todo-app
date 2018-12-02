import React from 'react';
import PropTypes from 'prop-types';

import Header from './components/Header';
import Todo from './components/Todo';

function App(props) {
    return (
        <main>
            <Header title={props.title} />

            <section className="todo-list">
                {props.todos.map(todo => 
                    <Todo key={todo.id} title={todo.title} completed={todo.completed}/>)
                }
            </section>
        </main>
    );
};

App.propTypes = {
    title: PropTypes.string,
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    })).isRequired
};

App.defaultProps = {
    title: 'React Todo'
};

export default App;
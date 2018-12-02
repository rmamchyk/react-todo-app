import React from 'react';
import PropTypes from 'prop-types';

function App(props) {
    return (
        <main>
            <header>
                <h1>{props.title}</h1>
            </header>

            <section className="todo-list">
                <div className="todo completed">
                    <button className="checkbox icon">
                        <i className="material-icons">check_box</i>
                    </button>
                    <span className="todo-title">Learn JavaScript</span>
                    <button className="delete icon">
                        <i className="material-icons">delete</i>
                    </button>
                </div>
                <div className="todo">
                    <button className="checkbox icon">
                        <i className="material-icons">check_box_outline_blank</i>
                    </button>
                    <span className="todo-title">Learn React</span>
                    <button className="delete icon">
                        <i className="material-icons">delete</i>
                    </button>
                </div>
            </section>
        </main>
    );
};

App.propTypes = {
    title: PropTypes.string
};

App.defaultProps = {
    title: 'React Todo'
};

export default App;
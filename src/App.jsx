import React from 'react';

function App() {
    return (
        <main>
            <header>
                <h1>React Todo</h1>
            </header>
            <section className="todo-list">
                <div className="todo">
                    <button className="checkbox icon">
                        <i className="material-icons">check_box_outline_blank</i>
                    </button>
                    <span className="todo-title">Learn React</span>
                    <button className="delete icon">
                        <i className="material-icons">delete</i>
                    </button>
                </div>
                <div className="todo">
                    <button className="checkbox icon">
                        <i className="material-icons">check_box_outline_blank</i>
                    </button>
                    <span className="todo-title">Learn Redux</span>
                    <button className="delete icon">
                        <i className="material-icons">delete</i>
                    </button>
                </div>
            </section>
        </main>
    );
}

export default App;
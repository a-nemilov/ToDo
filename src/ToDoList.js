import React, { Component } from 'react';
import './index.css';
class ToDoList extends Component {

    render() {
        const { drop, allowDrop, drag, removeCard, storage } = this.props;
        const arrToDo = storage.filter(item => item.status === 'toDo');
        return (
            <div
                className="toDo"
                id="toDo"
                draggable="true"
                onDrop={drop}
                onDragOver={allowDrop}
            >
                <div className="red">to-Do</div>
                {arrToDo.map((e) =>
                    <div
                        key={e.id}
                        id={e.id}
                        draggable
                        className="card"
                        onDragStart={drag}
                    >
                        <div
                            id={e.id}
                            onClick={removeCard}
                            className="remove-card">x</div>
                        <div className="title">{e.title}</div>
                        <div className="description">{e.description}</div>
                        <div className="status">{e.status}</div>
                    </div>
                )}
            </div>

        )
    }
}
export default ToDoList;
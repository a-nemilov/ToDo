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
                <div>toDo</div>
                {arrToDo.map((e) =>
                    <div
                        id={e.id}
                        draggable="true"
                        className="card"
                        onDragStart={drag}
                    >
                        <div
                            id={e.id}
                            onClick={removeCard}
                            className="remove-card">x</div>
                        <div>{e.title}</div>
                        <div>{e.description}</div>
                        <div>{e.status}</div>
                    </div>
                )}
            </div>

        )
    }
}
export default ToDoList;
import React, { Component } from 'react';
import './index.css';
class DoneList extends Component {

    render() {
        const { drop, allowDrop, drag, removeCard, storage } = this.props;
        const arrDone = storage.filter(item => item.status === 'done');
        return (
            <div
                onDrop={drop}
                onDragOver={allowDrop}
                className="done"
                id="done"
            >
                <div>Done</div>
                {arrDone.map((e) =>
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
export default DoneList;
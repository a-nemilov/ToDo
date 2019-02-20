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
                draggable="false"
            >
                <div className="green">Done</div>
                {arrDone.map((e) =>
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
export default DoneList;
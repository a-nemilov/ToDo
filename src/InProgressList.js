
import React, { Component } from "react";
import './index.css';

class InProgressList extends Component {
    render() {
        const { drop, allowDrop, drag, removeCard, storage } = this.props;
        const arrInProgress = storage.filter(item => item.status === 'inProress');

        return (
            <div
                className="inProgress"
                onDrop={drop}
                onDragOver={allowDrop}
                id="inProress"
                draggable="false"
            >
                <div className="yellow">in Progress</div>
                {arrInProgress.map((e) =>
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

export default InProgressList;



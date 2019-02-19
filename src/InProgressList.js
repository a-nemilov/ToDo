
import React, { Component } from "react";

class InProgressList extends Component {

    render() {
        const { drop, allowDrop, drag, removeCard, storage } = this.props;
        const arrInProgress = storage.filter(item => item.status === 'inProress');

        return (
            <div
                onMouseUp={drop}
                className="inProgress"
                onDrop={drop}
                onDragOver={allowDrop}
                id="inProress"
            >
                <div>inProgress</div>
                {arrInProgress.map((e) =>
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

export default InProgressList;



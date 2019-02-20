import React, { Component } from 'react';
import './index.css';
class AddTask extends Component {

    render() {
        const { currentValueDescrip, currentValueTitle, handleChangeTitle, onSubmit, handleChangeDescrip, onClose } = this.props;
        return (
            <div
                className="popUp"
            >
                <button
                    onClick={onClose}
                    className="close">x</button>

                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    value={currentValueTitle}
                    onChange={handleChangeTitle}
                    required />

                <label htmlFor="description">Description</label>
                <textarea
                    id="description"
                    value={currentValueDescrip}
                    onChange={handleChangeDescrip}>
                </textarea>

                <button
                    className="btn-add"
                    onClick={onSubmit}
                    type="submite">
                    Add Task
              </button>
            </div>
        )
    }
}

export default AddTask;
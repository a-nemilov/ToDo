import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import './index.css';
import AddTask from './AddTask';
import ToDoList from './ToDoList';
import InProgressList from './InProgressList';
import DoneList from './DoneList';


class App extends Component {
  state = {
    popUp: false,
    currentValueTitle: '',
    currentValueDescrip: '',
    storage: [],
    loading: true
  }
  componentDidMount() {
    setTimeout(this.localStorage, 5000)
    setTimeout(() =>
      this.setState({ loading: false }), 5000);
  }

  addTask = () => {
    this.setState({
      popUp: true,
    });
  }


  localStorage = () => {
    const arr = Object.keys(localStorage).filter((e) => e > 0);
    const storage = arr.map(item => JSON.parse(localStorage.getItem(item)));
    this.setState({
      storage: storage
    })

  }
  handleChangeTitle = (e) => {
    const value = e.currentTarget.value;
    this.setState({
      currentValueTitle: value,
    })
  };

  handleChangeDescrip = (e) => {
    const value = e.currentTarget.value;
    this.setState({
      currentValueDescrip: value,
    })
  };

  onClose = () => {
    this.setState({
      popUp: false,
    });
  }

  onSubmit = () => {
    if (this.state.currentValueTitle.length > 0) {
      const hash = new Date().valueOf().toString(10);
      const obj = {
        title: this.state.currentValueTitle,
        description: this.state.currentValueDescrip,
        status: 'toDo',
        id: hash
      }
      const serialObj = JSON.stringify(obj);
      localStorage.setItem(hash, serialObj)
      this.setState({
        popUp: false,
        currentValueTitle: '',
        currentValueDescrip: ''
      });
    } else {
      alert("Title is empty!!!!");
    }
    this.localStorage();
  }

  removeCard = (event) => {
    localStorage.removeItem(event.currentTarget.id);
    this.localStorage();
  }

  allowDrop = (event) => {
    event.preventDefault();
  }

  drag = (event) => {
    event.dataTransfer.setData("text", event.target.id);
  }

  drop = (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const curentObj = JSON.parse(localStorage[data]);
    curentObj.status = event.currentTarget.id;
    localStorage[data] = JSON.stringify(curentObj);
    this.localStorage();
  }

  render() {

    const { popUp, currentValueTitle, currentValueDescrip, storage, loading } = this.state;


    return (

      <div className="main">
        {popUp ?
          <AddTask
            currentValueTitle={currentValueTitle}
            currentValueDescrip={currentValueDescrip}
            handleChangeTitle={this.handleChangeTitle}
            onSubmit={this.onSubmit}
            handleChangeDescrip={this.handleChangeDescrip}
            onClose={this.onClose}
          /> : null}

        {loading ? <div className="spinner">
          <Loader
            type="ThreeDots"
            color="#somecolor"
            height={80}
            width={80}

          />
        </div> : null}

        <button
          disabled={popUp}
          onClick={this.addTask}
          className="btn-add">
          Add Task
        </button>

        <div className="table">
          <ToDoList
            drop={this.drop}
            allowDrop={this.allowDrop}
            drag={this.drag}
            removeCard={this.removeCard}
            storage={storage}
          />

          <InProgressList
            drop={this.drop}
            allowDrop={this.allowDrop}
            drag={this.drag}
            removeCard={this.removeCard}
            storage={storage}
          />


          <DoneList
            drop={this.drop}
            allowDrop={this.allowDrop}
            drag={this.drag}
            removeCard={this.removeCard}
            storage={storage}
          />
        </div>
      </div>
    );
  }
}


export default App;

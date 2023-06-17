import React from "react";
import './ListToDo.scss';
import AddToDo from './AddToDo';
import { toast } from 'react-toastify';


class ListToDo extends React.Component {
    state = {
        ListToDos: [
            { id: '1', title: 'Doing homework' },
            { id: '2', title: 'Making video' },
            { id: '3', title: 'Fixing bugs' }


        ],
        editTodo: {}
    }
    addNewToDo = (todo) => {
        this.setState({
            ListToDos: [...this.state.ListToDos, todo]
        })
        toast.success("wow so easy!")

    }
    handleDeleteTodo = (todo) => {
        let currentTodos = this.state.ListToDos;
        currentTodos = currentTodos.filter(item => item.id !== todo.id)
        this.setState({
            ListToDos: currentTodos
        }
        )

        toast.success("delete success")

    }
    handleEditToDo = (todo) => {
        let { editTodo, ListToDos } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        // save 
        if (isEmptyObj === false && editTodo.id === todo.id) {
            let ListToDoCopy = [...ListToDos];
            let objIndex = ListToDoCopy.findIndex((item => item.id === todo.id))
            ListToDoCopy[objIndex].title = editTodo.title;
            this.setState({
                ListToDos: ListToDoCopy,
                editTodo: {}
            })
            toast.success("update done!");
            return;
        }

        this.setState({
            editTodo: todo
        })


    }
    handleOnchangeEditToDo = (event) => {
        let editToDoCopy = { ... this.state.editTodo };
        editToDoCopy.title = event.target.value;
        this.setState({
            editTodo: editToDoCopy
        })
    }
    render() {
        let { ListToDos, editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        return (
            <>

                <div className="list-todo-container">
                    <AddToDo
                        addNewToDo={this.addNewToDo}

                    />
                    <div className="list-todo-content">
                        {ListToDos && ListToDos.length > 0 &&
                            ListToDos.map((item, index) => {
                                return (
                                    <div className="todo-child" key={item.id}>
                                        {isEmptyObj === true ?
                                            <span>{index + 1}-{item.title}</span>
                                            :
                                            <>
                                                {editTodo.id === item.id ?
                                                    <span>
                                                        {index + 1} - <input
                                                            value={editTodo.title}
                                                            onChange={(event) => this.handleOnchangeEditToDo(event)} />
                                                    </span>
                                                    :
                                                    <span>{index + 1}-{item.title}</span>
                                                }
                                            </>

                                        }

                                        <button className="edit"
                                            onClick={() => this.handleEditToDo(item)}>
                                            {isEmptyObj === false && editTodo.id === item.id ? 'save' : 'edit'}
                                        </button>
                                        <button className="delete"
                                            onClick={() => this.handleDeleteTodo(item)}
                                        >Delete</button>
                                    </div>
                                )
                            }
                            )
                        }


                    </div>
                </div>

            </>

        )


    }
}
export default ListToDo;
import React from "react";
import { toast } from 'react-toastify';

class AddToDo extends React.Component {
    state = {
        title: ''
    }
    handleOnchangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })

    }
    handleAddToDo = () => {
        if (!this.state.title) {
            toast.warning("missing title's ToDo")
            return;
        }

        let todo = {
            id: Math.floor(Math.random() * 100),
            title: this.state.title
        }
        this.props.addNewToDo(todo);
        this.setState({
            title: ''
        })

    }
    render() {
        let { title } = this.state
        return (
            <>
                <div className="add-todo">
                    <input type="text" value={title}
                        onChange={(event) => this.handleOnchangeTitle(event)}
                    />
                    <button type="button" className="add"
                        onClick={() => this.handleAddToDo()}
                    >Add</button>
                </div>
            </>
        )






    }
}
export default AddToDo;
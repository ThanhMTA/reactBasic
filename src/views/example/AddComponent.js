import React from "react";
class AddComponent extends React.Component {
    state = {
        Title: ' ',
        salary: ' '
    }
    handleChangelSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }
    handleTitleJob = (event) => {
        this.setState({
            Title: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        console.log(' check data input :', this.state)
        this.props.addNewJob({
            id: Math.floor(Math.random() * 10),
            Title: this.state.Title,
            salary: this.state.salary
        })

    }

    render() {
        return (
            <form>
                <label for="fname">Job 's title':</label><br />
                <input type="text"
                    value={this.state.Title}
                    onChange={(event) => this.handleTitleJob(event)}
                />
                <br />
                <label for="lname">salary:</label><br />
                <input type="text"
                    value={this.state.salary}
                    onChange={(event) => this.handleChangelSalary(event)}
                />
                <br />
                <input type="Submit" value="Submit" onClick={(event) => this.handleSubmit(event)} />
            </form>
        )


    }
}
export default AddComponent;
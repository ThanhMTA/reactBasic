import React from 'react';
import ChildComponent from './ChildComponent';

class Kiet extends React.Component {
    state = {
        firstName: 'trinh',
        lastName: 'thanh',
        arrJobs: [

            { id: '1', title: 'developer', salary: '500$' },
            { id: '2', title: 'Tester', salary: '400$' },
            { id: '3', title: 'dev', salary: '600$' }
        ]

    }
    handleChangelLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    handleFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        console.log(' check data input :', this.state)
    }

    render() {

        return (
            <>
                <form>
                    <label for="fname">First name:</label><br />
                    <input type="text"
                        value={this.state.firstName}
                        onChange={(event) => this.handleFirstName(event)}
                    />
                    <br />
                    <label for="lname">Last name:</label><br />
                    <input type="text"
                        value={this.state.lastName}
                        onChange={(event) => this.handleChangelLastName(event)}
                    />
                    <br />
                    <input type="Submit" value="Submit" onClick={(event) => this.handleSubmit(event)} />
                </form>
                <ChildComponent
                    name={this.state.firstName}
                    age={'25'}
                    arrJobs={this.state.arrJobs}
                />

            </>

        )


    }
}
export default Kiet;
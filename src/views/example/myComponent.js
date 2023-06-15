import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';

class Kiet extends React.Component {
    state = {

        arrJobs: [

            { id: '1', Title: 'developer', salary: '500' },
            { id: '2', Title: 'Tester', salary: '400' },
            { id: '3', Title: 'dev', salary: '600' }
        ]

    }
    addnewJob = (job) => {
        console.log('check', job)
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }

    render() {

        return (
            <>
                <AddComponent
                    addNewJob={this.addnewJob}
                />


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
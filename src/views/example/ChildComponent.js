import React from 'react';
import './demo.css';

class ChildComponent extends React.Component {

    state = {
        showJobs: false
    }
    handleShowHile = (status) => {
        this.setState({
            showJobs: !this.state.showJobs
        })

    }
    handleOneClickDelete = (job) => {
        console.log(' vua xoa  j noa', job)
        this.props.deleteAjob(job)
    }



    render() {
        console.log('check props', this.props)
        let { name, age, arrJobs } = this.props;
        let { showJobs } = this.state;
        let check = showJobs === true ? 'thanh xinh gai' : 'thanh cute'
        console.log('check', check)
        return (
            <>
                {showJobs === false ?
                    <div >
                        <button className='btn-show'
                            onClick={() => this.handleShowHile()}>
                            show
                        </button>
                    </div>
                    :
                    <>
                        <div className="job-lists">
                            {
                                arrJobs.map((item, index) => {
                                    if (item.salary > 500) {
                                        return (
                                            <div key={item.id}>
                                                {item.Title} - {item.salary}
                                                <></> <button onClick={() => this.handleOneClickDelete(item)}>x</button>
                                            </div>

                                        )
                                    }
                                })

                            }


                        </div>

                        <div> <button onClick={() => this.handleShowHile()}>Hile</button></div>
                    </>
                }


            </>
        )
    }
}
// const ChildComponent = (props) => {
//     console.log('props:', props)
//     let { name, age, arrJobs } = props
//     return (
//         <>
//             <div>
//                 {
//                     arrJobs.map((item) => {
//                         return (
//                             <div>
//                                 {item.title}-{item.salary}
//                             </div>

//                         )

//                     })
//                 }
//             </div>
//         </>

//     )
// }
export default ChildComponent;
import React from "react";
import { withRouter } from "react-router";
class Home extends React.Component {
    componentDidMount() {
        //delay
        setTimeout(() => {
            this.props.history.push('/todo')
        }, 3000)
    }
    render() {
        return (
            <>
                <div>
                    Hello word form homepage
                </div>
            </>
        )
    }
}
export default withRouter(Home);
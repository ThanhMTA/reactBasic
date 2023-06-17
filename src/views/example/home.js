import React from "react";
import { withRouter } from "react-router";
import Color from "../Hoc/Color";

class Home extends React.Component {
    // componentDidMount() {
    //     //delay
    //     setTimeout(() => {
    //         this.props.history.push('/todo')
    //     }, 3000)
    // }
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
export default Color(Home);
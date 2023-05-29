import React from 'react';

class Kiet extends React.Component {
    state = {
        name: "thanh",
        channel: "hoc reactjs"
    }
    handleOnchangeName = (event) => {
        this.setState({
            name: event.target.value
        }
        )
    }
    handleClickButton = () => {
        console.log('thanh thanh')
        alert('click me')
    }

    render() {
        let name = ' Kiet';
        return (
            <>
                <input value={this.state.name} type='text'
                    onChange={(event) => this.handleOnchangeName(event)}
                />
                <h2 className='thanh'>Hi, I am  {name}!</h2>
                <div> haizz:{this.state.name}</div>
                <div className="third">
                    <button onClick={() => this.handleClickButton()}>click me</button>
                </div>
            </>

        )


    }
}
export default Kiet;
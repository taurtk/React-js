
import React from 'react';
class Operations extends React.Component
{

    constructor(props)
    {
        super(props)
        this.state = {counter:0}
    }

    render()
    {
        console.log(this.state.counter)
        return(
            
            <>
            <button onClick={()=> {
                this.setState({counter:this.state.counter+1})
            }}>
                Add
            </button>
            {this.state.counter}
            <button onClick={() => {
                this.setState({counter: this.state.counter-1})
            }}>Subtract</button>
            </>
        )
    }

}

export default Operations;
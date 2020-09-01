import React from 'react';

export default class ErrorButton extends React.Component{
    state = {
        error: false
    }

    render(){
        if(this.state.error){
            this.setState({
                info: undefined
            })
        }
        return(
            <button onClick={() => this.setState({error: true})}>Dead Project</button>
        )
    }
}
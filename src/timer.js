import React from 'react';


class Timer extends React.Component{
    constructor(props){
        super(props)
        this.state={
            seconds:0,

        }
        setInterval(() => this.tick(), 1000)
    }
    
    tick(){
        this.setState({
            seconds:this.state.seconds+1,
        })
    }


    render(){
       
        return ( <div>Seconds: {this.state.seconds}</div>);

    }

}
export default Timer;
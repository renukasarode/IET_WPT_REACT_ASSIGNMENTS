import { Component } from "react";

class FromViewToComp extends Component{
    constructor(props)
    {
        super(props);
        console.log("constructor");
        this.state = {
            data:props.data||""
        }
        this.eHandler.this.eHandler.bind(this);
        
    }
    static getDerivedStateFromProps()
    {
        console.log("in getDerivedStateFromProps");
    }

    componentDidMount()
    {
        console.log("getDerivedStateFromProps");
    }
    
    shouldComponentUpdate()
    {
        console.log("getDerivedStateFromProps");
    }

    eHandler(e)
    {
        this.setState({
            data:this.e.target.value
        })
    }

    render()
    {
        return(
            <div className="bordered">
                <h1>Display output</h1>
                <button onClick={this.eHandler}>click Me</button>
                <p>result:{this.state.data}</p>
            </div>
        )
        
    }
}
export default FromViewToComp;
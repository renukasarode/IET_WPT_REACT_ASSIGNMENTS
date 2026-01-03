import { Component } from "react";

class FromViewToComp extends Component{
    constructor(props)
    {
        super(props);
        console.log("constructor");
        this.state = {
            data:props.data||""
        }
        this.eHandler= this.eHandler.bind(this);
        
    }
     static getDerivedStateFromProps(props, state) {
        console.log("in getDerivedStateFromProps");
        return null; 
    }

     shouldComponentUpdate(nextProps, nextState) {
       console.log("getDerivedStateFromProps"); 
        return true; 
    }
  
    componentDidMount() {
        console.log("getDerivedStateFromProps");
    }

    eHandler(e)
    {
        this.setState({
            data:'after success'
        })
        console.log(this.state.data);
    }

    render()
    {
        return(
            <div className="bordered">
                <h1>Display output after clicking</h1>
                <button onClick={(e)=>this.eHandler(e)}>click Me</button>
                <p>result:{this.state.data}</p>
            </div>
        )
        
    }
}
export default FromViewToComp;
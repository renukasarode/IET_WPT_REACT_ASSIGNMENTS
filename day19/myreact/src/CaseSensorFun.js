import { Component } from "react";

class CaseSensor extends Component{

  constructor(props)
  {
     super(props)
     this.a = props.data;
     this.state={
        originalString :props.data || " ",
        displayString: props.data || " "
     }
     this.eventHandler = this.eventHandler.bind(this);
     this.inputHandler = this.inputHandler.bind(this);
  }

UpperCase()
{
    let upper = this.state.originalString.toUpperCase();
    
  return (upper)
}

 LowerCase()
{
    let lower = this.state.originalString.toLowerCase();

       return lower;
}
inputHandler(e)
{
    this.setState({
        originalString:e.target.value,
        displayString:e.target.value

    })
}
eventHandler(e) {
        console.log(e?.target);//whole Event 
         console.log(e.target.value);// component   event source 
        console.log("in event handler ")
        let newString = this.state.originalString;

        if (e?.target?.value == 'upper') {
           newString = this.UpperCase();
        }
        if (e?.target?.value == 'lower') {
           newString = this.LowerCase();
        }
        this.setState({
           displayString:newString 
        })
    }

render()
{
    return(
        <>
        <h1>hello from function</h1>
        <label>enter the name</label>
         <input type="text" id="t1" value={this.state.originalString} onChange={this.inputHandler}></input>
         <br></br>
         <button value="upper" onClick={(e)=>this.eventHandler(e)}>Upper</button>
         <button value="lower" onClick={(e)=>this.eventHandler(e)}>Lower</button>
        <p>Current String: {this.state.displayString}</p>
        <p>upperCase is: {this.UpperCase()}</p>
        <p>lowerCase is: {this.LowerCase()}</p>
        </>
    )
}
}
export default CaseSensor;

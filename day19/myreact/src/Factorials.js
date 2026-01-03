import { Component } from "react";
export default class Factorial extends Component{
  constructor(props){
    super(props)
    this.a = props.num1;
    this.state = {
      num1:parseInt(this.a),
      result:null
    }
    this.myeventHandler = this.myeventHandler.bind(this);
    this.inputHandler = this.inputHandler.bind(this);
}

  
  innerFunction(num1)
{
  let mul=1;
  for(let i =1;i<=num1;i++)
  {
    mul = mul*i;
  }
    return(
       mul
    );
}

// render()
// {
//     return(
//       <>
//          <h2>hello from component</h2>
//         <h3>Factorial is : {this.innerFunction()}</h3>
//         </>
//     )
// }
inputHandler(e)
{
   this.setState({
          num1:e.target.value
        }
        )
}
  myeventHandler(e) {
        console.log(e.target);//whole Event 
        console.log(e.target.value);// component   event source 
        console.log("in event handler ")

        if (e.target.value == 'Factorial') {
           let updated = this.innerFunction(this.state.num1);
           this.setState({
          result:updated
        })
        }
        if (e.target.value == 'Call') {
            // this.doOperation();
        }

        if (e.target.value == 'Call2') {
            // this.doOperation();
        }
        
    }



    // <Fact>
    render() {
        return (
            <>
               <h1>from Class Component</h1>
                Enter a number <input
                    type="text" id="t1" onChange={this.inputHandler} value={this.state.num1}
                    // onBlur={(e) => {console.log(e.target.value)}}

                ></input>

                <button value="Factorial" onClick={(e)=>this.myeventHandler(e)}>
                    Call Factorial
                </button>

                <button value="Call" onClick={(e)=>this.myeventHandler(e)} >Call  </button>

                <button value="Call2" onClick={(e)=>this.myeventHandler(e)}>Call 2 </button>


                {/*doOperation()  // this - instance of same class */}
                <br></br>
               <p>Factorial is: {this.state.result}</p>
            </>
        )

    }

  
}